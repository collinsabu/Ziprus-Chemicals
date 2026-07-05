"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* MODAL BOX */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-5 py-4 border-b bg-base_color text-white">
            <h2 className="text-lg font-semibold">{title}</h2>

            <button
              onClick={onClose}
              className="text-white hover:text-red-200 text-xl"
            >
              ✕
            </button>
          </div>

          {/* BODY */}
          <div className="p-5 text-black">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}