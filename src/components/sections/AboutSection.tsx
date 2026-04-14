import { motion } from "framer-motion";
import { Leaf, Droplets, Sun } from "lucide-react";

const features = [
  { icon: Leaf, title: "100% Natural", desc: "Only pure, plant-based ingredients" },
  { icon: Droplets, title: "Handcrafted", desc: "Small batches made with care" },
  { icon: Sun, title: "Cruelty Free", desc: "Never tested on animals" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-32 bg-secondary/50">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="badge-category mb-4 inline-block">Our Philosophy</p>
          <h2 className="heading-section mb-6">
            Inked in Nature, <br />
            <span className="italic text-primary">Born for the Ritual</span>
          </h2>
          <p className="body-large mb-8">
            At Gravity Monk, we transform the mundane into the sacred. Every bar is
            meticulously handcrafted to facilitate your **Ritual of Purity**, using
            only the most pristine botanical ingredients and time-honored methods.
          </p>
          <a href="#shop" className="btn-primary">Explore Products</a>
        </div>

        <div className="grid gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-5 p-6 rounded-2xl bg-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={22} className="text-primary" />
              </div>
              <div>
                <h4 className="font-display text-lg font-medium mb-1 text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
