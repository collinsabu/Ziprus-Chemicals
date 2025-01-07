"use client";
import bgImage from "./bg.jpg"; // Import the image

// components
import AuthForm from "../AuthForm";

export default function Login() {
  return (
    <section
      className="min-h-screen flex items-center justify-center mb-10  pt-40"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AuthForm />
    </section>
  );
}
