"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactForm() {
  const router = useRouter();

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newContact = { fullname, email, phonenumber, message };

    try {
      const res = await fetch("http://localhost:3000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
      });

      const json = await res.json();

      if (json.error) {
        console.error(json.error);
        setIsLoading(false);
        return;
      }

      if (json.message) {
        router.refresh();
        router.push("/thanks/contact");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <div className="w-full flex flex-col items-center">
        <label className="block text-sm font-light">Enter Full Name</label>
        <input
          type="text"
          onChange={(e) => setFullName(e.target.value)}
          value={fullname}
          required
          className="w-2/3 h-8 text-black"
        />
      </div>

      <div className="w-full flex flex-col items-center">
        <label className="block text-sm font-light">Email Address</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className="w-2/3 h-8 text-black"
        />
      </div>

      <div className="w-full flex flex-col items-center">
        <label className="block text-sm font-light">Phone Number</label>
        <input
          type="text"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phonenumber}
          required
          className="w-2/3 h-8 text-black"
        />
      </div>

      <div className="w-full flex flex-col items-center">
        <label className="block text-sm font-light">Message</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
          className="w-2/3 h-24 text-black"
        />
      </div>

      <div className="w-full flex justify-center">
        <button
          type="submit"
          disabled={isLoading}
          className="text-white bg-base_color w-36 border-2 py-2 rounded-full cursor-pointer hover:bg-lime-950 ease-in-out duration-300"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
