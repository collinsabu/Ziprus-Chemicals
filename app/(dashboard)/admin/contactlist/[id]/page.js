"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

async function getContact(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/contacts/${id}`, {
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
  const { id } = params;
  const router = useRouter();

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
      <div className="flex justify-center items-center h-screen bg-base_color">
        <p className="text-lg text-white animate-pulse">Loading contact details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  if (!contact) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-base_color py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-6 px-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Contact Details</h1>
          <p className="text-sm sm:text-md mt-2">Name: {contact.fullname}</p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Email</h5>
            <p className="text-lg text-gray-700">{contact.email}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Phone Number</h5>
            <p className="text-lg text-gray-700">{contact.phonenumber}</p>
          </div>

          <div className="space-y-2">
            <h5 className="text-lg font-medium">Message</h5>
            <p className="text-gray-600">{contact.message || "No message provided"}</p>
          </div>
        </div>

        <div className="flex justify-end bg-gray-100 py-4 px-6">
          <button
            onClick={() => router.push("/admin/contactlist")}
            className="flex items-center gap-2 px-4 py-2 bg-base_two text-white rounded-lg hover:bg-teal-600"
          >
            <FaArrowLeft />
            Back to Contact List
          </button>
        </div>
      </div>
    </main>
  );
}
