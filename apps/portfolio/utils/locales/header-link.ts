import { GitHubIcon, JFLogoIcon, type IconProps, LinkedInIcon } from '@jfteam/icons';

import { ELocale, ENavlink } from '../enums';

interface TNavLinkItem {
  value: string;
  anchor?: string;
  link: string;
}

interface TSocialMedia {
  Icon: (props: IconProps) => React.JSX.Element;
  link: string;
  label: string;
}

interface THeader {
  logo: { Icon: (props: IconProps) => React.JSX.Element; link: string };
  navlink: Record<ENavlink, Record<ELocale, TNavLinkItem>>;
  socialMedia: TSocialMedia[];
}

export const headerLink: THeader = {
  logo: {
    Icon: JFLogoIcon,
    link: '/',
  },
  navlink: {
    [ENavlink.CV]: {
      [ELocale.EN]: { value: 'My CV', link: '/cv' },
      [ELocale.FR]: { value: 'Mon CV', link: '/cv' },
    },
    [ENavlink.PROJECT]: {
      [ELocale.EN]: { value: 'My projects', anchor: 'projects', link: '/' },
      [ELocale.FR]: { value: 'Mes projets', anchor: 'projets', link: '/' },
    },
    [ENavlink.CONTACT]: {
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
