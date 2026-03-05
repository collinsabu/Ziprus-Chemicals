"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MarketingManualPage() {
  const [active, setActive] = useState("document-purpose");

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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex min-h-screen bg-gradient-to-b from-base_two to-base_color text-white my-14 pl-20 py-8">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-64 sticky top-0 h-screen bg-base_text/10 p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Contents</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`cursor-pointer px-3 py-2 rounded hover:bg-base_text/20 transition ${
                active === section.id ? "bg-base_text/30 font-semibold" : ""
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
        className="flex-1 px-6 py-12 max-w-4xl mx-auto space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Each Section */}
        <Section
          id="document-purpose"
          title="Document Purpose"
          content={`
This manual is designed to educate and guide all marketing staff representing Ziprus Chemicals.
It explains:
- Who we are as a company
- What industrial solid minerals are
- The products we produce and supply
- The industries that use our minerals
- Who our customers are and how to approach them

Every marketer must read, understand, and follow this document before engaging customers or representing the company in the market.
The goal is to ensure that every representative of Ziprus Chemicals communicates our value clearly, confidently, and professionally.
`}
        />

        <Section
          id="who-we-are"
          title="Who We Are"
          content={`
Ziprus Chemicals is an industrial solid minerals manufacturing company.
Our factory operations are located in Auchi, Edo State, where we mine, process, and package industrial minerals used by manufacturing companies across Nigeria.

Strategic and sales coordination:
- Auchi / Ikpeshi, Edo State: Production & Mining Operations
- Lagos State: Sales coordination and customer relationships

We are producers, not traders or middlemen. This distinction allows us to:
- Maintain consistent quality
- Control mineral purity
- Offer reliable supply
- Provide competitive pricing
`}
        />

        <Section
          id="industrial-minerals"
          title="Industrial Solid Minerals"
          content={`
Industrial solid minerals are natural raw materials extracted from the earth and used in manufacturing processes.
Typically found in rock form, they are processed and supplied to factories as essential ingredients or fillers.

Variations include:
- Chemical composition
- Colour
- Texture
- Purity level

Applications:
- Paint: Calcium carbonate as filler
- Plastics: Improves strength and reduces cost
- Animal feed: Calcium supplement
`}
          imagePlaceholder={true}
        />

        <Section
          id="process-extraction"
          title="Process of Extraction"
          content={`
The minerals we supply go through several stages before reaching the customer:

1. Mineral Identification: Geological surveys locate deposits
2. Surface Excavation: Dozers/excavators remove topsoil
3. Site Cleaning: Area cleared for drilling
4. Drilling: Holes prepared for blasting
5. Blasting: Controlled explosions break rocks
6. Knocking/Breaking: Reduce rock sizes
7. Haulage to Factory: Transport to processing
8. Processing: Crushing, milling, grading
9. Packaging and Delivery: Ready for customers
`}
          imagePlaceholder={true}
        />

        <Section
          id="main-minerals"
          title="Main Minerals We Supply"
          content={`
Core minerals:
- Dolomite (Calcium Carbonate)
- Limestone / Calcite
- Kaolin

Forms:
- Large rocks (lumps/boulders)
- Chippings
- Powder
- Various mesh grades
`}
        />

        <Section
          id="dolomite"
          title="Dolomite (Calcium Carbonate)"
          content={`
Types:
- Pure White
- Off-White
- Grey

Forms supplied:
1. Boulders/Lumps: raw rocks for internal processing
2. Pure White Calcium Carbonate: 800–1000 mesh, mainly for paint
3. Ultra-Fine: CU25 (2500 mesh), CU30 (3000 mesh)
4. Off-White: Less pure, lower cost
5. Coated Calcium Carbonate: Specialized, water-resistant

Uses:
- Paint production
- Plastic manufacturing
- Masterbatch production
- PVC production
- Toothpaste
- Industrial fillers
`}
          imagePlaceholder={true}
        />

        <Section
          id="limestone"
          title="Limestone / Calcite"
          content={`
Types:
- White Limestone
- Grey Limestone

Forms:
- Powder grade
- Boulders
- Animal feed
- Glass grade
- Sugar grade
- Textured paint grade

Uses:
- Adhesives
- Agriculture
- Animal feed
- Plastic production
- Glass production
- Cement-related industries
`}
          imagePlaceholder={true}
        />

        <Section
          id="kaolin"
          title="Kaolin"
          content={`
Types:
- White
- Brown

Form supplied:
- Powder

Uses:
- Ceramics
- Tiles
- Paint
- Paper
`}
          imagePlaceholder={true}
        />

        <Section
          id="target-customers"
          title="Our Target Customers"
          content={`
Industries:
- Animal feed
- Paint & coatings
- Plastic & PVC
- Ceramic & tiles
- Glass
- Chemicals & adhesives
- Raw material distributors

Key decision makers:
- Factory owners
- Production managers
- Procurement managers
- Operations managers
- Warehouse managers
- Industrial store owners
`}
        />

        <Section
          id="common-questions"
          title="Common Questions During Marketing"
          content={`
- Why change supplier: Explain quality, reliability, price
- Price higher? Emphasize long-term savings through consistency
- Delivery: Quick due to strong logistics
- Payment terms: Ex-factory, cash, or credit for loyal customers
- Minimum order: 30 tons (or smaller if customer arranges transport)
- Ex-factory purchase: Allowed if customer provides transportation
`}
        />

        <Section
          id="approach-factory"
          title="How to Approach a Factory When Marketing Minerals"
          content={`
Key points:
- Understand decision makers
- First contact: polite & professional
- Introduce company clearly
- Ask questions before selling
- Offer samples
- Focus on value, not price
- Follow up consistently
- Maintain professional behavior
`}
        />

        <Section
          id="grades-mesh"
          title="Understanding Mineral Grades and Mesh Sizes"
          content={`
- Mineral Grade: Quality and chemical composition
- Mesh Size: Fineness of powder, higher mesh = finer powder
- Importance: Affects smoothness, texture, strength, brightness, machine compatibility
- Main mesh ranges: Standard powder, fine, ultrafine (CU25, CU30)
`}
        />

        <Section
          id="identify-factories"
          title="How to Identify Factories That Use Our Minerals"
          content={`
- Industries using minerals: Paint, Plastic, PVC, Masterbatch, Ceramic, Glass, Adhesives, Animal Feed, Paper
- Locations: Lagos, Ogun, Onitsha, Aba, Kano industrial zones
- Research: Google, industrial directories, trade associations, referrals
- Signs of use: Warehouses with bulk minerals, mixing tanks, production lines
`}
        />

        <Section
          id="marketing-scripts"
          title="Marketing Scripts"
          content={`
Phone:
"Good morning, my name is ___ from Ziprus Chemicals. Do you use minerals like calcium carbonate, limestone, dolomite?"

WhatsApp:
"Hello, I represent Ziprus Chemicals. We supply high-quality minerals for your production. Can I provide samples or info?"

Physical Visit:
"Good morning, I represent Ziprus Chemicals. I wanted to introduce our company and learn about your production needs."
`}
        />

        <Section
          id="common-mistakes"
          title="Common Marketing Mistakes to Avoid"
          content={`
- Not understanding the product
- Promising what the company cannot deliver
- Focusing only on price
- Not speaking to the right person
- Giving up too quickly
- Poor professional conduct
- Lack of proper follow-up
`}
        />

        <Section
          id="step-by-step"
          title="How to Approach a Factory Step-by-Step"
          content={`
Step 1: Research factory before contact
Step 2: Identify decision makers
Step 3: Introduce yourself & company clearly
Step 4: Ask about raw materials
Step 5: Present products
Step 6: Offer samples or product info
Step 7: Exchange contact info
Step 8: Follow up professionally
Step 9: Maintain long-term relationships

Key Takeaway: Preparation, professional communication, understanding customer needs, consistent follow-up.
`}
        />
      </motion.div>
    </main>
  );
}

// Section Component
function Section({ id, title, content, imagePlaceholder }) {
  return (
    <section id={id} className="space-y-4 scroll-mt-24">
      <motion.h2
        className="text-3xl font-bold border-b-2 border-base_text pb-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="space-y-2 text-base leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {content
          .split("\n")
          .map((line, idx) =>
            line.trim() === "" ? null : <p key={idx}>{line}</p>,
          )}
      </motion.div>
      {imagePlaceholder && (
        <div className="h-48 w-full bg-gray-700/40 flex items-center justify-center rounded-md">
          <span className="text-gray-300">[Image Placeholder]</span>
        </div>
      )}
    </section>
  );
}
