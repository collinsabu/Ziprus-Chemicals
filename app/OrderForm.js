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

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // ----------------------
  // VALIDATION FUNCTION
  // ----------------------
  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    else if (!/^[a-zA-Z\s]{3,50}$/.test(name))
      newErrors.name = "3–50 letters only";

    if (!company.trim()) newErrors.company = "Company name is required";

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email address";

    if (!supply.trim()) newErrors.supply = "Supply address is required";

    if (!number.trim()) newErrors.number = "Phone number required";
    else if (!/^[0-9]{7,15}$/.test(number))
      newErrors.number = "7–15 digits only";

    if (!material.trim()) newErrors.material = "Material type is required";

    if (body && (body.length < 10 || body.length > 500))
      newErrors.body = "Message must be 10–500 characters";

    setErrors(newErrors);
    return newErrors;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validate();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fix the errors before submitting", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setIsLoading(true);

    const newOrder = { name, company, email, supply, number, material, body };

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        toast.error(json.error || "Submission failed", {
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

  const inputClass = (field) =>
    `w-full h-10 px-3 rounded-md border bg-white text-black
     focus:outline-none focus:ring-2 focus:ring-base_text transition
     ${
       touched[field] && errors[field]
         ? "border-red-500"
         : "border-gray-300"
     }`;

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
              className={inputClass("name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur("name")}
            />
            {touched.name && errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-white mb-1">Company Name</label>
            <input
              type="text"
              className={inputClass("company")}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              onBlur={() => handleBlur("company")}
            />
            {touched.company && errors.company && (
              <p className="text-red-400 text-xs mt-1">{errors.company}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-white mb-1">Email Address</label>
          <input
            type="email"
            className={inputClass("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur("email")}
          />
          {touched.email && errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Supply Address */}
        <div>
          <label className="block text-white mb-1">Supply Address</label>
          <input
            type="text"
            className={inputClass("supply")}
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
            onBlur={() => handleBlur("supply")}
          />
          {touched.supply && errors.supply && (
            <p className="text-red-400 text-xs mt-1">{errors.supply}</p>
          )}
        </div>

        {/* Phone & Material */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-1">Phone Number</label>
            <input
              type="text"
              className={inputClass("number")}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onBlur={() => handleBlur("number")}
            />
            {touched.number && errors.number && (
              <p className="text-red-400 text-xs mt-1">{errors.number}</p>
            )}
          </div>

          <div>
            <label className="block text-white mb-1">Material Type</label>
            <input
              type="text"
              className={inputClass("material")}
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              onBlur={() => handleBlur("material")}
            />
            {touched.material && errors.material && (
              <p className="text-red-400 text-xs mt-1">
                {errors.material}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-white mb-1">Message</label>
          <textarea
            className={`w-full h-28 px-3 py-2 rounded-md border bg-white text-black
            focus:outline-none focus:ring-2 focus:ring-base_text transition resize-none
            ${
              touched.body && errors.body
                ? "border-red-500"
                : "border-gray-300"
            }`}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            onBlur={() => handleBlur("body")}
          />
          {touched.body && errors.body && (
            <p className="text-red-400 text-xs mt-1">{errors.body}</p>
          )}
        </div>

        {/* Submit (Original Style Kept) */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="text-white bg-base_color border-2 px-10 py-2 rounded-full cursor-pointer hover:bg-lime-950 transition-all ease-in-out duration-300 disabled:opacity-50"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      <ToastContainer />
    </>
  );
}