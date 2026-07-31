import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterSection {
    id: string;
    title: string;
    links: FooterLink[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
    {
        id: 'about',
        title: 'About',
        links: [
            { label: 'About us', href: '#' },
            { label: 'Contact us', href: '#' },
            { label: 'Feedback', href: '#' },
        ],
    },
    {
        id: 'legal',
        title: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Cookies', href: '#' },
        ],
    },
];

export const SOCIAL_LINKS = [
    { icon: SlSocialFacebook, href: '#', label: 'Facebook' },
    { icon: SlSocialInstagram, href: '#', label: 'Instagram' },
    { icon: SlSocialTwitter, href: '#', label: 'Twitter' },
    { icon: SlSocialYoutube, href: '#', label: 'Youtube' },
];

