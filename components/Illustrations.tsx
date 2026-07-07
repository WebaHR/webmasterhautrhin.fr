// Illustrations vectorielles maison : trait fin, arrondis, palette sobre
// (encre / accent teinté "Rhin" / touche or) — pas de stock, pas d'icônes génériques.

const stroke = "#14181F";
const accent = "#1F6F63";
const gold = "#C98A3E";

export function IllustrationCreation({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" fill="none" className={className} role="img" aria-label="Illustration : construction d'une page web par blocs">
      <rect x="40" y="40" width="400" height="280" rx="14" fill="#FDFDFB" stroke={stroke} strokeWidth="2" />
      <rect x="40" y="40" width="400" height="46" rx="14" fill="#F0EEE6" stroke={stroke} strokeWidth="2" />
      <circle cx="66" cy="63" r="5" fill={gold} />
      <circle cx="86" cy="63" r="5" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="106" cy="63" r="5" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="68" y="108" width="170" height="90" rx="8" fill={accent} opacity="0.12" stroke={accent} strokeWidth="2" strokeDasharray="5 5" />
      <rect x="254" y="108" width="158" height="42" rx="6" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="254" y="160" width="158" height="42" rx="6" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="68" y="216" width="344" height="16" rx="4" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="68" y="244" width="230" height="16" rx="4" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="68" y="272" width="110" height="30" rx="15" fill={accent} />
      <g>
        <path d="M382 246 L420 208" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <path d="M406 194 L434 222 L420 236 L392 208 Z" fill="#FDFDFB" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
        <path d="M382 246 L372 268 L394 258 Z" fill={gold} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function IllustrationEcommerce({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" fill="none" className={className} role="img" aria-label="Illustration : boutique en ligne et panier d'achat">
      <rect x="52" y="70" width="180" height="130" rx="10" fill="#FDFDFB" stroke={stroke} strokeWidth="2" />
      <rect x="52" y="70" width="180" height="130" rx="10" fill={accent} opacity="0.1" />
      <circle cx="142" cy="120" r="26" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M120 168 h44" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <rect x="52" y="212" width="180" height="20" rx="6" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="52" y="244" width="120" height="16" rx="5" fill={gold} opacity="0.8" />

      <rect x="256" y="70" width="180" height="130" rx="10" fill="#FDFDFB" stroke={stroke} strokeWidth="2" />
      <circle cx="346" cy="120" r="26" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M324 168 h44" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <rect x="256" y="212" width="180" height="20" rx="6" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="256" y="244" width="120" height="16" rx="5" fill={accent} opacity="0.8" />

      <g>
        <path
          d="M92 300 h18 l14 60 h150"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M124 320 h180 l-14 40 h-152 z" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="150" cy="336" r="9" fill={accent} />
        <circle cx="270" cy="336" r="9" fill={gold} />
      </g>
    </svg>
  );
}

export function IllustrationSeo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" fill="none" className={className} role="img" aria-label="Illustration : recherche et courbe de progression du référencement">
      <rect x="60" y="150" width="46" height="110" rx="4" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="122" y="110" width="46" height="150" rx="4" fill={accent} opacity="0.15" stroke={accent} strokeWidth="2" />
      <rect x="184" y="70" width="46" height="190" rx="4" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="246" y="40" width="46" height="220" rx="4" fill={accent} opacity="0.25" stroke={accent} strokeWidth="2" />
      <path
        d="M60 210 L145 150 L207 120 L269 70"
        stroke={gold}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M269 70 l-2 20 M269 70 l-22 4" stroke={gold} strokeWidth="3" strokeLinecap="round" />
      <g>
        <circle cx="372" cy="200" r="46" fill="#FDFDFB" stroke={stroke} strokeWidth="2.5" />
        <path d="M340 196 h64 M340 210 h44" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <path d="M404 232 l30 30" stroke={stroke} strokeWidth="7" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function IllustrationHosting({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" fill="none" className={className} role="img" aria-label="Illustration : serveur d'hébergement sécurisé">
      <rect x="140" y="60" width="200" height="240" rx="12" fill="#FDFDFB" stroke={stroke} strokeWidth="2" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="162" y={90 + i * 76} width="156" height="56" rx="8" fill={i === 1 ? "#1F6F63" : "#FDFDFB"} opacity={i === 1 ? 0.12 : 1} stroke={stroke} strokeWidth="2" />
          <circle cx="182" cy={118 + i * 76} r="6" fill={i === 1 ? accent : gold} />
          <path d={`M204 ${118 + i * 76} h96`} stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
      <g>
        <circle cx="240" cy="330" r="26" fill="#FDFDFB" stroke={accent} strokeWidth="2.5" />
        <path d="M229 330 l8 8 l16 -18" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      <path d="M60 130 q40 0 40 40 t40 40" stroke={accent} strokeWidth="2" strokeDasharray="4 6" fill="none" opacity="0.5" />
      <path d="M420 130 q-40 0 -40 40 t-40 40" stroke={gold} strokeWidth="2" strokeDasharray="4 6" fill="none" opacity="0.5" />
    </svg>
  );
}

export function IllustrationMaintenance({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" fill="none" className={className} role="img" aria-label="Illustration : maintenance et mises à jour d'un site">
      <rect x="70" y="60" width="280" height="200" rx="12" fill="#FDFDFB" stroke={stroke} strokeWidth="2" />
      <rect x="70" y="60" width="280" height="36" rx="12" fill="#F0EEE6" stroke={stroke} strokeWidth="2" />
      <circle cx="94" cy="78" r="4" fill={gold} />
      <rect x="100" y="126" width="240" height="14" rx="4" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="100" y="152" width="180" height="14" rx="4" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="100" y="178" width="210" height="14" rx="4" fill={accent} opacity="0.2" stroke={accent} strokeWidth="2" />
      <rect x="100" y="212" width="90" height="26" rx="13" fill={accent} />

      <g transform="translate(330,230)">
        <circle r="40" fill="#FDFDFB" stroke={stroke} strokeWidth="2.5" />
        <path
          d="M0 -26 v10 M0 16 v10 M-26 0 h10 M16 0 h10 M-18 -18 l7 7 M11 11 l7 7 M-18 18 l7 -7 M11 -11 l7 -7"
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle r="12" fill="none" stroke={accent} strokeWidth="3" />
      </g>
      <path d="M330 190 v-30" stroke={gold} strokeWidth="2" strokeDasharray="3 5" opacity="0.6" />
    </svg>
  );
}
