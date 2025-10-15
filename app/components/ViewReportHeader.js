"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "C.Stock", href: "/viewreport" },
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

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.4 } },
  };

  return (
    <header className="bg-base_color text-white fixed top-[120px] left-0 w-full shadow-lg border-t border-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link
          href="/admin"
          className="text-white text-xl font-semibold shrink-0 focus:outline-none focus:ring-2 focus:ring-base_text rounded"
        >
          Admin View Report
        </Link>

        {/* Desktop Navigation with horizontal scroll */}
        <nav
          className="
            hidden md:flex items-center gap-6 flex-1
            overflow-x-auto whitespace-nowrap
            pl-4
          "
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`inline-block text-lg tracking-wide pb-1 border-b-2 mr-4 last:mr-0 focus:outline-none focus:ring-2 focus:ring-base_text ${
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
            className="inline-block text-lg tracking-wide pb-1 border-b-2 text-white border-transparent hover:border-base_text focus:outline-none focus:ring-2 focus:ring-base_text"
          >
            Sign Out
          </button>
        </nav>

        {/* Hamburger Menu Toggle (mobile/tablet) */}
        <button
          className="md:hidden ml-auto text-white text-2xl focus:outline-none focus:ring-2 focus:ring-base_text rounded"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Navigation (Full screen slide-in) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed top-0 left-0 w-full h-screen bg-base_color flex flex-col pt-20 px-6 gap-6 md:hidden z-[60] overflow-y-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            aria-label="Mobile Navigation"
          >
            {/* Close Icon inside mobile menu */}
            <button
              className="absolute top-6 right-6 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-base_text rounded"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <FiX />
            </button>

            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full text-lg tracking-wide pb-2 border-b ${
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
              className="w-full text-lg tracking-wide border-b-2 border-transparent pb-2 text-white hover:border-base_text focus:outline-none focus:ring-2 focus:ring-base_text"
            >
              Sign Out
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
