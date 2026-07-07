import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const DESTINATION_EMAIL = "webmasterhautrhin@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const RECAPTCHA_SCORE_THRESHOLD = 0.5;

async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("Variable d'environnement RECAPTCHA_SECRET_KEY manquante.");
    return { success: false as const, error: "not_configured" as const };
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: secretKey, response: token }),
  });

  const result: {
    success: boolean;
    score?: number;
    action?: string;
    "error-codes"?: string[];
  } = await response.json();

  if (!result.success || (result.score ?? 0) < RECAPTCHA_SCORE_THRESHOLD) {
    return { success: false as const, error: "low_score" as const, result };
  }

  return { success: true as const, result };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      projects,
      message,
      rgpd,
      recaptchaToken,
    }: {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      projects?: string[];
      message?: string;
      rgpd?: boolean;
      recaptchaToken?: string;
    } = body;

    // Validation minimale côté serveur (en plus des attributs required côté formulaire).
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !rgpd) {
      return NextResponse.json(
        {
          error:
            "Merci de renseigner votre prénom, nom, email et d'accepter la politique de confidentialité.",
        },
        { status: 400 }
      );
    }

    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "Vérification anti-spam manquante. Merci de recharger la page et réessayer." },
        { status: 400 }
      );
    }

    const recaptchaCheck = await verifyRecaptcha(recaptchaToken);

    if (!recaptchaCheck.success) {
      if (recaptchaCheck.error === "not_configured") {
        return NextResponse.json(
          { error: "Le service anti-spam n'est pas configuré. Merci de nous contacter par téléphone." },
          { status: 500 }
        );
      }
      console.warn("reCAPTCHA refusé :", recaptchaCheck.result);
      return NextResponse.json(
        {
          error:
            "Votre demande a été bloquée par notre protection anti-spam. Merci de réessayer ou de nous contacter par téléphone.",
        },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("Variable d'environnement RESEND_API_KEY manquante.");
      return NextResponse.json(
        { error: "Le service d'envoi n'est pas configuré. Merci de nous contacter par téléphone." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    // Adresse d'envoi : utilisez "onboarding@resend.dev" pour tester rapidement,
    // ou une adresse de votre domaine vérifié dans Resend en production
    // (voir le README pour la configuration).
    const fromAddress =
      process.env.CONTACT_FROM_EMAIL || "Site Webmaster Haut-Rhin <onboarding@resend.dev>";

    const projectList =
      Array.isArray(projects) && projects.length > 0
        ? projects.join(", ")
        : "Non précisé";

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone?.trim() || "Non renseigné");
    const safeProjectList = escapeHtml(projectList);
    const safeMessage = escapeHtml(message?.trim() || "(aucun message)");

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [DESTINATION_EMAIL],
      replyTo: email,
      subject: `Nouvelle demande de devis — ${firstName} ${lastName}`,
      text: `Nouvelle demande reçue depuis webmasterhautrhin.fr

Prénom : ${firstName}
Nom : ${lastName}
Email : ${email}
Téléphone : ${phone?.trim() || "Non renseigné"}
Type(s) de projet : ${projectList}

Message :
${message?.trim() || "(aucun message)"}`,
      html: `
        <div style="font-family: sans-serif; font-size: 15px; color: #14181F; line-height: 1.6;">
          <h2 style="margin-bottom: 4px;">Nouvelle demande reçue depuis webmasterhautrhin.fr</h2>
          <p><strong>Prénom :</strong> ${safeFirstName}</p>
          <p><strong>Nom :</strong> ${safeLastName}</p>
          <p><strong>Email :</strong> ${safeEmail}</p>
          <p><strong>Téléphone :</strong> ${safePhone}</p>
          <p><strong>Type(s) de projet :</strong> ${safeProjectList}</p>
          <p><strong>Message :</strong><br />${safeMessage.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend lors de l'envoi du formulaire de contact :", error);
      return NextResponse.json(
        {
          error:
            "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous contacter par téléphone.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire de contact :", error);
    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous contacter par téléphone.",
      },
      { status: 500 }
    );
  }
}
