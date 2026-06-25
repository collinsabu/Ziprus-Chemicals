"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MarketingManualPage() {
  const [active, setActive] = useState("document-purpose");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "document-purpose", title: "Document Purpose" },
    { id: "who-we-are", title: "Who We Are" },
    { id: "industrial-minerals", title: "Industrial Solid Minerals" },
    { id: "process-extraction", title: "Process of Extraction" },
    { id: "main-minerals", title: "Main Minerals We Supply" },
    { id: "dolomite", title: "Dolomite (Calcium Carbonate)" },
    { id: "limestone", title: "Limestone / Calcite" },
    { id: "kaolin", title: "Kaolin" },
    { id: "target-customers", title: "Our Target Customers" },
    { id: "common-questions", title: "Common Questions" },
    { id: "approach-factory", title: "How to Approach a Factory" },
    { id: "grades-mesh", title: "Mineral Grades & Mesh" },
    { id: "identify-factories", title: "Identify Factories" },
    { id: "marketing-scripts", title: "Marketing Scripts" },
    { id: "common-mistakes", title: "Common Marketing Mistakes" },
    { id: "step-by-step", title: "Approach Factory Step-by-Step" },
  ];

  const scrollToSection = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-b from-[#032C26] to-[#035145] font-sans text-gray-100">
      {/* Mobile Menu */}
      <div className="lg:hidden p-4 bg-[#032C26]/50 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#0CC76D]">Contents</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="px-4 py-2 bg-[#035145]/40 rounded hover:bg-[#0CC76D]/20 transition text-white"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:block lg:flex lg:flex-col w-72 sticky top-0 h-screen bg-[#032C26]/70 backdrop-blur-md p-6 overflow-y-auto transition-all duration-300`}
      >
        <h2 className="text-2xl font-bold mb-6 tracking-wide text-[#0CC76D]">
          Manual Contents
        </h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#035145]/50 ${
                active === section.id
                  ? "bg-[#035145]/70 font-semibold shadow-md text-white"
                  : "font-medium text-gray-100"
              }`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <motion.div
        className="flex-1 px-6 py-10 lg:py-16 max-w-5xl mx-auto space-y-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Section
          id="document-purpose"
          title="Document Purpose"
          content={`This manual is designed to educate and guide all marketing staff representing Ziprus Chemicals.
It explains:
- Who we are as a company
- What industrial solid minerals are
- The products we produce and supply
- The industries that use our minerals
- Who our customers are and how to approach them

Every marketer must read, understand, and follow this document before engaging customers or representing the company.
The goal is to ensure that every representative of Ziprus Chemicals communicates our value clearly, confidently, and professionally.`}
        />

        <Section
          id="who-we-are"
          title="Who We Are"
          content={`Ziprus Chemicals is an industrial solid minerals manufacturing company.
Our factory operations are located in Auchi, Edo State, where we mine, process, and package industrial minerals used by manufacturing companies across Nigeria.

Strategic and sales coordination:
- Auchi / Ikpeshi, Edo State: Production & Mining Operations
- Lagos State: Sales coordination and customer relationships

We are producers, not traders or middlemen. This distinction allows us to:
- Maintain consistent quality
- Control mineral purity
- Offer reliable supply
- Provide competitive pricing`}
        />

        <Section
          id="industrial-minerals"
          title="Industrial Solid Minerals"
          content={`Industrial solid minerals are natural raw materials extracted from the earth and used in manufacturing processes.
Typically found in rock form, they are processed and supplied to factories as essential ingredients or fillers.

Variations include:
- Chemical composition
- Colour
- Texture
- Purity level

Applications:
- Paint: Calcium carbonate as filler
- Plastics: Improves strength and reduces cost
- Animal feed: Calcium supplement`}
          imageSrc="/images/industrial-minerals.jpg"
        />

        <Section
          id="process-extraction"
          title="Process of Extraction"
          content={`The minerals we supply go through several stages before reaching the customer:

1. Mineral Identification: Geological surveys locate deposits
2. Surface Excavation: Dozers/excavators remove topsoil
3. Site Cleaning: Area cleared for drilling
4. Drilling: Holes prepared for blasting
5. Blasting: Controlled explosions break rocks
6. Knocking/Breaking: Reduce rock sizes
7. Haulage to Factory: Transport to processing
8. Processing: Crushing, milling, grading
9. Packaging and Delivery: Ready for customers`}
          imageSrc="/images/extraction-process.jpg"
        />

        <Section
          id="main-minerals"
          title="Main Minerals We Supply"
          content={`Core minerals:
- Dolomite (Calcium Carbonate)
- Limestone / Calcite
- Kaolin

Forms:
- Large rocks (lumps/boulders)
- Chippings
- Powder
- Various mesh grades`}
        />
      </motion.div>
    </main>
  );
}

// Section Component
function Section({ id, title, content, imageSrc }) {
  return (
    <section id={id} className="space-y-6 scroll-mt-24">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold pb-1 text-[#0CC76D]"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="space-y-3 text-base sm:text-lg leading-relaxed text-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {content
          .split("\n")
          .map((line, idx) =>
            line.trim() === "" ? null : <p key={idx}>{line}</p>
          )}
      </motion.div>

      {/* ✅ UPDATED IMAGE BLOCK */}
      {imageSrc && (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/10">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      )}
    </section>
  );
}