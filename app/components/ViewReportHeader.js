"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for the hamburger menu
import { signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion"; // For animations

const navLinks = [
  { name: "CrudeIn", href: "/viewreport" },
  { name: "C.paymt", href: "/viewreport/crudePaymentList" },
  { name: "BagAcct", href: "/viewreport/bagAccountEntriesList" },
  { name: "Production", href: "/viewreport/productionRecordList" },
  { name: "Despatch", href: "/viewreport/despatchRecordsList" },
  { name: "WagesAcct", href: "/viewreport/wagesAccountList" },
  { name: "LightUsage", href: "/viewreport/lightMonitoringList" },
  { name: "MorningReport", href: "/viewreport/morningReportsList" },
  { name: "SituationReport", href: "/viewreport/situationReportsList" },
  { name: "DailyReport", href: "/viewreport/dailyReportsList" },
];

export default function AdminHeader({ user }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants
  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="menu-bar bg-base_color h-20 flex items-center justify-between px-4 md:px-20 pt-40 pb-10 relative">
      {/* Logo/Title */}
      <div>
        <Link href={"/admin"} className="admin-nav text-white text-xl">
          Admin View Report
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
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
              className={`${
                isActive ? "text-base_text" : "text-white"
              } text-lg tracking-wide border-b-2 ${
                isActive ? "border-base_text" : "border-transparent"
              } pb-1`}
              key={link.name}
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
              onClick={() => signOut()}
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
