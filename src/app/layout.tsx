import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Toaster as Sonner } from "@/components/ui/sonner";

import { MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Gravity Monk™',
    description: 'Handmade Face & Body Soaps | Nature\'s Finest Ingredients',
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
    return (
        <html lang="en" suppressHydrationWarning>
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
