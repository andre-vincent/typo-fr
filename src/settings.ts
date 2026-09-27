type Config = {
  title: string;
  description: string;
  lang: string;
  favicon: string;
  og: {
    image: string;
    imageAlt: string;
    imageType: string;
    imageWidth: string;
    imageHeight: string;
  };
};

export const siteConfig: Config = {
// Apparaît dans le logo du navigateur, la barre de titre du navigateur et le titre du flux RSS.
  title: "Typographie - FR",
// Utilisé comme méta description par défaut et description OG sur des pages sans la leur.
  Description : "Un modèle Astro minimal en français stylisé avec Pico CSS",

// Balise de langue BCP 47 pour l'attribut HTML lang (par exemple "en", "de", "fr", "zh-TW").
  lang: "fr",
  favicon: "/favicon.svg",
  og: {
// Remplacer par votre propre image (1200×630 px recommandé). Le chemin est relatif à /public.
    image: "/ogImage.png",
    imageAlt: "Image Open Graph pour le modèle Astro typo-fr",
    imageType: "image/png",
    imageWidth: "1200",
    imageHeight: "630",
  },
};
