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
  title: 'Buy Superfine / Ultrafine Calcium Carbonate',
  description:
    'Premium superfine and ultrafine calcium carbonate in Nigeria. Ideal for high-grade paint production, toothpaste, plastics, coatings, adhesives, and industrial applications. Bulk orders start from 15 tons.',
  keywords:
    'superfine calcium carbonate Nigeria, ultrafine calcium carbonate, micronized calcium carbonate, nano CaCO3 Nigeria, CaCO3 for paint, calcium carbonate toothpaste, plastics filler Nigeria, high-purity CaCO3 supplier Nigeria, Ziprus Chemicals, fine calcium carbonate Nigeria, industrial minerals Nigeria',
  openGraph: {
    title: 'Buy Superfine / Ultrafine Calcium Carbonate in Nigeria - Ziprus Chemicals',
    description:
      'High-purity superfine and ultrafine calcium carbonate designed for premium industries such as paints, plastics, adhesives, and toothpaste manufacturing. Reliable nationwide supply.',
  },
};

const CalciumCarbonate = () => {
  return (
    <div className="bg-white text-black pt-20 mb-20">
      <header>
        <meta
          name="description"
          content="Buy superfine / ultrafine calcium carbonate from Ziprus Chemicals. Bulk orders for premium industrial applications."
        />
        <title>Buy Superfine / Ultrafine Calcium Carbonate in Nigeria - Ziprus Chemicals</title>
      </header>

      <section className="relative bg-base_color w-full">
        <div className="relative h-[60vh] sm:h-[80vh] w-full">
          <Image
            src={banner}
            alt="Superfine and ultrafine calcium carbonate for premium industrial use in Nigeria"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-6 sm:px-16">
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 leading-tight max-w-xl">
              Buy Superfine / Ultrafine Calcium Carbonate in Nigeria
            </h1>
            <p className="text-white text-sm sm:text-base mb-6 max-w-lg">
              High-purity micronized calcium carbonate designed for premium paint, plastics, toothpaste, and industrial manufacturing. Bulk supply starts from 15 tons!
            </p>
            <Link href="#quote-form" passHref className="inline-block bg-base_two text-white px-6 py-3 font-semibold rounded hover:bg-base_color hover:text-white transition duration-200">
              Place Order Now!
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-base_color text-white px-4 sm:px-10 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Why Choose Superfine / Ultrafine Calcium Carbonate from Ziprus Chemicals?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8">
            <ul className="space-y-4 text-lg list-inside">
              <li>✅ Ultra-fine particle size for superior smoothness & brightness</li>
              <li>✅ Ideal for high-end paint, coatings, adhesives, toothpaste, and plastics</li>
              <li>✅ Learn more about <Link href="https://blog.zipruschemicals.com/calcium-carbonate-in-paint-industry/" target="_blank" className="underline text-white hover:text-base_two">CaCO3 in the paint industry</Link></li>
            </ul>
            <ul className="space-y-4 text-lg list-inside">
              <li>✅ High whiteness & excellent dispersibility</li>
              <li>✅ Nationwide fast delivery across Nigeria</li>
              <li>✅ See related products: <Link href="https://www.zipruschemicals.com/calcium-carbonate-dolomite" target="_blank" className="underline text-white hover:text-base_two">Calcium Carbonate & Dolomite</Link></li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            <div className="w-full sm:w-1/3">
              <Image
                src={img1}
                alt="Superfine calcium carbonate powder for high-quality paint"
                className="rounded shadow"
                placeholder="blur"
                loading="lazy"
              />
            </div>
            <div className="w-full sm:w-1/3">
              <Image
                src={img2}
                alt="Ultrafine calcium carbonate for plastics and industrial applications"
                className="rounded shadow"
                placeholder="blur"
                loading="lazy"
              />
            </div>
            <div className="w-full sm:w-1/3">
              <Image
                src={img3}
                alt="Micronized CaCO3 for toothpaste and adhesives"
                className="rounded shadow"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base_text text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Industries We Supply in Nigeria
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Premium Paint & Coating Manufacturers | Toothpaste Producers | Plastics & Polymers | Adhesives & Sealants | Printing Ink | High-grade Packaging | Industrial Chemical Manufacturers
          </p>
          <p className="mt-6 text-sm">
            Recognized among the <a href="https://www.nairaland.com/8394938/trusted-calcium-carbonate-supplier-nigeria#134930172" target="_blank" className="underline hover:text-base_two">trusted fine CaCO3 suppliers in Nigeria</a> and <a href="https://www.nairaland.com/8404044/top-calcium-carbonate-manufacturers-nigeria#135062191" target="_blank" className="underline hover:text-base_two">top industrial mineral distributors</a>.
          </p>
        </div>
      </section>

      <section className="order-form bg-base_color py-16 px-4 sm:px-0" id="quote-form">
        <div className="order-form-container w-3/4 mx-auto flex items-center flex-col pt-16">
          <h2 className="text-xl sm:text-3xl font-bold text-base_text mb-4 text-center">
            Request a Quote - Bulk Orders Starting from 30 Tons!
          </h2>
          <p className="text-white mb-8 leading-relaxed text-center hidden sm:block">
            Complete the form below to order superfine / ultrafine calcium carbonate. Our sales team will respond with pricing and delivery options.
          </p>

          <div className="w-[99%] sm:w-[50%] sm:p-10 sm:rounded-[50px] sm:border-2 border-white border-solid mb-[40px]">
            <OrderForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalciumCarbonate;
