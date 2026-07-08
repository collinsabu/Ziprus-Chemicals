"use client";

import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

export default function RemoveLead({ id }) {
  const router = useRouter();

  const removeLead = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmed) return;

    try {
      const res = await fetch(`/api/leads?id=${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete lead");
      }

      router.refresh();

    } catch (error) {
      console.error("Delete lead error:", error);
      alert("Unable to delete lead");
    }
  };


  return (
    <button
      onClick={removeLead}
      className="
      flex
      items-center
      gap-2
      bg-red-600
      hover:bg-red-700
      text-white
      px-4
      py-2
      rounded-lg
      transition
      "
    >
      <FaTrash size={14}/>
      Delete
    </button>
  );
}