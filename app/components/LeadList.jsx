"use client";

import { useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import LeadDetailsModal from "./LeadDetailsModal";
import RemoveLead from "./RemoveLead";

export default function LeadList({ leads = [] }) {
  const [selectedLead, setSelectedLead] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 5;

  const start = (currentPage - 1) * perPage;

  const currentLeads = leads.slice(start, start + perPage);

  const totalPages = Math.ceil(leads.length / perPage);

  function formatDate(dateString) {
    const date = new Date(dateString);

    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      {leads.length === 0 && (
        <p className="text-center text-gray-300">
          No enquiries found.
        </p>
      )}

      <div className="space-y-4">
        {currentLeads.map((lead) => (
          <div
            key={lead._id}
            className="
              bg-white
              rounded-xl
              shadow-md
              p-5
              hover:shadow-xl
              transition-all
              duration-300
              border
              border-gray-100
            "
          >
            {/* Top */}
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-base_color">
                  {lead.fullname}
                </h2>

                <p className="text-gray-600 mt-1">
                  📧 {lead.email || "No email"}
                </p>

                <p className="text-gray-600">
                  📞 {lead.phone}
                </p>
              </div>

              <div className="text-sm md:text-right">
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                  {lead.status}
                </span>

                <p className="text-gray-500 mt-3">
                  📅 {formatDate(lead.createdAt)}
                </p>
              </div>
            </div>

            {/* Middle */}
            <div className="mt-5 grid md:grid-cols-2 gap-2 text-sm text-gray-700">
              <p>
                <strong>Company:</strong>{" "}
                {lead.company || "N/A"}
              </p>

              <p>
                <strong>Interest:</strong>{" "}
                {lead.productInterest || "N/A"}
              </p>
            </div>

            {/* Bottom */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setSelectedLead(lead)}
                className="
                  flex
                  items-center
                  gap-2
                  bg-base_color
                  hover:opacity-90
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  transition
                "
              >
                <FaEye size={14} />
                Details
              </button>

              <RemoveLead id={lead._id} />
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-3 mt-10">
          {Array.from(
            { length: totalPages },
            (_, i) => i + 1
          ).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg transition ${
                currentPage === page
                  ? "bg-base_color text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}

      {selectedLead && (
        <LeadDetailsModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}
    </div>
  );
}