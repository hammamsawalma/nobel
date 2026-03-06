import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s | Noble Rock Private Wealth',
        default: 'Noble Rock Private Wealth | Securing Generational Capital',
    },
    description: 'An exclusive fiduciary collective providing absolute return architecture and generational wealth structuring for high-net-worth families and institutions.',
    openGraph: {
        title: 'Noble Rock Private Wealth',
        description: 'An exclusive fiduciary collective providing absolute return architecture.',
        url: 'https://noblerock.com',
        siteName: 'Noble Rock',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Noble Rock Private Wealth',
        description: 'Securing Generational Capital.',
    },
};

export default function V2Head() {
    return null; // This is a specialized Metadata config we could inject dynamically
}
