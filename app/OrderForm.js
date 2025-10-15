"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        toast.error(json.error, {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.success("Order submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        router.push("/thanks");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto flex flex-col gap-5 p-4 sm:p-6 bg-base_two rounded-lg shadow-lg"
      >
        {/* Name & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-1">Your Name</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-base_text"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <label className="block text-white mb-1">Company Name</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-base_text"
              required
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-white mb-1">Email Address</label>
          <input
            type="email"
            className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-base_text"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Supply Address */}
        <div>
          <label className="block text-white mb-1">Supply Address</label>
          <input
            type="text"
            className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-base_text"
            required
            onChange={(e) => setSupply(e.target.value)}
            value={supply}
          />
        </div>

        {/* Phone & Material */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-1">Phone Number</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-base_text"
              required
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
          </div>
          <div>
            <label className="block text-white mb-1">Material Type</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-base_text"
              required
              onChange={(e) => setMaterial(e.target.value)}
              value={material}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-white mb-1">Message</label>
          <textarea
            className="w-full h-28 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-base_text resize-none"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            className="text-white bg-base_color border-2 px-10 py-2 rounded-full cursor-pointer hover:bg-lime-950 transition-all ease-in-out duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      <ToastContainer />
    </>
  );
}
