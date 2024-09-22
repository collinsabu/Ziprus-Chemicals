// pages/career/page.js

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CareerPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [cv, setCv] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
   e.preventDefault();
   setIsLoading(true);
 
   // Validate file type and size (optional but recommended)
   if (cv && (cv.type !== 'application/pdf' && cv.type !== 'application/msword')) {
     setMessage("Please upload a PDF or Word document.");
     setIsLoading(false);
     return;
   }
 
   if (cv && cv.size > 5 * 1024 * 1024) { // Example: limit file size to 5MB
     setMessage("File size must be under 5MB.");
     setIsLoading(false);
     return;
   }
 
   const formData = new FormData();
   formData.append("fullName", fullName);
   formData.append("email", email);
   formData.append("phone", phone);
   formData.append("position", position);
   formData.append("cv", cv);
   formData.append("coverLetter", coverLetter);
 
   try {
     const res = await fetch("/api/jobApplication", {
       method: "POST",
       body: formData,
     });
 
     const data = await res.json();
 
     if (data.error) {
       setMessage(data.error);
     } else {
       setMessage("Your application was submitted successfully.");
       // Reset form after submission
       setFullName("");
       setEmail("");
       setPhone("");
       setPosition("");
       setCv(null);
       setCoverLetter("");
     }
   } catch (error) {
     setMessage("An error occurred while submitting your application.");
   } finally {
     setIsLoading(false);
   }
 };
 
  

  return (
    <div className="min-h-screen bg-base_color flex justify-center items-center p-6 my-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-base_two">Work with Us</h1>
        <p className="text-center mb-6 text-xl font-semibold">Fill the form below to apply for a job and join our team</p>
        {message && <p className="text-center mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-lg font-semibold">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-lg font-semibold">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          {/* Position */}
          <div className="mb-4">
            <label className="block text-lg font-semibold">Position</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          {/* CV Upload */}
          <div className="mb-4">
            <label className="block text-lg font-semibold">Upload CV</label>
            <input
              type="file"
              onChange={(e) => setCv(e.target.files[0])}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          {/* Cover Letter */}
          <div className="mb-4">
            <label className="block text-lg font-semibold">Cover Letter</label>
            <textarea
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-base_text text-white py-2 px-4 rounded-lg hover:bg-lime-950 font-bold"
          >
            {isLoading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
