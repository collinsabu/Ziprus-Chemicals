import dynamic from "next/dynamic";

import ImageCarousel from "./components/ImageCarousel";
import UltrafinePromoSection from "../app/components/UltrafinePromoSection";

//import from react icons
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery, TbCurrencyNaira } from "react-icons/tb";

import TawkToWidget from "./components/TawkToWidget";

// Dynamically import OrderForm to reduce initial bundle size
const OrderForm = dynamic(() => import("./OrderForm"), {
  ssr: false,
});

export const metadata = {
  title: "Ziprus - Solid Mineral Producers in Africa",
  description:
    "Your Number 1 trusted Solid Mineral Producers in Africa. Top quality, fast delivery, and best prices guaranteed.",
  keywords:
    "solid minerals, calcium carbornate production, linestone, dolomite, calcite, Ziprus, top quality, fast delivery, best prices",
  icons: {
    icon: "/favicon.png",
  },
};

export default function Home() {
  return (
    <main className="z-0 pt-28">
      <section className="banner-container poppins">
        <div className="bg-base_color text-base_text">
          <ImageCarousel />
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
        id="order-form"
      >
        <div className="order-form-container w-3/4 mx-auto flex items-center flex-col pt-16">
          <h1 className="text-xl text-center sm:text-4xl text-base_text font-bold">
            Kindly fill the form below to place an order.
          </h1>
          <p className="sm:w-2/4 mb-10 mt-3 text-white text-center font-light">
            Please complete the form below to submit your order. Once your order
            is successfully submitted, one of our sales representatives will
            promptly contact you. Kindly ensure that all the information
            provided is accurate and up-to-date.
          </p>

          <div className="w-[99%] sm:w-[50%] sm:p-10 sm:rounded-[50px] sm:border-2 border-white border-solid mb-[40px]">
            <OrderForm />
          </div>
        </div>
      </section>
      <TawkToWidget />
    </main>
  );
}
