import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag, Sparkles } from "lucide-react";

export default function ComboOffer() {
  return (
    <section className="w-full py-12 md:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.1)] border border-gray-100">

          {/* LEFT — Image (top on mobile, left on desktop) */}
          <div className="relative w-full md:w-1/2 flex-shrink-0 bg-gray-50 flex items-center justify-center p-6 md:p-10">
            {/* 25% OFF badge */}
            <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2 animate-pulse">
              <Tag size={14} />
              25% OFF
            </div>
            <div className="relative w-full aspect-square max-w-sm md:max-w-full">
              <Image
                src="/images/combo2.png"
                alt="Gravity Monk Complete Care Combo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* RIGHT — Content (bottom on mobile, right on desktop) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 sm:p-12 md:p-14 lg:p-16">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full text-xs sm:text-sm font-semibold mb-6 w-fit">
              <Sparkles size={15} className="text-yellow-500" />
              Limited Time Special
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
              Complete Care <br />
              <span className="text-primary">Combo</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-500 mb-8 leading-relaxed">
              Get all 6 premium handmade face and body soaps — Charcoal, Turmeric, Coffee, Rose, Shea Butter & The Magic — in one perfect bundle. Ideal for gifting or building a complete skincare ritual.
            </p>

            {/* Price block */}
            <div className="flex items-center gap-4 mb-8 bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 w-fit shadow-inner">
              <div className="text-4xl sm:text-5xl font-black text-primary">₹917</div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl text-gray-400 line-through font-medium">₹1222</span>
                <span className="text-xs sm:text-sm font-bold text-green-700 bg-green-100 px-3 py-0.5 rounded-full mt-1 text-center">
                  SAVE ₹305
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/product/all-soaps-combo"
              className="group inline-flex items-center justify-center w-full sm:w-fit px-10 py-4 text-base sm:text-lg font-bold text-white bg-primary rounded-full shadow-xl hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Grab the Deal <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>

            {/* Feature pills */}
            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-3">
              {["All 6 Variants", "100% Natural", "Free Shipping", "All Skin Types"].map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                  {feat}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

