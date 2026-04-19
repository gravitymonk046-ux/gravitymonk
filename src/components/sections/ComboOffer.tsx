import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag, Sparkles } from "lucide-react";

export default function ComboOffer() {
  return (
    <section className="w-full bg-gray-50/50 py-12 md:py-24">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col bg-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] sm:rounded-[2.5rem] sm:mx-4 md:mx-8 lg:mx-12 xl:mx-auto xl:max-w-7xl">
          
          {/* Image Section - Stacked explicitly above, no text overlay */}
          <div className="relative w-full bg-gray-100">
            <Image
              src="/images/combo.jpeg"
              alt="Gravity Monk 6 Soaps Combo Offer"
              width={1600}
              height={800}
              sizes="100vw"
              className="w-full h-auto max-h-[60vh] object-cover object-center"
              priority
            />
            {/* Simple tag in the corner of the image */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm md:text-base shadow-xl flex items-center gap-2 animate-pulse">
              <Tag size={16} />
              25% OFF
            </div>
          </div>

          {/* Content Section - Placed completely below the image */}
          <div className="flex flex-col items-center text-center p-8 sm:p-12 md:p-16 w-full max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <Sparkles size={16} className="text-yellow-600" />
              Limited Time Special
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Complete Care Combo
            </h2>
            
            <p className="text-base sm:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Experience the ultimate skin nourishment with our complete collection of all 6 premium handmade face and body soaps. Everything you need for glowing, healthy skin in one single package.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 w-full">
              <div className="flex items-center gap-4 bg-gray-50 px-8 py-4 rounded-3xl shadow-inner border border-gray-100">
                <div className="text-4xl sm:text-5xl font-black text-primary">
                  ₹917
                </div>
                <div className="flex flex-col items-start border-l border-gray-200 pl-4">
                  <div className="text-lg sm:text-xl text-gray-400 line-through font-medium">
                    ₹1222
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full mt-1">
                    SAVE ₹305
                  </div>
                </div>
              </div>
              
              <Link 
                href="/product/all-soaps-combo" 
                className="group flex w-full sm:w-auto items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-xl hover:-translate-y-1"
              >
                Grab the Deal <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            {/* Extra details placed nicely at the bottom */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full border-t border-gray-100 pt-8 text-left max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">All 6 Sub-Variants</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">100% Natural</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">All Skin Types</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
