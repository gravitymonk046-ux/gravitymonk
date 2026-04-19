import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Toaster as Sonner } from "@/components/ui/sonner";
import Script from 'next/script';

import { MessageCircle } from "lucide-react";

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
    title: {
        default: 'Gravity Monk™ – Handmade Natural Soaps for Skin Rituals',
        template: '%s | Gravity Monk™'
    },
    description: 'Elevate your skincare ritual with handcrafted natural soaps by Gravity Monk™. Pure, chemical-free, and made for glowing healthy skin.',
    keywords: [
        'handmade soap', 'natural skincare', 'organic body soap', 'artisan soaps', 
        'Gravity Monk', 'chemical-free soap', 'vegan skincare', 'premium handmade soap',
        'best handmade soap for glowing skin', 'natural soap for men and women',
        'chemical free soap india', 'organic skincare kerala', 'luxury handmade soap india',
        'best soap kerala', 'natural soap india', 'handmade soaps in kerala'
    ],
    authors: [{ name: 'Gravity Monk' }],
    creator: 'Gravity Monk',
    publisher: 'Gravity Monk',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://gravitymonk.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Gravity Monk™ | Handmade Face & Body Soaps',
        description: 'Premium natural face and body soaps crafted with nature\'s finest ingredients. Elevate your skincare routine.',
        url: 'https://gravitymonk.com',
        siteName: 'Gravity Monk™',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Gravity Monk™ Premium Handmade Soaps',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gravity Monk™ | Premium Handmade Soaps',
        description: 'Experience the magic of nature with Gravity Monk™ handmade soaps.',
        images: ['/images/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
            { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
            { url: '/images/logo2.png', sizes: '192x192', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Store',
            name: 'Gravity Monk™',
            description: 'Handmade Face & Body Soaps crafted with Nature\'s Finest Ingredients.',
            url: 'https://gravitymonk.com',
            logo: 'https://gravitymonk.com/images/logo2.png',
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+919207090505',
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: 'en',
            },
            sameAs: [
                'https://www.instagram.com/gravitymonk',
            ],
        },
        {
            '@context': 'https://schema.org',
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://gravitymonk.com"
                }
            ]
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'What makes Gravity Monk soaps unique?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Gravity Monk soaps are handcrafted in small batches using 100% natural, plant-based ingredients. We avoid all synthetic fragrances, parabens, and sulfates, focusing on the ritual of purity through pristine botanical elements.'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'Are your products cruelty-free?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, absolutely! We are committed to ethical skincare. All our products are 100% cruelty-free and never tested on animals.'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'How should I store my handmade soap?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'To make your handmade soap last longer, keep it in a well-draining soap dish between uses. This allows the soap to dry properly and maintains its firm texture.'
                    }
                }
            ]
        }
    ];

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <Script
                    id="json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={poppins.className}>
                <Providers>
                    {children}
                    <Sonner />
                    <a
                        href="https://wa.me/919207090505"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center"
                        aria-label="Contact us on WhatsApp"
                    >
                        <MessageCircle size={24} fill="currentColor" />
                    </a>
                </Providers>
            </body>
        </html>
    );
}
