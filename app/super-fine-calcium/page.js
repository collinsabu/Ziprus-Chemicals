import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

// Images
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import banner from "./banner.jpg";

// Dynamic form
const OrderForm = dynamic(() => import("../OrderForm"), { ssr: false });

/* =========================
   SEO METADATA (APP ROUTER)
========================= */
export const metadata = {
  title: "Superfine & Ultrafine Calcium Carbonate Supplier in Nigeria | Bulk",
  description:
    "Buy superfine and ultrafine calcium carbonate in Nigeria. High-purity micronized CaCO3 for premium paint, plastics, toothpaste, coatings, and adhesives. Bulk orders from 30 tons.",
  keywords:
    "superfine calcium carbonate Nigeria, ultrafine calcium carbonate Nigeria, micronized calcium carbonate, CaCO3 for paint, toothpaste calcium carbonate, plastics filler Nigeria, industrial calcium carbonate supplier",
  openGraph: {
    title: "Superfine & Ultrafine Calcium Carbonate Supplier in Nigeria",
    description:
      "Premium micronized calcium carbonate for industrial manufacturing. Reliable bulk supply across Nigeria.",
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
            alt="Superfine and ultrafine calcium carbonate supplier in Nigeria"
            fill
            priority
            className="object-cover"
          />

          {/* Text Panel (same structure as last page) */}
          <div className="absolute inset-0 flex items-center">
            <div className="bg-[#032C26]/95 max-w-xl mx-6 sm:ml-16 p-6 sm:p-10 rounded-2xl shadow-2xl">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Superfine & Ultrafine Calcium Carbonate in Nigeria
              </h1>

              <p className="mt-4 text-gray-200 text-sm sm:text-base">
                High-purity micronized calcium carbonate engineered for premium
                paint, plastics, toothpaste, coatings, and adhesive production.
                Bulk supply from 30 tons nationwide.
              </p>

              <Link
                href="#quote-form"
                className="inline-block mt-6 bg-[#0CC76D] text-[#032C26] px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
              >
                Request Bulk Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-[#032C26] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Why Choose Our Superfine & Ultrafine Calcium Carbonate?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <ul className="space-y-4">
              <li>✅ Ultra-fine particle size for smooth finishes</li>
              <li>✅ High brightness & consistent whiteness</li>
              <li>✅ Excellent dispersion in liquid systems</li>
            </ul>
            <ul className="space-y-4">
              <li>✅ Ideal for premium industrial formulations</li>
              <li>✅ Stable quality for mass production</li>
              <li>✅ Reliable nationwide delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= USE-CASE CARDS (SAME STRUCTURE) ================= */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={img1}
              alt="Superfine calcium carbonate for premium paint and coatings"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Ultrafine loaded 
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                A truck of Ultrafine ready for delivery
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={img2}
              alt="Ultrafine calcium carbonate for plastics and adhesives"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Plastics & Adhesives (Ultrafine Grade)
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Strength enhancement • Fine particle control
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={img3}
              alt="Micronized calcium carbonate for toothpaste manufacturing"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Toothpaste & Paints etc
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Safe • Consistent • High purity
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
            Adhesives & Sealants • Printing Ink • Packaging Materials
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
            Minimum order quantity: 30 tons. Submit your requirements for
            superfine or ultrafine calcium carbonate and our team will respond
            with pricing, specifications, and delivery timelines.
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
