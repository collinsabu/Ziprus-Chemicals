import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

// Images
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import banner from "./banner.jpg";

// Dynamic form (client-side only)
const OrderForm = dynamic(() => import("../OrderForm"), { ssr: false });

/* =========================
   SEO METADATA (APP ROUTER)
========================= */
export const metadata = {
  title: "Buy Calcium Carbonate & Dolomite in Nigeria | Bulk Supply",
  description:
    "Buy high-purity calcium carbonate and dolomite in Nigeria. Ideal for paint, plastics, toothpaste, adhesives, and animal feed. Bulk supply from 15 tons with nationwide delivery.",
  keywords:
    "buy calcium carbonate Nigeria, calcium carbonate supplier Nigeria, dolomite supplier Nigeria, ultrafine calcium carbonate, calcium carbonate for paint, toothpaste calcium carbonate, plastics calcium carbonate, limestone supplier Nigeria",
  openGraph: {
    title: "Buy Calcium Carbonate in Nigeria | Ziprus Chemicals",
    description:
      "Reliable supplier of calcium carbonate and dolomite for industrial use in Nigeria. Bulk orders available with fast nationwide delivery.",
  },
};

const CalciumCarbonate = () => {
  return (
    <main className="bg-white text-black pt-20">

      {/* ================= HERO ================= */}
      <section className="relative w-full">
        <div className="relative h-[65vh] sm:h-[80vh]">
          <Image
            src={banner}
            alt="High-purity calcium carbonate and dolomite supplier in Nigeria"
            fill
            priority
            className="object-cover"
          />

          {/* Text panel */}
          <div className="absolute inset-0 flex items-center">
            <div className="bg-[#032C26]/95 max-w-xl mx-6 sm:ml-16 p-6 sm:p-10 rounded-2xl shadow-2xl">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Buy Calcium Carbonate & Dolomite in Nigeria
              </h1>

              <p className="mt-4 text-gray-200 text-sm sm:text-base">
                Trusted industrial supplier for paint, plastics, toothpaste,
                adhesives, and animal feed manufacturers. Bulk supply from 15 tons
                with reliable nationwide delivery.
              </p>

              <Link
                href="#quote-form"
                className="inline-block mt-6 bg-[#0CC76D] text-[#032C26] px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
              >
                Get Bulk Price Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-[#032C26] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Why Manufacturers Choose Ziprus Chemicals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <ul className="space-y-4">
              <li>✅ High-purity calcium carbonate & dolomite</li>
              <li>✅ Suitable for paint, plastics, toothpaste & adhesives</li>
              <li>✅ Consistent particle size & high whiteness</li>
            </ul>
            <ul className="space-y-4">
              <li>✅ Bulk orders starting from 15 tons</li>
              <li>✅ Reliable nationwide delivery across Nigeria</li>
              <li>✅ Trusted long-term industrial supply partner</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= USE-CASE CARDS ================= */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={img1}
              alt="Calcium carbonate for paint and coatings manufacturers"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Our Calcium Factory
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Auchi, Ikpeshi • Reliabilty • High efficiency
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={img2}
              alt="Ultrafine calcium carbonate for plastics and adhesives production"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Plastics & Adhesives Grade
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Uniform particles • Strength enhancement
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={img3}
              alt="Feed-grade calcium carbonate limestone for livestock nutrition"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Animal Feed Grade
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Safe • Nutrient-rich • Trusted quality
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="bg-[#035145] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Industries We Supply Across Nigeria
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Paint & Coatings • Toothpaste & Personal Care • Plastics & Polymers •
            Animal Feed • Glass & Ceramics • Construction • Adhesives & Sealants
          </p>
        </div>
      </section>

      {/* ================= ORDER FORM ================= */}
      <section
        id="quote-form"
        className="bg-[#032C26] py-20 px-6 mb-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0CC76D] mb-4">
            Request a Bulk Price Quote
          </h2>
          <p className="text-white mb-10 max-w-2xl mx-auto">
            Minimum order quantity is 15 tons. Submit your request and our sales
            team will respond with pricing, specifications, and delivery details.
          </p>

          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl max-w-2xl mx-auto text-left">
            <OrderForm />
          </div>
        </div>
      </section>

    </main>
  );
};

export default CalciumCarbonate;
