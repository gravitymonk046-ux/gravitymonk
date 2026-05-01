import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What makes Gravity Monk soaps unique?",
        answer: "Gravity Monk soaps are handcrafted in small batches using 100% natural, plant-based ingredients. We avoid all synthetic fragrances, parabens, and sulfates, focusing on the ritual of purity through pristine botanical elements."
    },
    {
        question: "Are your products cruelty-free?",
        answer: "Yes, absolutely! We are committed to ethical skincare. All our products are 100% cruelty-free and never tested on animals."
    },
    {
        question: "How should I store my handmade soap?",
        answer: "To make your handmade soap last longer, keep it in a well-draining soap dish between uses. This allows the soap to dry properly and maintains its firm texture."
    },
    {
        question: "Do you ship across India?",
        answer: "Yes, we ship our premium handmade soaps to all locations across India. Orders are typically processed within 24-48 hours."
    },
    {
        question: "Are the soaps suitable for sensitive skin?",
        answer: "Our soaps are formulated with gentle, natural oils and butters, making them suitable for most skin types, including sensitive skin. We recommend checking individual product ingredients if you have specific allergies."
    }
];

const FAQSection = () => {
    return (
        <section id="faq" className="editorial-faq-section py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <p className="badge-category mb-4">Common Questions</p>
                    <h2 className="heading-section">Frequently Asked Questions</h2>
                </div>

                <div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-secondary">
                                <AccordionTrigger className="text-left font-display text-lg py-6 hover:text-primary transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground body-large pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
