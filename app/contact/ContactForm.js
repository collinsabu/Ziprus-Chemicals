"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const router = useRouter();

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  // ----------------------
  // VALIDATION FUNCTIONS
  // ----------------------
  const validateName = (name) => {
    if (!name.trim()) return "Full name is required";
    if (!/^[a-zA-Z\s]{3,50}$/.test(name.trim()))
      return "Full name must be letters & spaces, 3-50 chars";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return "Phone number is required";
    if (!/^[0-9]{7,15}$/.test(phone.trim()))
      return "Phone number must be 7-15 digits";
    return "";
  };

  const validateMessage = (msg) => {
    if (!msg.trim()) return "Message is required";
    if (msg.trim().length < 10 || msg.trim().length > 500)
      return "Message must be 10-500 characters";
    return "";
  };

  // ----------------------
  // REAL-TIME VALIDATION
  // ----------------------
  useEffect(() => {
    setErrors({
      fullname: validateName(fullname),
      email: validateEmail(email),
      phonenumber: validatePhone(phonenumber),
      message: validateMessage(message),
    });
  }, [fullname, email, phonenumber, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentErrors = {
      fullname: validateName(fullname),
      email: validateEmail(email),
      phonenumber: validatePhone(phonenumber),
      message: validateMessage(message),
    };
    setErrors(currentErrors);

    if (
      currentErrors.fullname ||
      currentErrors.email ||
      currentErrors.phonenumber ||
      currentErrors.message
    ) {
      toast.error("Please fix the errors before submitting", {
        position: "top-right",
        autoClose: 4000,
      });
      return;
    }

    setIsLoading(true);

    const newContact = { fullname, email, phonenumber, message };

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        toast.error(json.error || "Error submitting form", {
          position: "top-right",
          autoClose: 4000,
        });
        setIsLoading(false);
        return;
      }

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setErrors({ fullname: "", email: "", phonenumber: "", message: "" });

      setTimeout(() => {
        router.refresh();
        router.push("/thanks/contact");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 4000,
      });
      setIsLoading(false);
    }
  };

  // ----------------------
  // UPDATED INPUT STYLING (FIXED VISIBILITY)
  // ----------------------
  const inputClass = (field) =>
    `w-full h-10 px-3 rounded border bg-white text-black placeholder-gray-400
     focus:outline-none focus:ring-2 focus:ring-lime-900 transition ${
       errors[field] ? "border-red-500" : "border-gray-300"
     }`;

  const textareaClass = (field) =>
    `w-full h-24 px-3 py-2 rounded border bg-white text-black placeholder-gray-400
     focus:outline-none focus:ring-2 focus:ring-lime-900 transition ${
       errors[field] ? "border-red-500" : "border-gray-300"
     }`;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full max-w-md mx-auto"
      >
        <div className="w-full flex flex-col">
          <label className="block text-sm font-light mb-1">Full Name</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
            className={inputClass("fullname")}
          />
          {errors.fullname && (
            <span className="text-red-500 text-xs mt-1">{errors.fullname}</span>
          )}
        </div>

        <div className="w-full flex flex-col">
          <label className="block text-sm font-light mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@mail.com"
            className={inputClass("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">{errors.email}</span>
          )}
        </div>

        <div className="w-full flex flex-col">
          <label className="block text-sm font-light mb-1">Phone Number</label>
          <input
            type="text"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="08012345678"
            className={inputClass("phonenumber")}
          />
          {errors.phonenumber && (
            <span className="text-red-500 text-xs mt-1">
              {errors.phonenumber}
            </span>
          )}
        </div>

        <div className="w-full flex flex-col">
          <label className="block text-sm font-light mb-1">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className={textareaClass("message")}
          />
          {errors.message && (
            <span className="text-red-500 text-xs mt-1">{errors.message}</span>
          )}
        </div>

        <div className="w-full flex justify-center mt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="text-white bg-base_color w-36 py-2 rounded-full hover:bg-lime-950 transition-colors duration-300 disabled:opacity-50"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      <ToastContainer />
    </>
  );
}