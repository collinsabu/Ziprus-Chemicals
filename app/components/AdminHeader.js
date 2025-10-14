"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Orders", href: "/admin/orderlist" },
  { name: "Contacts", href: "/admin/contactlist" },
  { name: "Report", href: "/report" },
  { name: "View Report", href: "/viewreport" },
  { name: "Loading/Payment", href: "/loadingandpayment" },
  { name: "View Load/Payment", href: "/viewloadingandpayment" },
  { name: "Balance", href: "/balance" },
  { name: "PhoneBook", href: "/business-partners" },
];

export default function AdminHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.4 } },
  };

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-base_color text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/admin">
          <h1 className="text-lg sm:text-xl font-semibold cursor-pointer">
            Admin Home
          </h1>
        </Link>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`text-sm lg:text-base tracking-wide pb-1 transition-colors ${
                  isActive
                    ? "text-base_text border-b-2 border-base_text"
                    : "text-white hover:text-base_text border-b-2 border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="text-sm lg:text-base tracking-wide hover:text-base_text transition-colors border-b-2 border-transparent"
          >
            Sign Out
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-base_color border-l-2 border-base_text flex flex-col items-start justify-start pt-20 px-6 gap-6 md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="text-lg tracking-wide border-b border-base_text pb-2 w-full hover:text-base_text transition-all duration-300"
                onClick={handleCloseMenu}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                handleCloseMenu();
                signOut({ callbackUrl: "/login" });
              }}
              className="text-lg tracking-wide border-b border-base_text pb-2 w-full hover:text-base_text transition-all duration-300"
            >
              Sign Out
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
