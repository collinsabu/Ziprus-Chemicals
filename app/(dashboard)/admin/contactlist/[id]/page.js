"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

async function getContact(id) {
  try {
    const res = await fetch(`https://ziprus-chemicals.vercel.app/api/contacts/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch contact details");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching contact:", error);
    return null;
  }
}

export default function ContactDetails({ params }) {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = params; // Use the dynamic route parameters directly
  const router = useRouter(); // useRouter hook for navigation

  useEffect(() => {
    if (id) {
      async function fetchContact() {
        const fetchedContact = await getContact(id);
        if (fetchedContact) {
          setContact(fetchedContact);
        } else {
          setError("Contact not found");
        }
        setLoading(false);
      }

      fetchContact();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="text-xl sm:text-2xl flex justify-center items-center bg-base_color text-base_text h-[400px]">
        Loading Details...
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!contact) {
    return notFound();
  }

  return (
    <main className="bg-base_color my-10 py-11">
      <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto py-10 text-black bg-base_text px-5 sm:px-10 rounded-md shadow-lg">
        <h5 className="text-lg sm:text-xl my-4 border-b-2 border-b-black pb-1">
          <span className="font-bold text-white">Full Name: </span> {contact.fullname}
        </h5>
        <h5 className="text-lg sm:text-xl my-4 border-b-2 border-b-black pb-1">
          <span className="font-bold text-white">Contact Address: </span> {contact.email}
        </h5>
        <h5 className="text-lg sm:text-xl my-4 border-b-2 border-b-black pb-1">
          <span className="font-bold text-white">Phone Number: </span> {contact.phonenumber}
        </h5>
        <p className="text-lg sm:text-xl my-4 border-b-2 border-b-black pb-1">
          <span className="font-bold text-white">Message: </span> {contact.message}
        </p>
        <button
          onClick={() => router.push('/admin/contactlist')}
          className="mt-6 px-4 py-2 bg-base_color text-white rounded hover:bg-base_two"
        >
          Back to Contact List
        </button>
      </div>
    </main>
  );
}
