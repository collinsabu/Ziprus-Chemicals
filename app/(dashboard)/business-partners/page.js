"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaEdit, FaTrash, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import BusinessPartnerForm from "../../components/BusinessPartnerForm";
import EditBusinessPartnerForm from "../../components/EditBusinessPartnerForm";

export default function BusinessPartnersPage() {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editPartner, setEditPartner] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [partnersPerPage] = useState(10); // Show 10 partners per page

  // Fetch partners
  const fetchPartners = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/business-partners");
      if (!response.ok) throw new Error("Failed to fetch data from the server.");
      const data = await response.json();
      setPartners(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch business partners.");
    } finally {
      setIsLoading(false);
    }
  };

  // Delete a partner
  const deletePartner = async (id) => {
    try {
      const response = await fetch(`/api/business-partners?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Business partner deleted successfully!");
        setPartners(partners.filter((partner) => partner._id !== id));
      } else {
        toast.error("Failed to delete business partner.");
      }
    } catch (error) {
      console.error("Error deleting partner:", error);
      toast.error("An error occurred while deleting.");
    }
  };

  // Handle adding a new partner
  const handlePartnerAdded = (newPartner) => {
    setPartners((prev) => [newPartner, ...prev]);
    setIsAddModalOpen(false);
  };

  // Handle editing a partner
  const handlePartnerEdited = (updatedPartner) => {
    setPartners((prev) =>
      prev.map((partner) =>
        partner._id === updatedPartner._id ? updatedPartner : partner
      )
    );
    setIsEditModalOpen(false);
    setEditPartner(null);
  };

  // Pagination logic
  const indexOfLastPartner = currentPage * partnersPerPage;
  const indexOfFirstPartner = indexOfLastPartner - partnersPerPage;
  const currentPartners = partners.slice(indexOfFirstPartner, indexOfLastPartner);

  const totalPages = Math.ceil(partners.length / partnersPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  return (
    <main className="bg-base_color">
    <div className="max-w-4xl mx-auto text-white p-6 bg-base_color mt-6  mb-20">
      <h1 className="text-2xl font-bold mb-6 text-center">Partners PhoneBook</h1>
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="mb-4 bg-base_text text-white px-4 py-2 rounded flex items-center gap-2"
      >
        <FaPlus /> Add Business Partner
      </button>

      {isAddModalOpen && (
        <BusinessPartnerForm
          onPartnerAdded={handlePartnerAdded}
          onClose={() => setIsAddModalOpen(false)}
        />
      )}

      {isEditModalOpen && editPartner && (
        <EditBusinessPartnerForm
          partner={editPartner}
          onPartnerEdited={handlePartnerEdited}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      {isLoading ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Phone Number</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index}>
                <td className="border p-2 animate-pulse bg-gray-200">&nbsp;</td>
                <td className="border p-2 animate-pulse bg-gray-200">&nbsp;</td>
                <td className="border p-2 animate-pulse bg-gray-200">&nbsp;</td>
                <td className="border p-2 animate-pulse bg-gray-200">&nbsp;</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-base_two">
                <th className="border p-2">Name</th>
                <th className="border p-2">Phone Number</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(currentPartners) &&
                currentPartners.map((partner) => (
                  <motion.tr
                    key={partner._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <td className="border p-2">{partner.name}</td>
                    <td className="border p-2">{partner.phoneNumber}</td>
                    <td className="border p-2">{partner.category}</td>
                    <td className="border p-2 flex gap-2">
                      <button
                        onClick={() => {
                          setEditPartner(partner);
                          setIsEditModalOpen(true);
                        }}
                        className="text-base_text hover:underline"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deletePartner(partner._id)}
                        className="text-red-600 hover:underline"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </motion.tr>
                ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1 ? "bg-base_two" : "bg-base_text text-white hover:bg-base_text"
              }`}
            >
              <FaChevronLeft /> Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-base_two"
                  : "bg-base_text text-white hover:bg-base_text"
              }`}
            >
              Next <FaChevronRight />
            </button>
          </div>
        </>
      )}
    </div>
    </main>
  );
}
