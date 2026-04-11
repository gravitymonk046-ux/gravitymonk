// import { motion } from "framer-motion";
// import { Star, Quote } from "lucide-react";

// const testimonials = [
//     {
//         name: "Sarah Jenkins",
//         role: "Wellness Advocate",
//         content: "My morning cleanse has become a sacred moment. The Charcoal Pine bar is simply transformative—it clears not just my skin, but my mind.",
//         rating: 5
//     },
//     {
//         name: "David Chen",
//         role: "Architect",
//         content: "The fragrance is subtle, earth-born, and grounding. A true ritual of purity that I look forward to every single day. The craftsmanship is evident.",
//         rating: 5
//     },
//     {
//         name: "Elena Rodriguez",
//         role: "Yoga Instructor",
//         content: "Finally, a soap that treats my skin with the respect it deserves. Pristine ingredients and pure results. My skin has never felt more alive.",
//         rating: 5
//     }
// ];

// const Testimonials = () => {
//     return (
//         <section className="py-20 md:py-32 bg-background overflow-hidden">
//             <div className="container mx-auto px-6">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-16"
//                 >
//                     <Quote className="mx-auto text-primary/20 mb-6" size={48} />
//                     <h2 className="heading-section mb-4">Voices of the Ritual</h2>
//                     <p className="body-large max-w-xl mx-auto text-muted-foreground">
//                         Stories of transformation and purity from those who have embraced the Gravity Monk lifestyle.
//                     </p>
//                 </motion.div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {testimonials.map((t, i) => (
//                         <motion.div
//                             key={t.name}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: i * 0.2 }}
//                             className="p-8 rounded-3xl bg-secondary/30 border border-border/50 flex flex-col h-full"
//                         >
//                             <div className="flex gap-1 mb-4">
//                                 {[...Array(t.rating)].map((_, idx) => (
//                                     <Star key={idx} size={14} className="fill-primary text-primary" />
//                                 ))}
//                             </div>
//                             <p className="body-base italic mb-8 flex-1">"{t.content}"</p>
//                             <div>
//                                 <p className="font-display font-bold text-foreground tracking-wide uppercase text-sm mb-1">{t.name}</p>
//                                 <p className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</p>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Testimonials;
