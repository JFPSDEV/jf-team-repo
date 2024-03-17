import {
  GitHubIcon,
  JFLogoIcon,
  type IconProps,
  LinkedInIcon,
  IconFileCv,
  IconPresentation,
  IconMail,
  IconMessage,
  IconHome,
} from '@jfteam/icons';

import { ELocale, ENavlink } from '../enums';

type TIcon = (props: IconProps) => React.JSX.Element;
interface TNavLinkItem {
  value: string;
  anchor?: string;
  link: string;
}

interface TSocialMedia {
  Icon: TIcon;
  link: string;
  label: string;
}

interface TNavLink extends Record<ELocale, TNavLinkItem> {
  Icon: TIcon;
  default?: ELocale;
}

interface THeader {
  logo: { Icon: TIcon; link: string };
  navlink: Record<ENavlink, TNavLink>;
  socialMedia: TSocialMedia[];
}

export const headerLink: THeader = {
  logo: {
    Icon: JFLogoIcon,
    link: '/',
  },
  navlink: {
    [ENavlink.HOME]: {
      Icon: IconHome,
      [ELocale.EN]: { value: 'Home', link: '/' },
      [ELocale.FR]: { value: 'Accueil', link: '/' },
    },
    [ENavlink.CV]: {
      Icon: IconFileCv,
      [ELocale.EN]: { value: 'CV', link: '/cv' },
      [ELocale.FR]: { value: 'CV', link: '/cv' },
    },
    [ENavlink.PROJECT]: {
      Icon: IconPresentation,
      [ELocale.EN]: { value: 'Projects', anchor: 'projects', link: '/' },
      [ELocale.FR]: { value: 'Projets', anchor: 'projets', link: '/' },
    },
    [ENavlink.FEEDBACK]: {
      Icon: IconMessage,
      [ELocale.EN]: { value: 'Feedback', anchor: 'feedback', link: '/' },
      [ELocale.FR]: { value: 'Avis', anchor: 'avis', link: '/' },
    },
    [ENavlink.CONTACT]: {
      Icon: IconMail,
      [ELocale.EN]: { value: 'Contact', anchor: 'contact', link: '/' },
      [ELocale.FR]: { value: 'Contact', anchor: 'contact', link: '/' },
    },
  },
  socialMedia: [
    {
      Icon: GitHubIcon,
      link: process?.env?.NEXT_PUBLIC_GITHUB_LINK || '',
      label: 'GitHub',
    },
    {
      Icon: LinkedInIcon,
      link: process?.env?.NEXT_PUBLIC_LINKEDIN_LINK || '',
      label: 'Linkedin',
    },
  ],
};

export function getAllRoutes(navlinks: TNavLink[], locales: ELocale[]): string[] {
  const routes = new Set<string>();

  navlinks.forEach((navlinkParam: TNavLink) => {
    Object.values(locales).forEach((localeKey) => {
      const localeItem = navlinkParam[localeKey];
      const link = localeItem?.link;
      const anchor = localeItem?.anchor;

      if (link) {
        const baseRoute = `/${localeKey}${link.length <= 1 ? '' : link}`;
        routes.add(baseRoute);
        if (anchor) {
          routes.add(`${baseRoute}#${localeItem.anchor}`);
        }
      }
    });
  });

  return Array.from(routes);
}

export const navLinks = Object.values(headerLink.navlink);
export const locales = Object.values(ELocale);

export const routes = [headerLink.logo.link, ...getAllRoutes(navLinks, locales)];
