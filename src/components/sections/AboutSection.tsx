import { Leaf, Droplets, Sun } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Leaf, title: "100% Natural", desc: "Only pure, plant-based ingredients" },
  { icon: Droplets, title: "Handcrafted", desc: "Small batches made with care" },
  { icon: Sun, title: "Cruelty Free", desc: "Never tested on animals" },
];

const mosaicImages = [
  { src: "/images/Charcoal - Front Side.jpg", alt: "Charcoal Soap" },
  { src: "/images/Coffee - Front Side.jpg", alt: "Coffee Soap" },
  { src: "/images/Rose - Front Side.jpg", alt: "Rose Soap" },
  { src: "/images/The Magic - Front Side.jpg", alt: "The Magic Soap" },
];

const AboutSection = () => (
  <section id="about" className="editorial-about-section">
    {/* ── Philosophy Row ── */}
    <div className="editorial-row editorial-row--philosophy">
      {/* Left: text */}
      <div className="editorial-col editorial-col--text">
        <p className="editorial-eyebrow">Our Philosophy</p>
        <h2 className="editorial-heading">
          New philosophy<br />
          of selfcare:<br />
          <span className="editorial-heading--italic">healthy skin</span>
        </h2>
        <p className="editorial-body">
          Gravity Monk is about conscious simplicity — effective formulas, thoughtful
          ingredients, and soft textures designed for real, everyday life.
        </p>
        <p className="editorial-body" style={{ marginTop: "0.75rem" }}>
          We believe skincare should support your skin, not overwhelm it, combining
          modern science with a calm, minimal approach.
        </p>
        <a href="#shop" className="editorial-btn">More about Gravity Monk</a>
      </div>

      {/* Right: product image */}
      <div className="editorial-col editorial-col--image">
        <div className="editorial-product-img-wrap">
          <Image
            src="/images/combo2.png"
            alt="Gravity Monk handmade soaps"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, 45vw"
          />
        </div>
      </div>
    </div>

    {/* ── Pure Care Row ── */}
    <div className="editorial-row editorial-row--pure-care">
      {/* Left: image mosaic */}
      <div className="editorial-col editorial-col--mosaic">
        <div className="editorial-mosaic">
          {mosaicImages.map((img) => (
            <div key={img.alt} className="editorial-mosaic__item">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 22vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right: text */}
      <div className="editorial-col editorial-col--text editorial-col--text-right">
        <h2 className="editorial-heading">
          Pure care<br />
          <span className="editorial-heading--italic">by nature</span>
        </h2>
        <p className="editorial-body">
          Thoughtfully crafted formulas designed to bring balance and calm to your daily
          routine. Lightweight textures, gentle ingredients, and a minimalist approach
          help you support healthy-looking skin — effortlessly, every day.
        </p>

        {/* Feature pills */}
        <div className="editorial-pills">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="editorial-pill">
              <Icon size={16} className="editorial-pill__icon" />
              <div>
                <span className="editorial-pill__title">{title}</span>
                <span className="editorial-pill__desc">{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
