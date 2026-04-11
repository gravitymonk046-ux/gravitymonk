import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Toaster as Sonner } from "@/components/ui/sonner";
import Script from 'next/script';

import { MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'Gravity Monk™ | Handmade Face & Body Soaps',
        template: '%s | Gravity Monk™'
    },
    description: 'Discover Gravity Monk™ - Nature\'s finest handmade face and body soaps. Crafted with premium natural ingredients for glowing, healthy skin. Organic, cruelty-free, and chemical-free skincare.',
    keywords: ['handmade soap', 'natural skincare', 'organic body soap', 'artisan soaps', 'Gravity Monk', 'chemical-free soap', 'vegan skincare', 'premium handmade soap'],
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
        icon: '/images/logo.png',
        apple: '/images/logo.png',
    }
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
            logo: 'https://gravitymonk.com/images/logo.png',
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
            <body className={inter.className}>
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
