import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

// Internal imports (make sure these paths are correct)
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import banner from "./banner.jpg";

// Dynamically import OrderForm to reduce initial bundle size
const OrderForm = dynamic(() => import("../OrderForm"), { ssr: false });


/* ✅ SEO METADATA */
export const metadata = {
  title: 'Buy High-Quality Limestone for Animal Feed Producers in Nigeria - Ziprus Chemicals',
  description:
    'Premium feed-grade limestone for animal nutrition. Bulk supply starts from 15 tons. Trusted by livestock farmers and animal feed companies across Nigeria.',
  keywords:
    'limestone for animal feed, buy feed-grade limestone Nigeria, bulk limestone supplier, animal feed ingredients, calcium carbonate for livestock, poultry feed limestone, Ziprus Chemicals, limestone for cattle feed, fish feed ingredients, livestock minerals Nigeria, limestone, Improve Animal Nutrition, Reliable Supplier in Nigeria, Bulk Limestone Supply Feed, limestone powder for feed production, Grade Limestone Nigeria,',
  openGraph: {
    title: 'High-Quality Limestone for Animal Feed Producers in Nigeria - Ziprus Chemicals',
    description:
      'Premium feed-grade limestone for animal nutrition. Bulk supply starts from 15 tons. Trusted by livestock farmers and animal feed companies across Nigeria.',
  },
};

const AnimalFeedLimestone = () => {
  return (
    <div className="bg-white text-black pt-20 mb-20">
      {/* SEO and Accessibility Improvements */}
      <header>
        <meta name="description" content="Premium feed-grade limestone for animal nutrition. Bulk orders starting from 15 tons. Trusted by livestock farmers across Nigeria." />
        <title>High-Quality Limestone for Animal Feed Producers - Ziprus Chemicals</title>
      </header>

      {/* Hero / Banner Section */}
      <section className="relative bg-base_color w-full">
        <div className="relative h-[60vh] sm:h-[80vh] w-full">
          <Image
            src={banner}
            alt="High-quality limestone for animal feed"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-6 sm:px-16">
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 leading-tight max-w-xl">
              High-Quality Limestone for Animal Feed Producers in Nigeria
            </h1>
            <p className="text-white text-sm sm:text-base mb-6 max-w-lg">
              Boost Animal Nutrition and Growth with Our Premium Feed-Grade Limestone.
              <br /> Bulk Supply Starts from 15 Tons!
            </p>
            <Link href="#quote-form" passHref  className="inline-block bg-base_two text-white px-6 py-3 font-semibold rounded hover:bg-base_color hover:text-white transition duration-200">
              
               
             
                Place Order Now!
            
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-base_color text-white px-4 sm:px-10 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Why Choose Ziprus Chemicals?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8">
            <ul className="space-y-4 text-lg list-inside">
              <li>✅ High Calcium Content for livestock bone development</li>
              <li>✅ Consistent Quality with optimal particle size</li>
            </ul>
            <ul className="space-y-4 text-lg list-inside">
              <li>✅ Trusted by Feed Producers Nationwide</li>
              <li>✅ Timely Delivery Anywhere in Nigeria</li>
            </ul>
          </div>

          {/* Images of products */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            <div className="w-full sm:w-1/3">
              <Image
                src={img1}
                alt="Limestone sample 1"
                className="rounded shadow"
                placeholder="blur"
                loading="lazy"
              />
            </div>
            <div className="w-full sm:w-1/3">
              <Image
                src={img2}
                alt="Limestone sample 2"
                className="rounded shadow"
                placeholder="blur"
                loading="lazy"
              />
            </div>
            <div className="w-full sm:w-1/3">
              <Image
                src={img3}
                alt="Limestone sample 3"
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
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Animal Feed Producers, Livestock Farmers, Poultry Feed Manufacturers, Cattle Feed Companies, Fish Feed Manufacturers.
          </p>
        </div>
      </section>

      {/* Order Form Section */}
      <section
        className="order-form bg-base_color py-16 px-4 sm:px-0"
        id="quote-form"
      >
        <div className="order-form-container w-3/4 mx-auto flex items-center flex-col pt-16">
          <h2 className="text-xl sm:text-3xl font-bold text-base_text mb-4 text-center">
            Kindly fill the form below to place an order.
          </h2>
          <p className="text-white mb-8 leading-relaxed text-center hidden sm:block">
            Please complete the form below to submit your order. Once your order is successfully submitted, <br/>one of our sales representatives will promptly contact you. Kindly ensure that all the <br/>information provided is accurate and up-to-date.
          </p>

          <div className="w-[99%] sm:w-[50%] sm:p-10 sm:rounded-[50px] sm:border-2 border-white border-solid mb-[40px]">
            <OrderForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimalFeedLimestone;
