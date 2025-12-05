"use client";

import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

// Fetch single partner
async function getPartner(id) {
  try {
    const res = await fetch(`/api/business-partners/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Failed to fetch partner details");

    return await res.json();
  } catch (error) {
    console.error("Error fetching partner:", error);
    return null;
  }
}

export default function PartnerDetails({ params }) {
  const router = useRouter();
  const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPartner() {
      const fetched = await getPartner(params.id);
      if (fetched) setPartner(fetched);
      else setError("Business Partner not found");
      setLoading(false);
    }

    fetchPartner();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-base_two">
        <p className="text-lg text-gray-200 animate-pulse">
          Loading partner details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-base_two text-center px-4">
        <p className="text-lg text-red-400">{error}</p>
      </div>
    );
  }

  if (!partner) return notFound();

  return (
    <main className="min-h-screen bg-base_color py-10 mb-10 pt-52">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-base_text to-base_two text-white py-6 px-6 sm:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Partner Details</h1>
          <p className="mt-2 text-sm sm:text-md">Name: {partner.name}</p>
        </div>

        {/* DETAILS */}
        <div className="p-6 sm:p-8 space-y-4">
          {[
            { label: "Name", value: partner.name },
            { label: "Phone Number", value: partner.phoneNumber },
            { label: "Category", value: partner.category },
          ].map((field) => (
            <div
              key={field.label}
              className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b pb-4"
            >
              <h5 className="text-lg font-medium mb-1 sm:mb-0">{field.label}</h5>

              {/* Phone number should be dial-able */}
              {field.label === "Phone Number" ? (
                <a
                  href={`tel:${field.value}`}
                  className="text-lg text-blue-600 underline break-words"
                >
                  {field.value || "N/A"}
                </a>
              ) : (
                <p className="text-lg text-gray-700 break-words">
                  {field.value || "N/A"}
                </p>
              )}
            </div>
          ))}

          {/* Description */}
          <div className="space-y-2 mt-2">
            <h5 className="text-lg font-medium">Notes / Description</h5>
            <p className="text-gray-600 break-words">
              {partner.description || "No description provided."}
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end bg-gray-100 py-4 px-6">
          <button
            onClick={() => router.push("/business-partners")}
            className="flex items-center gap-2 px-4 py-2 bg-base_text text-white rounded-lg hover:bg-indigo-600 transition"
          >
            <FaArrowLeft />
            Back to PhoneBook
          </button>
        </div>
      </div>
    </main>
  );
}
