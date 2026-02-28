"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function UltrafinePromoSection() {
  return (
    <section className="bg-[#032C26] py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* 🎥 Video */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-[#035145]"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Ultrafine Calcium Carbonate Production"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        {/* 📢 Promo Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative bg-[#035145] rounded-2xl p-8 shadow-xl overflow-hidden"
        >
          {/* Decorative Accent */}
          <div className="absolute -top-16 -right-16 w-52 h-52 bg-[#0CC76D]/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">

            {/* Text */}
            <div className="text-white flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Ultrafine Calcium Carbonate
              </h3>

              <p className="text-white/90 text-sm sm:text-base mb-4">
                Premium ultrafine calcium carbonate engineered for
                plastics, paints, coatings, adhesives, and industrial
                manufacturing where precision and consistency matter more.
              </p>

              <ul className="text-sm space-y-1 mb-5">
                <li>✔ High purity & brightness</li>
                <li>✔ Excellent dispersion</li>
                <li>✔ Reliable bulk supply</li>
              </ul>

              <Link
                href="/super-fine-calcium"
                className="inline-block bg-[#0CC76D] text-[#032C26] font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Request a Quote →
              </Link>
            </div>

            {/* Image / Graphic */}
            <div className="hidden sm:flex flex-shrink-0">
              <img
                src="/images/ultrafine-promo.png"
                alt="Ultrafine Calcium Carbonate"
                className="w-48 drop-shadow-xl animate-float"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
