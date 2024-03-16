export const lastName = 'Picherit-Steinbrucker';
export const firstName = 'Jean-François';

export enum EMeta {
  META_DESCRIPTION = 'description',
  META_KEYWORDS = 'keywords',
  META_AUTHOR = 'author',
  META_OG_IMAGE = 'og:image',
  META_TWITTER_CARD = 'twitter:card',
  META_CANONICAL = 'canonical',
}

export const meta: Record<EMeta, string> = {
  [EMeta.META_DESCRIPTION]: `
Bonjour, je m'apelle ${firstName} ${lastName}. Avec cinq années d'études spécialisées dans le développement web et trois années d'expérience en alternance, je suis un développeur full stack passionné par l'innovation et la création. Mon parcours m'a permis d'acquérir une solide expertise technique ainsi qu'une approche pragmatique dans la résolution de problèmes. Toujours avide de nouvelles connaissances et d'opportunités pour me surpasser, je suis convaincu que mon enthousiasme et mon dévouement sont des atouts précieux pour tout projet ambitieux.`,
  [EMeta.META_KEYWORDS]: `développeur web, full stack, portfolio, ${firstName} ${lastName}`,
  [EMeta.META_AUTHOR]: `${firstName} ${lastName}`,
  [EMeta.META_OG_IMAGE]: `https://res.cloudinary.com/dbmmk3kz0/image/upload/v1710267541/Portfolio/jf/jf-preface-2.webp`,
  [EMeta.META_TWITTER_CARD]: `summary_large_image`,
  [EMeta.META_CANONICAL]: `https://www.jfps.fr/fr`,
};
