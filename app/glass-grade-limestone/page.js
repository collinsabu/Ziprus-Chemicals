import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

// Images
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import banner from "./banner.jpg";

// Dynamic Order Form
const OrderForm = dynamic(() => import("../OrderForm"), { ssr: false });

/* =========================
   SEO METADATA (APP ROUTER)
========================= */
export const metadata = {
  title: "Glass Grade Limestone Supplier in Nigeria | Low Iron Limestone",
  description:
    "Buy high-purity, low-iron glass grade limestone in Nigeria. Ideal for float glass, container glass, fiberglass & specialty glass. Bulk supply from 15 tons.",
  keywords:
    "glass grade limestone Nigeria, low iron limestone supplier, limestone for glass production, float glass raw material Nigeria, container glass limestone, fiberglass limestone supplier, high purity limestone Nigeria",
  openGraph: {
    title: "Bulk Glass Grade Limestone Supplier in Nigeria",
    description:
      "Premium low-iron limestone for glass manufacturing industries. Reliable bulk supply and nationwide delivery.",
  },
};

const GlassGradeLimestone = () => {
  return (
    <main className="bg-white text-black pt-20">

      {/* ================= HERO ================= */}
      <section className="relative w-full">
        <div className="relative h-[65vh] sm:h-[80vh]">
          <Image
            src={banner}
            alt="Low iron glass grade limestone for glass manufacturing in Nigeria"
            fill
            priority
            className="object-cover"
          />

          {/* Text Panel */}
          <div className="absolute inset-0 flex items-center">
            <div className="bg-[#032C26]/95 max-w-xl mx-6 sm:ml-16 p-6 sm:p-10 rounded-2xl shadow-2xl">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Glass Grade Limestone for Glass Manufacturing
              </h1>

              <p className="mt-4 text-gray-200 text-sm sm:text-base">
                High-purity, low-iron limestone engineered for float glass,
                container glass, fiberglass, and specialty glass production.
                Bulk supply from 15 tons across Nigeria.
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
            Why Choose Our Glass Grade Limestone?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <ul className="space-y-4">
              <li>✅ High purity limestone with low iron content</li>
              <li>✅ Supports clear glass & consistent melting</li>
              <li>✅ Controlled chemistry for industrial glass use</li>
            </ul>
            <ul className="space-y-4">
              <li>✅ Suitable for float, container & fiberglass</li>
              <li>✅ Consistent sizing for furnace efficiency</li>
              <li>✅ Reliable bulk delivery nationwide</li>
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
              alt="Glass grade limestone for float glass production"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Float Glass Production
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Low iron • High clarity • Stable melt
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={img2}
              alt="Limestone for container glass manufacturing"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Our Limestone Quarry
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Strength • Uniform composition
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={img3}
              alt="High purity limestone for fiberglass and specialty glass"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Glass grade limestone
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Clean chemistry • Reliable supply
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="bg-[#035145] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Industries We Supply
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Float Glass Manufacturers • Container Glass Producers •
            Fiberglass Industry • Flat Glass Plants • Specialty Glass &
            Glass Ceramics Manufacturers
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
            Request a Bulk Supply Quote
          </h2>

          <p className="text-white mb-10 max-w-2xl mx-auto">
            Minimum order quantity is 15 tons. Submit your specifications and
            our sales team will respond with pricing and delivery details.
          </p>

          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl max-w-2xl mx-auto text-left">
            <OrderForm />
          </div>
        </div>
      </section>

    </main>
  );
};

export default GlassGradeLimestone;
