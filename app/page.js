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

      <section className="mt-4 mb-16 bg-gradient-to-r from-base_color via-base_two to-base_two text-base_two py-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 px-6">
          {/* Card 1 */}
          <article
            className="card w-full sm:w-1/3 bg-white text-base_color flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            aria-label="Top Quality"
          >
            <div className="circle bg-base_color p-4 rounded-full mb-4">
              <SiAdguard className="text-6xl text-white" />
            </div>
            <p className="text-xl text-base_color sm:text-2xl font-semibold">Top Quality</p>
            <div className="w-16 h-1 bg-base_color mt-4"></div>
          </article>

          {/* Card 2 */}
          <article
            className="card w-full sm:w-1/3 bg-white text-base_color flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            aria-label="Fast Delivery"
          >
            <div className="circle bg-base_color p-4 rounded-full mb-4">
              <TbTruckDelivery className="text-6xl text-white" />
            </div>
            <p className="text-xl text-base_color sm:text-2xl font-semibold">Fast Delivery</p>
            <div className="w-16 h-1  bg-base_color mt-4"></div>
          </article>

          {/* Card 3 */}
          <article
            className="card w-full sm:w-1/3 bg-white text-base_color flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            aria-label="Best Price"
          >
            <div className="circle bg-base_color p-4 rounded-full mb-4">
              <TbCurrencyNaira className="text-6xl text-white" />
            </div>
            <p className="text-xl sm:text-2xl  text-base_color font-semibold">Best Price</p>
            <div className="w-16 h-1 bg-base_color mt-4"></div>
          </article>
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
