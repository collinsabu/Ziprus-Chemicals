"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaTrash, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { toast } from "react-toastify";
import BusinessPartnerForm from "../../components/BusinessPartnerForm";

export default function PhoneBookList() {
  const [partners, setPartners] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const partnersPerPage = 10;

  const fetchPartners = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/business-partners");
      const data = await res.json();
      setPartners(data || []);
    } catch (error) {
      toast.error("Failed to load phonebook.");
    }
    setIsLoading(false);
  };

  const deletePartner = async (id) => {
    try {
      const res = await fetch(`/api/business-partners?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setPartners((prev) => prev.filter((p) => p._id !== id));
        toast.success("Deleted successfully!");
      } else {
        toast.error("Delete failed.");
      }
    } catch (error) {
      toast.error("Server error.");
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  // Pagination Logic
  const indexOfLast = currentPage * partnersPerPage;
  const indexOfFirst = indexOfLast - partnersPerPage;
  const currentPartners = partners.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(partners.length / partnersPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <main className="bg-base_color min-h-screen py-10">
      <div className="max-w-screen-lg mx-auto px-4">

        <h1 className="text-2xl font-semibold text-center text-white mb-6">
          Partners Phone Book
        </h1>

        {/* Add button */}
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-base_text text-white px-4 py-2 rounded flex items-center gap-2 mb-6"
        >
          <FaPlus /> Add Number
        </button>

        {isAddModalOpen && (
          <BusinessPartnerForm
            onPartnerAdded={(newPartner) => {
              setPartners((prev) => [newPartner, ...prev]);
              setIsAddModalOpen(false);
            }}
            onClose={() => setIsAddModalOpen(false)}
          />
        )}

        {/* Loading */}
        {isLoading && (
          <p className="text-center text-gray-300">Loading...</p>
        )}

        {/* List */}
        <div className="space-y-4">
          {currentPartners.map((partner) => (
            <div
              key={partner._id}
              className="bg-base_text rounded-lg p-4 flex justify-between items-center shadow hover:shadow-lg transition"
            >
              <Link
                href={`/business-partners/${partner._id}`}
                className="flex flex-col"
              >
                <span className="text-lg font-semibold text-base_color">
                  {partner.name}
                </span>

                {/* Dial on mobile */}
                <a
                  href={`tel:${partner.phoneNumber}`}
                  className="text-base_color underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {partner.phoneNumber}
                </a>

                <span className="text-sm text-base_color/80">
                  {partner.category}
                </span>
              </Link>

              {/* Delete button */}
              <button
                onClick={() => deletePartner(partner._id)}
                className="text-red-600 text-xl"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          {partners.length === 0 && !isLoading && (
            <p className="text-center text-gray-400">No partners found.</p>
          )}
        </div>

        {/* PAGINATION BUTTONS */}
        {partners.length > 10 && (
          <div className="flex justify-between items-center mt-6 text-white">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded flex items-center gap-2 ${
                currentPage === 1
                  ? "bg-base_two opacity-50 cursor-not-allowed"
                  : "bg-base_text hover:bg-base_two"
              }`}
            >
              <FaChevronLeft /> Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded flex items-center gap-2 ${
                currentPage === totalPages
                  ? "bg-base_two opacity-50 cursor-not-allowed"
                  : "bg-base_text hover:bg-base_two"
              }`}
            >
              Next <FaChevronRight />
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
