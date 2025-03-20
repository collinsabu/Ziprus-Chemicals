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
  title: 'Glass Grade Limestone Supplier in Nigeria | Ziprus Chemicals',
  description:
    'High-purity limestone for glass production. Ziprus Chemicals supplies bulk glass-grade limestone with low iron content, ideal for glass manufacturing. Minimum order: 15 tons.',
  keywords:
    'glass grade limestone Nigeria, limestone for glass production, low iron limestone Nigeria, high purity limestone supplier, bulk limestone for glass industry, Ziprus Chemicals limestone, glass manufacturing raw materials, silica limestone Nigeria, pure limestone Nigeria, limestone for flat glass, container glass raw material, limestone for fiberglass production, Ziprus Chemicals Nigeria, buy glass grade limestone',
  openGraph: {
    title: 'Bulk Glass Grade Limestone Supplier in Nigeria | Ziprus Chemicals',
    description:
      'Top supplier of high-quality, low-iron limestone for glass manufacturing industries in Nigeria. Bulk orders start at 15 tons with reliable nationwide delivery.',
  },
};

const GlassGradeLimestone = () => {
  return (
    <div className="bg-white text-black pt-20 mb-20">

      {/* SEO and Accessibility Enhancements */}
      <header>
        <meta
          name="description"
          content="Buy high-purity glass grade limestone from Ziprus Chemicals. Bulk supply for glass manufacturing in Nigeria. Low iron content, consistent quality."
        />
        <title>Glass Grade Limestone Supplier in Nigeria | Ziprus Chemicals</title>
      </header>

      {/* Hero Section */}
      <section className="relative bg-base_color w-full">
        <div className="relative h-[60vh] sm:h-[80vh] w-full">
          <Image
            src={banner}
            alt="Glass grade limestone for glass production companies in Nigeria"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-6 sm:px-16">
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 leading-tight max-w-xl">
              Buy High-Purity Glass Grade Limestone for Glass Manufacturing
            </h1>
            <p className="text-white text-sm sm:text-base mb-6 max-w-lg">
              Premium limestone with low iron content. Ideal for glass production. Bulk orders start from 15 tons!
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
            Why Choose Ziprus Chemicals for Glass Grade Limestone?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8">
            <ul className="space-y-4 text-lg list-inside">
              <li>✅ High-Purity Limestone with Low Iron Content</li>
              <li>✅ Suitable for Float Glass, Container Glass, and Fiberglass</li>
            </ul>
            <ul className="space-y-4 text-lg list-inside">
              <li>✅ Consistent Quality and Particle Size for Smooth Melting</li>
              <li>✅ Fast Nationwide Delivery Anywhere in Nigeria</li>
            </ul>
          </div>

          {/* Images of Products */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            <div className="w-full sm:w-1/3">
              <Image
                src={img1}
                alt="Glass grade limestone powder for glass manufacturing"
                className="rounded shadow"
                placeholder="blur"
                loading="lazy"
              />
            </div>
            <div className="w-full sm:w-1/3">
              <Image
                src={img2}
                alt="High purity limestone for float glass production"
                className="rounded shadow"
                placeholder="blur"
                loading="lazy"
              />
            </div>
            <div className="w-full sm:w-1/3">
              <Image
                src={img3}
                alt="Bulk limestone for glass industries in Nigeria"
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
            Industries We Serve in Nigeria
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Float Glass Manufacturers | Container Glass Producers | Fiberglass Industry | Flat Glass Production | Specialty Glass Producers | Glass Ceramics | Glassware Manufacturers
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
            Complete the form below to place an order for glass grade limestone. Our sales team will contact you with competitive pricing and reliable delivery options. We guarantee quality and consistency for your glass production needs.
          </p>

          <div className="w-[99%] sm:w-[50%] sm:p-10 sm:rounded-[50px] sm:border-2 border-white border-solid mb-[40px]">
            <OrderForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlassGradeLimestone;
