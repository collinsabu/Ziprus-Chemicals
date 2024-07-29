"use client";

import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const removeOrder = async () => {
    const confirmed = confirm("Are you sure you want to delete this Order?");

    if (confirmed) {
      try {
        const res = await fetch(`https://ziprus-chemicals.vercel.app/api/order?id=${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
          router.refresh(); // Reload the page to reflect the changes
        } else {
          throw new Error("Failed to delete order");
        }
      } catch (error) {
        console.error("Error deleting order:", error.message);
        alert("There was an error deleting the order. Please try again.");
      }
    }
  };

  return (
    <button className="mx-2 text-red_1 cursor-pointer" onClick={removeOrder}>
      <MdDeleteForever className="text-2xl" />
    </button>
  );
};

export default RemoveBtn;
