"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger menu icons
import { signOut } from "next-auth/react"; // For sign out functionality
import { motion, AnimatePresence } from "framer-motion"; // For animations

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
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.5 } },
  };

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <div className="menu-bar bg-base_color h-20 flex items-center gap-[100px] sm:gap-[190px] px-6 md:px-20 relative pt-40 pb-10">
      {/* Logo/Title */}
      <Link href={"/admin"}>
        <h1 className="admin-nav text-white text-xl">Admin Home</h1>
      </Link>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-white text-2xl z-50"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-5">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              href={link.href}
              className={
                isActive
                  ? "text-base_text text-lg tracking-wide border-b-2 border-base_text pb-1"
                  : "text-white text-lg tracking-wide border-b-2 border-transparent pb-1"
              }
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })} // Redirect to login after sign out
          className="text-white text-lg tracking-wide border-b-2 border-transparent pb-1"
        >
          Sign Out
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="absolute top-0 right-0 w-[80%] h-screen bg-base_color flex flex-col items-end justify-center gap-4 text-white pt-24 px-6 z-40 border-l-2 border-base_text"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={handleCloseMenu}
            >
              <FiX />
            </button>

            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="text-lg tracking-wide border-b border-base_text pb-2 hover:text-base_text transition-all duration-300"
                onClick={handleCloseMenu} // Close menu on link click
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                handleCloseMenu(); // Close menu
                signOut({ callbackUrl: "/login" });
              }}
              className="text-lg tracking-wide border-b border-base_text pb-2 hover:text-green-500 transition-all duration-300"
            >
              Sign Out
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
