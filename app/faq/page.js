"use client";

import data from "./data.js";

import { useState } from "react";

import { FaPlus } from "react-icons/fa6";

export default function Faq() {
  const [singleSelection, setSingleSelection] = useState(null);

  const handleClick = (getId) => {
    console.log(getId);
    setSingleSelection(getId === singleSelection ? null : getId);
    console.log(singleSelection);
  };

  return (
    <main className="poppins  bg-base_color mt-5 pt-16 mb-10 sm:mb-16">
      <h1 className="text-center text-white text-2xl ">FAQs</h1>
      <div className="faq-container  py-10 ">
      {data && data.length > 0 ? (
        data.map((faq) => (
          <div key={faq.id} className=" w-[79%] sm:w-[45%] mx-auto  mb-5">
            <div onClick={() => handleClick(faq.id)} className="bg-white mb-3 h-10 flex items-center justify-between pr-8 pl-3 cursor-pointer">
              <h2 className="question font-semibold text-sm sm:text-lg " >
                {faq.question}
              </h2>
              <span className="">
                <FaPlus />
              </span>
            </div>
            {singleSelection === faq.id ? <div className="text-white text-sm font-light leading-7 bg-lime-900 mb-3 px-4">{faq.answer}</div> : null}
          </div>
        ))
      ) : (
        <div>No data present</div>
      )}
      </div>
    </main>
  );
}
