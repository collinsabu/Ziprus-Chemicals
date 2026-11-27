import {pageMetadata} from "../lib/seo";
export const metadata={...pageMetadata({"title":"Customer Experiences | Ziprus Chemicals","description":"Customer experiences and business relationships at Ziprus Chemicals.","path":"/testimonial"}),robots:{index:false,follow:true}};


import React from "react";
import Image from "next/image";
import img from "./img.jpg";

export default function Testimonial() {
  return (
    <section className="bg-base_color pt-40 mb-10 sm:mb-16 poppins">
      <div className="container w-3/4 mx-auto sm:flex">
        <div className="sm:w-6/12 bg-black">
          <Image src={img} alt="Happy client" className="img-container" />
        </div>

        <div className="sm:w-6/12 sm:p-14 text-center py-10 text-white">
          
          <div>
    <h4 className=" text-xl mb-6">Testimonial</h4>

    <p className="text-sm font-extralight leading-loose">
        "As a long-standing partner of Ziprus Chemical, I can confidently say that their products have consistently exceeded our expectations. At Agro Feed, we rely on high-quality minerals for our animal feed production, and Ziprus Chemical has been our go-to supplier for years. Their calcium and other minerals are of exceptional quality, which has significantly contributed to the efficiency and effectiveness of our feed formulations.
    </p>

    <p className="text-sm font-extralight leading-loose">
        Beyond the products, their customer service is outstanding. The team at Ziprus Chemical is always responsive, professional, and committed to ensuring timely deliveries, even when unexpected challenges arise. Their dedication to maintaining high standards in both product quality and service has made a real difference to our business. I highly recommend Ziprus Chemical to any company seeking reliable and top-grade mineral supplies."
    </p>

    <p className="text-sm font-semibold leading-loose text-green-500">
        — Earnest, Agro Feed, Lagos, Nigeria
    </p>
</div>

        </div>
      </div>
    </section>
  );
}
