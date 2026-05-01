import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full md:h-[100svh] bg-[#1c1c1c] overflow-hidden flex flex-col md:justify-between pt-16 md:pt-0">
      {/* Full-bleed background image on desktop; standard inline image block on mobile */}
      <div className="relative w-full aspect-video md:aspect-auto md:absolute md:inset-0 md:z-0">
        <Image
          src="/images/landing-page.png"
          alt="Gravity Monk™ handmade natural soaps — complete skincare collection"
          fill
          priority
          className="object-contain md:object-cover object-bottom"
        />
        {/* Overlay fades - only needed on desktop where text overlaps image */}
        <div className="hidden md:block absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="hidden md:block absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Top Content Zone (Text & Branding) */}
      <div className="relative z-10 pt-8 md:pt-32 px-4 sm:px-8 md:px-12 flex flex-col items-center text-center">
        {/* Estd. badge */}
        <span
          className="inline-block mb-4 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            color: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          Estd. 2026
        </span>

        {/* Brand name heading */}
        <h1
          className="select-none leading-none mb-6"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(4.5rem, 15vw, 12rem)",
            color: "#fff",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            textShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          Gravity
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          <span style={{ color: "hsl(82,30%,70%)", fontStyle: "italic" }}>
            Monk
          </span>
          <sup
            style={{
              fontSize: "0.15em",
              verticalAlign: "super",
              letterSpacing: "0.05em",
              opacity: 0.6,
              fontStyle: "normal",
            }}
          >
            ™
          </sup>
        </h1>
      </div>
      
      {/* Bottom Content Zone (Caption & Buttons) */}
      <div className="relative z-10 pb-10 sm:pb-12 px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-center md:text-left">
        <p
          className="text-sm leading-relaxed max-w-lg text-white/95"
          style={{ fontFamily: "'Poppins', sans-serif", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
        >
          The Ritual of Purity. <br />
          <span className="text-xs text-white/80 mt-1 block">
            Experience the transformative power of nature. Handcrafted artisanal soaps that turn your daily cleanse into a mindful ritual.
          </span>
        </p>

        <div className="flex gap-4">
          <a
            href="#shop"
            className="inline-block px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
            style={{
              background: "hsl(82,25%,37%)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
            }}
          >
            Shop Collection
          </a>
          <a
            href="#about"
            className="inline-block px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-white/20"
            style={{
              border: "1px solid rgba(255,255,255,0.6)",
              color: "#fff",
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(6px)"
            }}
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
