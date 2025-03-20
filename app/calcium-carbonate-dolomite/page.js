import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

// Internal imports (update paths if necessary)
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import banner from "./banner.jpg";

// Dynamically import OrderForm for optimization
const OrderForm = dynamic(() => import("../OrderForm"), { ssr: false });

/* ✅ SEO METADATA */
export const metadata = {
  title: 'Buy Calcium Carbonate, Limestone & Dolomite in Nigeria - Ziprus Chemicals',
  description:
    'Top supplier of high-purity calcium carbonate, and dolomite in Nigeria. Suitable for paint production, toothpaste, plastics, and construction industries. Bulk orders available starting from 15 tons.',
  keywords:
    'calcium carbonate Nigeria, dolimite supplier Edo state, dolomite powder Nigeria, pure white dolomite, calcium carbonate for paint, industrial minerals supplier, bulk calcium carbonate Nigeria, calcium carbonate for toothpaste, solid minerals, adhensive feed calcium, calcium carbonate for plastics, Ziprus Chemicals, Nigeria calcium carbonate wholesaler, Affordable Calcium Carbonate for Paint Producers, Calcium Carbonate Suppliers, calcium carbonate, dolomite',
  openGraph: {
    title: 'Buy Calcium Carbonate, Dolomite in Nigeria - Ziprus Chemicals',
    description:
      'Premium calcium carbonate, and dolomite for industries like paint, toothpaste, plastics, animal feed, and construction. Bulk supply with guaranteed quality and fast delivery across Nigeria.',
  },
};

const CalciumCarbonateDolomite = () => {
  return (
    <div className="bg-white text-black pt-20 mb-20">

      {/* SEO and Accessibility Enhancements */}
      <header>
        <meta
          name="description"
          content="Buy premium calcium carbonate, dolomite from Ziprus Chemicals. Bulk orders for paint and toothpaste."
        />
        <title>Buy Calcium Carbonate, Dolomite in Nigeria - Ziprus Chemicals</title>
      </header>

      {/* Hero Section */}
      <section className="relative bg-base_color w-full">
        <div className="relative h-[60vh] sm:h-[80vh] w-full">
          <Image
            src={banner}
            alt="High-purity calcium carbonate, and dolomite for industrial use in Nigeria"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-6 sm:px-16">
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 leading-tight max-w-xl">
              Buy High-Purity Calcium Carbonate, Dolomite in Nigeria
            </h1>
            <p className="text-white text-sm sm:text-base mb-6 max-w-lg">
              Trusted supplier for paint, toothpaste, plastics, and cement industries. Bulk supply starts from 15 tons!
            </p>
            <Link href="#quote-form" passHref className="inline-block bg-base_two text-white px-6 py-3 font-semibold rounded hover:bg-base_color hover:text-white transition duration-200">
              Place Order Now!
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-base_color text-white px-4 sm:px-10 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Why Buy Calcium Carbonate & Dolomite from Ziprus Chemicals?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8">
            <ul className="space-y-4 text-lg list-inside">
              <li>✅ High Purity Calcium Carbonate for paint, toothpaste</li>
              <li>✅ Pure White Dolomite ideal for ceramics, paints, and adhesives</li>
            </ul>
            <ul className="space-y-4 text-lg list-inside">
              <li>✅ Consistent Particle Size and Quality Guaranteed</li>
              <li>✅ Nationwide Delivery Across Nigeria, Timely & Reliable</li>
            </ul>
          </div>

          {/* Images of Products */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            <div className="w-full sm:w-1/3">
              <Image
                src={img1}
                alt="Calcium carbonate powder for paint production"
                className="rounded shadow"
                placeholder="blur"
                loading="lazy"
              />
            </div>
            <div className="w-full sm:w-1/3">
              <Image
                src={img2}
                alt="Pure white dolomite powder for industrial use"
                className="rounded shadow"
                placeholder="blur"
                loading="lazy"
              />
            </div>
            <div className="w-full sm:w-1/3">
              <Image
                src={img3}
                alt="Feed-grade limestone for livestock nutrition"
                className="rounded shadow"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-base_text text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Industries We Supply in Nigeria
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Paint & Coating Manufacturers | Toothpaste & Personal Care Producers | Plastics & Polymers Industry | Animal Feed Producers | Glass & Ceramics Companies | Construction Industry | Adhesives and Sealants Manufacturers
          </p>
        </div>
      </section>

      {/* Order Form */}
      <section
        className="order-form bg-base_color py-16 px-4 sm:px-0"
        id="quote-form"
      >
        <div className="order-form-container w-3/4 mx-auto flex items-center flex-col pt-16">
          <h2 className="text-xl sm:text-3xl font-bold text-base_text mb-4 text-center">
            Request a Quote - Bulk Orders Starting from 15 Tons!
          </h2>
          <p className="text-white mb-8 leading-relaxed text-center hidden sm:block">
            Complete the form below to place an order for calcium carbonate, limestone, or dolomite. Our sales team will promptly contact you with pricing and delivery options. We guarantee quality and timely delivery anywhere in Nigeria.
          </p>

          <div className="w-[99%] sm:w-[50%] sm:p-10 sm:rounded-[50px] sm:border-2 border-white border-solid mb-[40px]">
            <OrderForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalciumCarbonateDolomite;
