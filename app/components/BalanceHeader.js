"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { signOut } from "next-auth/react"; // Importing the signOut function
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "TotalSalaryBalance", href: "/balance" },
  { name: "StockBalance", href: "/balance/stockbalance" },
  { name: "WorkersSalary", href: "/balance/workerswages" },
  { name: "CrudeBalance", href: "/balance/crudebalance/" },
  { name: "CrudePaymentBalance", href: "/balance/crudepaymentbalance" },
  { name: "EmptyBagsBalance", href: "/balance/bagbalance" },
  { name: "CustomerBalance", href: "/balance/customersaccounts" }, 
];

export default function AdminHeader({ user }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation Variants
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.4 } },
  };

  return (
    <div className="menu-bar bg-base_color h-20 flex items-center justify-between px-6 md:px-20 relative pt-40 pb-10 mb-3">
      <div className="flex items-center gap-[100px] sm:gap-[190px]">
        <Link href={"/admin"} className="admin-nav text-white text-xl">
          Admin Balance
        </Link>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-5">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={link.name}
              className={`${
                isActive ? "text-base_text" : "text-white"
              } text-lg tracking-wide border-b-2 ${
                isActive ? "border-base_text" : "border-transparent"
              } pb-1 hover:border-base_text`}
            >
              {link.name}
            </Link>
          );
        })}
        <button
          onClick={() => signOut()}
          className="text-white text-lg tracking-wide border-b-2 border-transparent pb-1 hover:border-base_text"
        >
          Sign Out
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="absolute top-full left-0 w-full bg-base_color p-6 flex flex-col items-center gap-4 z-50 md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  href={link.href}
                  className={`${
                    isActive ? "text-base_text" : "text-white"
                  } text-lg tracking-wide border-b-2 ${
                    isActive ? "border-base_text" : "border-transparent"
                  } pb-1`}
                  key={link.name}
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link.name}
                </Link>
              );
            })}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                signOut();
              }}
              className="text-white text-lg tracking-wide border-b-2 border-transparent pb-1 hover:border-base_text"
            >
              Sign Out
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
