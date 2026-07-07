export const website = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": "https://webmasterhautrhin.fr/#website",

  url: "https://webmasterhautrhin.fr",

  name: "Webmaster Haut-Rhin",

  inLanguage: "fr",

  potentialAction: {
    "@type": "SearchAction",

    target:
      "https://webmasterhautrhin.fr/?s={search_term_string}",

    "query-input": "required name=search_term_string",
  },
};
