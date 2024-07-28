"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OrderForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [supply, setSupply] = useState("");
  const [number, setNumber] = useState("");
  const [material, setMaterial] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newOrder = { name, company, email, supply, number, material, body };

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });

      const json = await res.json();

      if (json.error) {
        console.log(json.error);
        setIsLoading(false);
      } else {
        router.push("/thanks");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sm:flex flex-col items-start gap-[15px]">
      <div className="names sm:flex gap-3 w-full">
        <div className="mb-4 sm:mb-0 ">
          <div className="text-white">Your Name</div>
          <input
            type="text"
            className="sm:w-60 h-9 w-full"
            required
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
          />
        </div>

        <div className="mb-4 sm:mb-0 ">
          <div className="text-white">Company Name</div>
          <input
            type="text"
            className="sm:w-64 h-9 w-full"
            required
            onChange={(e) => setCompany(e.target.value)}
            value={company || ""}
          />
        </div>
      </div>

      <div className="mb-4 sm:mb-0 w-full ">
        <div className="text-white">Email Address</div>
        <input
          type="email"
          className="sm:w-full h-9 w-full"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email || ""}
        />
      </div>

      <div className="mb-4 sm:mb-0 w-full ">
        <div className="text-white">Enter Supply Address</div>
        <input
          type="text"
          className="sm:w-full h-9 w-full"
          required
          onChange={(e) => setSupply(e.target.value)}
          value={supply || ""}
        />
      </div>

      <div className="names sm:flex gap-3 w-full ">
        <div className="mb-4 sm:mb-0">
          <div className="text-white">Phone Number</div>
          <input
            type="text"
            className="sm:w-60 h-9 w-full"
            required
            onChange={(e) => setNumber(e.target.value)}
            value={number || ""}
          />
        </div>

        <div className="mb-4 sm:mb-0 ">
          <div className="text-white">Specify Material Type</div>
          <input
            type="text"
            className="sm:w-64 h-9 w-full"
            required
            onChange={(e) => setMaterial(e.target.value)}
            value={material || ""}
          />
        </div>
      </div>

      <div className="mb-4 sm:mb-0 w-full">
        <div className="text-white">Enter Message</div>
        <textarea
          className="w-full h-28"
          onChange={(e) => setBody(e.target.value)}
          value={body || ""}
        />
      </div>

      <div className="mx-auto flex justify-center ">
        <button
          className="text-white bg-base_color border-2 px-14 py-2 rounded-full cursor-pointer hover:bg-lime-950 ease-in-out duration-300"
          disabled={isLoading}
        >
          {isLoading && <span>Submitting...</span>}
          {!isLoading && <span>Submit</span>}
        </button>
      </div>
    </form>
  );
}
