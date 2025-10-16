"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { signOut } from "next-auth/react";
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

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.4 } },
  };

  return (
    <header className="bg-base_color text-white   w-full pt-[120px] border-t border-white z-[1000px] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between ">
        {/* Logo */}
        <Link href={"/admin"} className="text-xl font-semibold z-50 relative">
          Admin Balance
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg tracking-wide border-b-2 pb-1 ${
                  isActive
                    ? "text-base_text border-base_text"
                    : "text-white border-transparent hover:border-base_text"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <button
            onClick={() => signOut()}
            className="text-lg tracking-wide border-b-2 border-transparent pb-1 hover:border-base_text"
          >
            Sign Out
          </button>
        </nav>

        {/* Hamburger / Close Button */}
        <button
          className="lg:hidden text-2xl z-50 relative "
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed top-20 right-0 w-3/4 sm:w-1/2 h-[calc(100vh-5rem)] bg-base_color border-l-2 border-base_text flex flex-col items-start justify-start pt-6 px-6 gap-4 lg:hidden z-40 overflow-y-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg tracking-wide w-full border-b-2 pb-2 pt-10 ${
                    isActive
                      ? "text-base_text border-base_text"
                      : "text-white border-transparent hover:border-base_text"
                  }`}
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
              className="text-lg tracking-wide w-full border-b-2 border-transparent pb-2 hover:border-base_text"
            >
              Sign Out
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
