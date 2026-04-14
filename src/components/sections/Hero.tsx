import { motion } from "framer-motion";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Handmade natural soaps"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-2xl">
          <p className="badge-category mb-6 inline-block">
            Estd. 2026
          </p>

          <h1 className="heading-hero mb-6">
            The Ritual <br />
            <span className="italic text-primary">of Purity</span>
          </h1>

          <p className="body-large mb-10 max-w-lg">
            Experience the transformative power of nature. We handcraft artisanal
            soaps that turn your daily cleanse into a mindful ritual of purity and care.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#shop" className="btn-primary">
              Shop Collection
            </a>
            <a href="#about" className="btn-outline">
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
