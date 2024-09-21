import Image from "next/image";
import dynamic from "next/dynamic";

//import from react icons
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery, TbCurrencyNaira } from "react-icons/tb";


import TawkToWidget from './components/TawkToWidget';

// Dynamically import OrderForm to reduce initial bundle size
const OrderForm = dynamic(() => import("./OrderForm"), {
  ssr: false,
});

import Banner1 from "./banner1.jpg";
import Banner2 from "./images/img2.jpg";
import Banner3 from "./images/img3.jpg";
import Banner4 from "./images/img4.jpg";
import Banner5 from "./images/img5.jpg";
import Banner6 from "./images/img6.jpg";
import Banner7 from "./images/img7.jpg";
import Banner8 from "./images/img8.jpg";

export const metadata = {
  title: "Ziprus - Solid Mineral Producers in Africa",
  description: "Your Number 1 trusted Solid Mineral Producers in Africa. Top quality, fast delivery, and best prices guaranteed.",
  keywords: "solid minerals, mineral production, Africa, Ziprus, top quality, fast delivery, best prices",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main className="z-0">
      <section className="banner-container poppins">
        <div className="banner">
          <Image className="img-container" src={Banner1} alt="Mineral Production Banner" priority />
        </div>
      </section>

      <section className="mt-2 mb-12 bg-base_color h-72 hidden sm:block">
        <div className="w-4/5 mx-auto h-full flex">
          <div className="card w-2/6 text-white flex flex-col items-center justify-center">
            <div className="circle">
              <SiAdguard className="text-6xl absolute right-4 top-5" />
            </div>
            <p className="text-2xl font-normal mt-5 text-base_text">Top Quality</p>
            <div className="divider2"></div>
          </div>

          <div className="card w-2/6 text-white flex flex-col items-center justify-center">
            <div className="circle">
              <TbTruckDelivery className="text-6xl absolute right-4 top-5" />
            </div>
            <p className="text-2xl font-normal mt-5 text-base_text">Fast Delivery</p>
            <div className="divider2"></div>
          </div>

          <div className="card w-2/6 text-white flex flex-col items-center justify-center">
            <div className="circle">
              <TbCurrencyNaira className="text-6xl absolute right-4 top-5" />
            </div>
            <p className="text-2xl font-normal mt-5 text-base_text">Best Price</p>
            <div className="divider2"></div>
          </div>
        </div>
      </section>

      <section className="images-text mt-7 sm:mt-0">
        <div className="w-3/4 flex flex-col items-center text-center mx-auto">
          <h1 className="text-xl sm:text-4xl text-base_text font-bold">Images From Our Production Line</h1>
          <p className="sm:w-2/4 mb-10 mt-3 text-center">
          Step Inside Our Production Line: A Visual Journey.
          </p>
        </div>

        <div className="w-3/4 mx-auto">
          <div className="top-image flex flex-col sm:flex-row gap-5 mb-10">
            <div className="sm:w-1/3 rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner2} alt="Production Image 1" />
            </div>
            <div className="sm:w-1/3 rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner3} alt="Production Image 2" />
            </div>
            <div className="sm:w-1/3 rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner4} alt="Production Image 3" />
            </div>
            <div className="sm:w-1/3 rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner5} alt="Production Image 4" />
            </div>
          </div>
          <div className="top-image flex flex-col sm:flex-row gap-5 mb-16 justify-center">
            <div className="sm:w-1/4 rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner6} alt="Production Image 5" />
            </div>
            <div className="sm:w-1/4 rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner7} alt="Production Image 6" />
            </div>
            <div className="sm:w-1/4 rounded-3xl overflow-hidden">
              <Image className="img-container" src={Banner8} alt="Production Image 7" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Order Form ========================== */}

      <section className="order-form bg-base_color mb-10 sm:mb-16" id="order-form">
        <div className="order-form-container w-3/4 mx-auto flex items-center flex-col pt-16">
          <h1 className="text-xl text-center sm:text-4xl text-base_text font-bold">
            Kindly fill the form below to place an order.
          </h1>
          <p className="sm:w-2/4 mb-10 mt-3 text-white text-center font-light">
          Please complete the form below to submit your order. Once your order is successfully submitted, one of our sales representatives will promptly contact you. Kindly ensure that all the information provided is accurate and up-to-date.
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
