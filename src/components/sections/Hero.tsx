import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg.src} alt="Handmade natural soaps" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="badge-category mb-6 inline-block"
          >
            Estd. 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-hero mb-6"
          >
            The Ritual <br />
            <span className="italic text-primary">of Purity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="body-large mb-10 max-w-lg"
          >
            Experience the transformative power of nature. We handcraft artisanal
            soaps that turn your daily cleanse into a mindful ritual of purity and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#shop" className="btn-primary">
              Shop Collection
            </a>
            <a href="#about" className="btn-outline">
              Our Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
