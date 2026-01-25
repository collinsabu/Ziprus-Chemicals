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
   SEO METADATA
========================= */
export const metadata = {
  title: 'Buy Industrial Dolomite in Nigeria | Ziprus Chemicals',
  description:
    'High-purity dolomite for industrial applications in Nigeria. Ideal for metallurgy, chemical production, ceramics, and agriculture. Bulk supply from 15 tons.',
  keywords:
    'dolomite Nigeria, industrial dolomite, dolomite for metallurgy, dolomite for ceramics, dolomite for agriculture, magnesium source, chemical dolomite, bulk dolomite supplier, high purity dolomite, Ziprus Chemicals',
  openGraph: {
    title: 'Industrial Dolomite Supplier in Nigeria | Ziprus Chemicals',
    description:
      'Reliable supplier of high-purity dolomite for steel, chemical, ceramic, and agricultural industries. Nationwide bulk supply from 15 tons.',
  },
};

const DolomiteLanding = () => {
  return (
    <main className="bg-white text-black pt-20">

      {/* ================= HERO ================= */}
      <section className="relative w-full">
        <div className="relative h-[65vh] sm:h-[80vh]">
          <Image
            src={banner}
            alt="High-purity dolomite for industrial applications in Nigeria"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="bg-[#032C26]/95 max-w-xl mx-6 sm:ml-16 p-6 sm:p-10 rounded-2xl shadow-2xl">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Buy High-Purity Dolomite in Nigeria
              </h1>
              <p className="mt-4 text-gray-200 text-sm sm:text-base">
                Premium dolomite for metallurgy, ceramics, chemical production, and agriculture. Bulk supply from 15 tons.
              </p>

              <Link
                href="#quote-form"
                className="inline-block mt-6 bg-[#0CC76D] text-[#032C26] px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-[#032C26] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Why Choose Ziprus Chemicals Dolomite?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <ul className="space-y-4">
              <li>✅ High-purity dolomite with consistent particle size</li>
              <li>✅ Ideal for metallurgical, chemical, ceramic, and agricultural applications</li>
              <li>✅ Reliable, industrial-grade dolomite tested for quality</li>
            </ul>
            <ul className="space-y-4">
              <li>✅ Bulk orders starting from 15 tons</li>
              <li>✅ Nationwide delivery across Nigeria</li>
              <li>✅ Trusted supplier for industrial applications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= IMAGE USE-CASE CARDS ================= */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={img1}
              alt="Dolomite for metallurgy and steel production"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Brilliant White Dolomite
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Acts as flux • Reduces impurities
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={img2}
              alt="Dolomite for ceramics and glass production"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Dolomite Excavation
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Improves whiteness and durability
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={img3}
              alt="Dolomite for agriculture and chemical industry"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Dolomite Stocked
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Soil conditioner • Source of calcium & magnesium
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="bg-[#035145] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Paint producers • Iron & Glass Manufacturing • Chemical Industry • Ceramics
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
            Request a Quote
          </h2>
          <p className="text-white mb-10 max-w-2xl mx-auto">
            Bulk orders starting from 15 tons. Complete the form below and our team will contact you with pricing, specifications, and delivery timelines.
          </p>

          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl max-w-2xl mx-auto text-left">
            <OrderForm />
          </div>
        </div>
      </section>

    </main>
  );
};

export default DolomiteLanding;
