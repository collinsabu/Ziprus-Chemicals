export const metadata = {
  title: "Testimonials - Ziprus",
  description: "Read what our clients have to say about Ziprus. Discover the experiences of our satisfied customers.",
  openGraph: {
    title: "Testimonials - Ziprus",
    description: "Read what our clients have to say about Ziprus. Discover the experiences of our satisfied customers.",
    url: "https://www.ziprus.com/testimonials",
    images: [
      {
        url: "https://www.ziprus.com/images/testimonial-banner.jpg", // replace with a relevant image
        width: 800,
        height: 600,
        alt: "Happy Ziprus clients",
      },
    ],
    siteName: "Ziprus",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ziprus",
    title: "Testimonials - Ziprus",
    description: "Read what our clients have to say about Ziprus. Discover the experiences of our satisfied customers.",
    images: ["https://www.ziprus.com/images/testimonial-banner.jpg"], // replace with a relevant image
  },
};

import React from "react";
import Image from "next/image";
import img from "./img.jpg";

export default function Testimonial() {
  return (
    <section className="bg-base_color mt-10 mb-10 sm:mb-16 poppins">
      <div className="container w-3/4 mx-auto sm:flex">
        <div className="sm:w-6/12 bg-black">
          <Image src={img} alt="Happy client" className="img-container" />
        </div>

        <div className="sm:w-6/12 sm:p-14 text-center py-10">
          <h2 className="text-white text-xl mb-10">What Our Clients Say</h2>
          <p className="text-left text-white text-sm font-extralight mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            nesciunt cum ea consequatur est provident veritatis iste tenetur
            quibusdam. Nam alias aperiam iusto numquam doloremque similique
            illo, pariatur nemo odio eaque et adipisci iste sequi modi
            doloribus. Non, vitae amet?
            <br />
            <br />
            Quibusdam. Nam alias aperiam iusto numquam doloremque similique
            illo, pariatur nemo odio eaque et adipisci iste sequi modi.
          </p>
          <p className="text-base_text font-medium mb-2">Garry Paul</p>
          <p className="text-white text-sm font-extralight mb-1">Kobac Paint Industries</p>
          <p className="text-white text-sm font-extralight mb-5">MD/CEO</p>
        </div>
      </div>
    </section>
  );
}
