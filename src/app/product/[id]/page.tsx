import { Metadata } from 'next';
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductPageClient from "./ProductPageClient";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) return {};

    return {
        title: `${product.name} | Natural Handmade Soap`,
        description: `${product.description} Experience the ritual of purity with Gravity Monk™ ${product.name} soap.`,
        alternates: {
            canonical: `https://gravitymonk.com/product/${id}`,
        },
        openGraph: {
            title: `${product.name} | Gravity Monk™`,
            description: product.description,
            images: [{ url: product.image }],
        },
    };
}

export default async function ProductPage({ params }: Props) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    const similarProducts = products.filter(p => p.id !== product.id).slice(0, 3);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        image: `https://gravitymonk.com${product.image}`,
        description: product.description,
        brand: {
            '@type': 'Brand',
            name: 'Gravity Monk™',
        },
        offers: {
            '@type': 'Offer',
            url: `https://gravitymonk.com/product/${id}`,
            priceCurrency: 'INR',
            price: product.price,
            availability: product.outOfStock ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProductPageClient product={product} similarProducts={similarProducts} />
        </>
    );
}
