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
  title:
    "Animal Feed Grade Limestone Supplier in Nigeria | Bulk Supply",
  description:
    "Buy high-quality feed-grade limestone in Nigeria. Ideal for poultry, cattle, fish, and livestock feed production. Bulk supply from 15 tons with nationwide delivery.",
  keywords:
    "animal feed limestone Nigeria, feed grade limestone supplier, limestone for poultry feed, limestone for cattle feed, calcium carbonate for animal feed, livestock minerals Nigeria, bulk limestone supplier",
  openGraph: {
    title: "Feed Grade Limestone for Animal Feed Producers in Nigeria",
    description:
      "Premium limestone for livestock nutrition. Trusted by animal feed mills and farmers across Nigeria.",
  },
};

const AnimalFeedLimestone = () => {
  return (
    <main className="bg-white text-black pt-20">

      {/* ================= HERO ================= */}
      <section className="relative w-full">
        <div className="relative h-[65vh] sm:h-[80vh]">
          <Image
            src={banner}
            alt="Feed grade limestone for animal feed production in Nigeria"
            fill
            priority
            className="object-cover"
          />

          {/* Text Panel */}
          <div className="absolute inset-0 flex items-center">
            <div className="bg-[#032C26]/95 max-w-xl mx-6 sm:ml-16 p-6 sm:p-10 rounded-2xl shadow-2xl">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Animal Feed Grade Limestone in Nigeria
              </h1>

              <p className="mt-4 text-gray-200 text-sm sm:text-base">
                High-calcium limestone designed to improve animal nutrition,
                bone strength, and feed efficiency. Trusted by feed mills and
                livestock producers. Bulk supply from 15 tons.
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
            Why Choose Our Feed Grade Limestone?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <ul className="space-y-4">
              <li>✅ High calcium content for strong bones & eggshells</li>
              <li>✅ Controlled particle size for better digestion</li>
              <li>✅ Clean, safe & suitable for animal nutrition</li>
            </ul>
            <ul className="space-y-4">
              <li>✅ Ideal for poultry, cattle, fish & livestock feed</li>
              <li>✅ Trusted by animal feed mills nationwide</li>
              <li>✅ Reliable bulk delivery across Nigeria</li>
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
              alt="Limestone for poultry feed production"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Poultry Feed Limestone
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Strong eggshells • Improved calcium intake
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={img2}
              alt="Feed grade limestone for cattle and livestock"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                Cattle & Livestock Feed
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Bone development • Nutritional balance
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={img3}
              alt="Limestone for fish feed manufacturing"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="bg-[#032C26] px-4 py-3">
              <h3 className="text-white font-semibold text-sm">
                package material sample
              </h3>
              <p className="text-[#0CC76D] text-xs mt-1">
                Mineral enrichment • Consistent quality
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
            Animal Feed Mills • Poultry Feed Producers • Livestock Farmers •
            Cattle Feed Companies • Fish Feed Manufacturers
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
            Minimum order quantity is 15 tons. Submit your requirements and our
            sales team will contact you with pricing and delivery details.
          </p>

          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl max-w-2xl mx-auto text-left">
            <OrderForm />
          </div>
        </div>
      </section>

    </main>
  );
};

export default AnimalFeedLimestone;
