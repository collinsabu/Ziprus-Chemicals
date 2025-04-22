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
  title: 'Buy Calcium Carbonate',
  description:
    'Top supplier of high-purity calcium carbonate  in Nigeria. Suitable for paint production, toothpaste, plastics, and construction industries. Bulk orders available starting from 15 tons.',
  keywords:
    'calcium carbonate Nigeria, calcium carbonate, dolomite, dolomite supplier Nigeria, pure white dolomite, calcium carbonate for paint, calcium carbonate for toothpaste, calcium carbonate for plastics, industrial minerals supplier Nigeria, bulk calcium carbonate Nigeria, Ziprus Chemicals, Nigeria calcium carbonate wholesaler, Affordable Calcium Carbonate for Paint Producers, Calcium Carbonate Suppliers, adhesive feed calcium, limestone supplier, Nigeria minerals',
  openGraph: {
    title: 'Buy Calcium Carbonate in Nigeria - Ziprus Chemicals',
    description:
      'Premium calcium carbonate and dolomite for industries like paint, toothpaste, plastics, animal feed, and construction. Bulk supply with guaranteed quality and fast delivery across Nigeria.',
  },
};

const CalciumCarbonate = () => {
  return (
    <div className="bg-white text-black pt-20 mb-20">
      <header>
        <meta
          name="description"
          content="Buy premium calcium carbonate from Ziprus Chemicals. Bulk orders for paint, toothpaste, and more."
        />
        <title>Buy Calcium Carbonate in Nigeria - Ziprus Chemicals</title>
      </header>

      <section className="relative bg-base_color w-full">
        <div className="relative h-[60vh] sm:h-[80vh] w-full">
          <Image
            src={banner}
            alt="High-purity calcium carbonate and dolomite for industrial use in Nigeria"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-6 sm:px-16">
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 leading-tight max-w-xl">
              Buy High-Purity Calcium Carbonate in Nigeria
            </h1>
            <p className="text-white text-sm sm:text-base mb-6 max-w-lg">
              Trusted calcium carbonate supplier for paint, toothpaste, plastics, and cement industries. Bulk supply starts from 15 tons!
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
            Why Buy Calcium Carbonate  from Ziprus Chemicals?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8">
            <ul className="space-y-4 text-lg list-inside">
              <li>✅ High Purity Calcium Carbonate for paint, toothpaste, and industrial use</li>
              <li>✅ Pure White Dolomite ideal for ceramics, paints, and adhesives</li>
              <li>✅ Learn more about our <Link href="https://blog.zipruschemicals.com/calcium-carbonate-in-paint-industry/" target="_blank" className="underline text-white hover:text-base_two">calcium carbonate in the paint industry</Link></li>
            </ul>
            <ul className="space-y-4 text-lg list-inside">
              <li>✅ Consistent Particle Size and Quality Guaranteed</li>
              <li>✅ Nationwide Delivery Across Nigeria, Timely & Reliable</li>
              <li>✅ View full product page: <Link href="https://www.zipruschemicals.com/calcium-carbonate-dolomite" target="_blank" className="underline text-white hover:text-base_two">Calcium Carbonate & Dolomite</Link></li>
            </ul>
          </div>

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
                alt="Pure white calcium carbonate dolomite powder for industrial use"
                className="rounded shadow"
                placeholder="blur"
                loading="lazy"
              />
            </div>
            <div className="w-full sm:w-1/3">
              <Image
                src={img3}
                alt="calcium carbonate, Feed-grade limestone for livestock nutrition"
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
            Paint & Coating Manufacturers | Toothpaste & Personal Care Producers | Plastics & Polymers Industry | Animal Feed Producers | Glass & Ceramics Companies | Construction Industry | Adhesives and Sealants Manufacturers
          </p>
          <p className="mt-6 text-sm">
            See why we're listed among the <a href="https://www.nairaland.com/8394938/trusted-calcium-carbonate-supplier-nigeria#134930172" target="_blank" className="underline hover:text-base_two">most trusted calcium carbonate suppliers in Nigeria</a> and <a href="https://www.nairaland.com/8404044/top-calcium-carbonate-manufacturers-nigeria#135062191" target="_blank" className="underline hover:text-base_two">top calcium carbonate manufacturers</a>.
          </p>
        </div>
      </section>

      <section className="order-form bg-base_color py-16 px-4 sm:px-0" id="quote-form">
        <div className="order-form-container w-3/4 mx-auto flex items-center flex-col pt-16">
          <h2 className="text-xl sm:text-3xl font-bold text-base_text mb-4 text-center">
            Request a Quote - Bulk Orders Starting from 15 Tons!
          </h2>
          <p className="text-white mb-8 leading-relaxed text-center hidden sm:block">
            Complete the form below to place an order for calcium carbonate. Our sales team will promptly contact you with pricing and delivery options. We guarantee quality and timely delivery anywhere in Nigeria.
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
