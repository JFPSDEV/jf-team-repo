import {
  GitHubIcon,
  JFLogoIcon,
  type IconProps,
  LinkedInIcon,
  IconFileCv,
  IconPresentation,
  IconMail,
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
    [ENavlink.CV]: {
      Icon: IconFileCv,
      [ELocale.EN]: { value: 'My CV', link: '/cv' },
      [ELocale.FR]: { value: 'Mon CV', link: '/cv' },
    },
    [ENavlink.PROJECT]: {
      Icon: IconPresentation,
      [ELocale.EN]: { value: 'My projects', anchor: 'projects', link: '/' },
      [ELocale.FR]: { value: 'Mes projets', anchor: 'projets', link: '/' },
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
