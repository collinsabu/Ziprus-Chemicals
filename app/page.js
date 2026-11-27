import dynamic from "next/dynamic";

import ImageCarousel from "./components/ImageCarousel";
import UltrafinePromoSection from "../app/components/UltrafinePromoSection";

//import from react icons

import TawkToWidget from "./components/TawkToWidget";

// Dynamically import OrderForm to reduce initial bundle size
const OrderForm = dynamic(() => import("./OrderForm"), {
  ssr: false,
});

export const metadata = {
  title: "Calcium Carbonate, Dolomite & Limestone Supplier in Nigeria | Ziprus Chemicals",
  description:
    "Ziprus Chemicals supplies industrial calcium carbonate, dolomite, limestone and kaolin from Edo State, Nigeria. Request a quotation for your manufacturing requirements.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.png",
  },
};

export default function Home() {
  return (
    <main className="z-0 pt-28">
      <section className="bg-base_color text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-base_text">Industrial minerals · Edo State, Nigeria</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Minerals for modern manufacturing.</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-emerald-50">Source calcium carbonate, dolomite, limestone and kaolin for your industrial requirements. Speak to our team about grades, quantities and delivery across Nigeria and West Africa.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#order-form" className="rounded-lg bg-base_text px-6 py-3 font-bold text-base_color">Request a quotation</a><a href="#products" className="rounded-lg border border-white/50 px-6 py-3 font-semibold">Explore products</a></div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl"><ImageCarousel /></div>
        </div>
      </section>
      <section id="products" className="mx-auto max-w-7xl scroll-mt-32 px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-base_two">Our materials</p>
        <h2 className="mt-2 text-3xl font-bold text-base_color sm:text-4xl">Find the right mineral for your business</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Calcium carbonate","Industrial mineral filler for manufacturing applications.","/calcium-carbonate"],
            ["Superfine calcium carbonate","Fine particle grades for specialist applications.","/super-fine-calcium"],
            ["Dolomite","Discuss white and off-white mineral grades with our team.","/calcium-carbonate-dolomite"],
            ["Animal feed limestone","Limestone for animal feed manufacturing requirements.","/animal-feed-limestone"],
            ["Glass grade limestone","Discuss limestone specifications for glass production.","/glass-grade-limestone"],
            ["Ultrafine, coated calcium & kaolin","Contact us to discuss specialist mineral requirements.","/quote"]
          ].map(([name,description,href])=><article key={name} className="flex flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-emerald-900/5"><h3 className="text-xl font-bold text-base_color">{name}</h3><p className="mt-3 flex-1 leading-relaxed text-slate-600">{description}</p><a href={href} className="mt-5 font-semibold text-base_two hover:underline">Explore material →</a></article>)}
        </div>
      </section>

      <section className="mt-10  bg-[#032C26] py-12">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* CARD */}
          {[
            { title: "Top Quality", img: "/images/quality.jpg" },
            { title: "Fast Delivery", img: "/images/delivery.jpg" },
            { title: "Best Price", img: "/images/pricing.jpg" },
          ].map((item) => (
            <article
              key={item.title}
              className="group relative h-44 sm:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.img}')` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#032C26]/95 via-[#035145]/70 to-transparent transition-opacity duration-300 group-hover:from-[#032C26]" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-semibold tracking-wide transform transition-transform duration-300 group-hover:-translate-y-1">
                  {item.title}
                </h3>

                {/* Accent Line */}
                <div className="w-10 h-1 bg-[#0CC76D] mt-2 transition-all duration-300 group-hover:w-16" />
              </div>
            </article>
          ))}
        </div>
      </section>

      

      {/* {/* Factory images section /} */}
<section className="bg-[#032C26] py-20 my-10">
  {/* Heading */}
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
      Inside Our Production Process
    </h2>
    <p className="mt-4 text-gray-200 text-lg">
      From raw limestone to high-performance industrial minerals — every step
      is engineered for consistency, quality, and scale.
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-7xl mx-auto mt-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      { title: "Raw Material Intake", desc: "Carefully sourced limestone from trusted mines." },
      { title: "Stone Sorting", desc: "Manual and mechanical sorting for purity." },
      { title: "Limestone Quarry", desc: "High-grade extraction site in Ikpeshi Edo state, Nigeria." },
      { title: "Animal Feed Grade", desc: "Processed feed & glass grade limestone." },
      { title: "Secondary Milling", desc: "Refined to industrial standards." },
      { title: "Ultrafine Grinding", desc: "Precision particle-size reduction." },
      { title: "Particle Classification", desc: "Uniform consistency across batches." },
      { title: "Quality Control", desc: "Strict lab testing & monitoring." },
      { title: "Dolomite Quarry", desc: "Premium Dolomite excavation." },
      { title: "Bulk Storage", desc: "Clean, contamination-free storage." },
      { title: "Calcium Factory Ikpeshi", desc: "High-purity calcium processing." },
      { title: "Dispatch & Logistics", desc: "Reliable nationwide delivery." },
    ].map((item, index) => (
      <article
        key={index}
        className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      >
        {/* Image */}
        <div
          className="h-44 sm:h-48 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/process-${index + 1}.jpg')`,
          }}
        />

        {/* Text */}
        <div className="p-5 bg-[#035145]">
          <h3 className="text-base font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-1 text-sm text-gray-200">
            {item.desc}
          </p>

          <div className="mt-3 w-10 h-0.5 bg-[#0CC76D]" />
        </div>
      </article>
    ))}
  </div>
</section>



{/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> this is the ads section >>>>>>>>>>>>>>>>>>>>>>>>>. */}



<section className="my-10">
<UltrafinePromoSection />
</section>


 
      {/* ================= Order Form ========================== */}

      <section
        className="order-form bg-base_color mb-10 sm:mb-16"
        id="order-form" style={{scrollMarginTop: "120px"}}
      >
        <div className="order-form-container w-full px-4 mx-auto flex items-center flex-col pt-16">
          <h2 className="text-xl text-center sm:text-4xl text-base_text font-bold">
            Request a Quotation
          </h2>
          <p className="sm:w-2/4 mb-10 mt-3 text-white text-center font-light">
            Tell us which material you need, your estimated quantity and delivery location. Our sales team will review your requirements and contact you to discuss pricing and availability.
          </p>

          <div className="w-full max-w-2xl mb-[40px]">
            <OrderForm />
          </div>
        </div>
      </section>
      <TawkToWidget />
    </main>
  );
}
