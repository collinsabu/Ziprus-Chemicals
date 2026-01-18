import dynamic from "next/dynamic";

import ImageCarousel from "./components/ImageCarousel";
import Image from "next/image";

import Banner2 from "./images/img2.jpg";
import Banner3 from "./images/img3.jpg";
import Banner4 from "./images/img4.jpg";
import Banner5 from "./images/img5.jpg";
import Banner6 from "./images/img6.jpg";
import Banner7 from "./images/img7.jpg";
import Banner8 from "./images/img8.jpg";

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

      <section className="mt-10 mb-24 bg-[#032C26] py-12">
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

      

      {/* {/* Factory images section white/} */}
      <section className="images-text mt-10 sm:mt-0 bg-gray-50 py-12">
        {/* Heading Section */}
        <div className="w-4/5 mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl text-base_two font-extrabold mb-4">
            Images From Our Production Line
          </h1>
          <p className="text-lg sm:w-3/5 mx-auto text-base_two">
            Step inside our production line and take a visual journey through
            innovation and craftsmanship.
          </p>
        </div>

        {/* Images Section */}
        <div className="w-4/5 mx-auto mt-10">
          {/* First Row of Images */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                className="w-full h-full object-cover"
                src={Banner2}
                alt="Production Image 1"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                className="w-full h-full object-cover"
                src={Banner3}
                alt="Production Image 2"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                className="w-full h-full object-cover"
                src={Banner4}
                alt="Production Image 3"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                className="w-full h-full object-cover"
                src={Banner5}
                alt="Production Image 4"
              />
            </div>
          </div>

          {/* Second Row of Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                className="w-full h-full object-cover"
                src={Banner6}
                alt="Production Image 5"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                className="w-full h-full object-cover"
                src={Banner7}
                alt="Production Image 6"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                className="w-full h-full object-cover"
                src={Banner8}
                alt="Production Image 7"
              />
            </div>
          </div>
        </div>
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
