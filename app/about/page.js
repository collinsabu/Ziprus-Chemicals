export const metadata = {
  title: "About Ziprus - Your Trusted Mineral Producers",
  description:
    "Learn more about Ziprus, a leading mineral production company in Africa. Discover our vision, mission, and values.",
  openGraph: {
    title: "About Ziprus - Your Trusted Mineral Producers",
    description:
      "Learn more about Ziprus, a leading mineral production company in Africa. Discover our vision, mission, and values.",
    url: "https://www.ziprus.com/about",
    images: [
      {
        url: "https://www.ziprus.com/images/about-us-banner.jpg", // replace with a relevant image
        width: 800,
        height: 600,
        alt: "Ziprus About Us",
      },
    ],
    siteName: "Ziprus",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ziprus",
    title: "About Ziprus - Your Trusted Mineral Producers",
    description:
      "Learn more about Ziprus, a leading mineral production company in Africa. Discover our vision, mission, and values.",
    images: ["https://www.ziprus.com/images/about-us-banner.jpg"], // replace with a relevant image
  },
};

import Image from "next/image";
import Image1 from "./img1.jpg";

export default function About() {
  return (
    <main className="mt-5 mb-10 sm:mb-16 bg-base_color poppins">
      <div className="container flex flex-col justify-center items-center m-auto w-4/5">
        <div className="sm:flex">
          <div className="sm:w-2/4">
            <Image src={Image1} alt="About Us Image" width={800} />
          </div>
          <div className="sm:pr-20 sm:pl-9 mt-12 sm:w-2/4">
            <h2 className="text-base_text text-2xl font-semibold mb-6">
              About Us
            </h2>
            <div className="text-white font-extralight text-sm">
              <p className="mb-7">
                Welcome to Ziprus Chemical, a leading industrial solid mineral
                producer located on Auchi-Igara Road, Ikpeshi, Lagos, Nigeria.
                We specialize in the extraction and production of high-quality
                solid minerals, including Calcite, Dolomite, Kaolin, and other
                essential materials for various industrial applications. Our
                products are integral to industries such as glass manufacturing
                and animal feed production, where quality is paramount. We take
                pride in our meticulous production processes, ensuring that
                every batch of minerals we produce meets the highest standards
                of purity and consistency
              </p>
              <p className="mb-7">
                At Ziprus Chemical, we are committed to providing reliable,
                consistent, and top-grade minerals to meet the growing demands
                of our clients across Nigeria and beyond. Our dedication to
                excellence has positioned us as a trusted partner in the
                industrial sector, known for delivering not just products, but
                solutions that enhance the efficiency and effectiveness of our
                clients' operations
              </p>

              <p>
                As we continue to expand our reach, we remain focused on
                innovation, sustainability, and the continuous improvement of
                our processes, ensuring that we contribute to the long-term
                success of the industries we serve.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:flex mt-20">
          <div className="sm:hidden">
            <Image src={Image1} alt="Our Vision Image" width={800} />
          </div>
          <div className="sm:pr-14 sm:pl-9 mt-12 sm:w-2/4">
            <h2 className="text-base_text text-2xl font-semibold mb-6">
              Our Vision
            </h2>
            <div className="text-white font-extralight text-sm">
              <p className="mb-7">
                At Ziprus Chemical, our vision is to become the foremost
                provider of premium industrial solid minerals not only in
                Nigeria but across the entire African continent. We are
                committed to setting a new benchmark for excellence in mineral
                production by delivering the highest quality materials that meet
                and exceed industry standards
              </p>
              <p className="mb-7">
                Our journey towards this vision is driven by a relentless
                pursuit of innovation and sustainable growth. We understand that
                the industries we serve rely on top-tier materials to fuel their
                operations, and we take pride in being a trusted partner that
                empowers these industries to achieve their fullest potential
              </p>
              <p className="mb-7">
                In essence, our vision is about more than just being the best in
                the industry—it’s about making a lasting, positive impact on the
                world around us. As we continue to grow and evolve, we remain
                dedicated to our core values of quality, integrity, and
                innovation, ensuring that Ziprus Chemical is not just a leader
                in mineral production, but a force for good in the global
                industrial landscape
              </p>
            </div>
          </div>
          <div className="hidden sm:block w-2/4">
            <Image src={Image1} alt="Our Vision Image" width={800} />
          </div>
        </div>
      </div>
    </main>
  );
}
