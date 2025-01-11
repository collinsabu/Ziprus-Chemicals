"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BagAccountForm() {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [purchase, setPurchase] = useState("");
  const [used, setUsed] = useState("");
  const [balance, setBalance] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newEntry = { date, time, purchase, used, balance, comment };

    try {
      const res = await fetch("/api/bagAccountEntries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      });

      const json = await res.json();

      if (json.error) {
        toast.error(`Error: ${json.error}`, {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        toast.success("Record submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setTimeout(() => router.push("/report/recordsuccesful"), 3000);
      }
    } catch (error) {
      toast.error("An unexpected error occurred.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-8 bg-base_color shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Empty Bag Stock Take</h2>
        <div className="mb-4">
          <label className="block text-white mb-2">Date</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Time</label>
          <input
            type="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Purchase</label>
          <input
            type="number"
            onChange={(e) => setPurchase(e.target.value)}
            value={purchase}
            required
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="enter quantity"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Used</label>
          <input
            type="number"
            onChange={(e) => setUsed(e.target.value)}
            value={used}
            required
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="how much has been used, you can entr Zero"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Balance</label>
          <input
            type="number"
            onChange={(e) => setBalance(e.target.value)}
            value={balance}
            required
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="how many left after use"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Comment</label>
          <textarea
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="give more details like where bag was purchase + anything relevant"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-base_text text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-950"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}
