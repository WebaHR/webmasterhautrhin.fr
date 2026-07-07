import Script from "next/script";

import { professionalService } from "./ProfessionalService";
import { localBusiness } from "./LocalBusiness";
import { person } from "./Person";
import { organization } from "./Organization";
import { website } from "./Website";

export default function JsonLd() {
  return (
    <>
      <Script
        id="schema-professional"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalService),
        }}
      />

      <Script
        id="schema-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness),
        }}
      />

      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person),
        }}
      />

      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />

      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website),
        }}
      />
    </>
  );
}
