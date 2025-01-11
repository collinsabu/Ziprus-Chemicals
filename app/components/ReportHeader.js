"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "C.Stock", href: "/report" },
  { name: "C. payment", href: "/report/crudepayment" },
  { name: "EmptyBag", href: "/report/bagaccount" },
  { name: "Production", href: "/report/production" },
  { name: "Despatch", href: "/report/despatch" },
  { name: "SalaryRecord", href: "/report/wagesaccount" },
  { name: "LightUsage", href: "/report/lightusage" },
  { name: "MorningReport", href: "/report/morningreport" },
  { name: "SituationReport", href: "/report/situationreport" },
  { name: "DailyReport", href: "/report/dailyreport" },
];

export default function AdminHeader({ user }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="menu-bar bg-base_color h-20 flex items-center justify-between px-4 md:px-20 pt-40 pb-10 relative">
      <div>
        <Link href={"/admin"} className="admin-nav text-white text-xl">
          Admin Report
        </Link>
      </div>
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Desktop View */}
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
          onClick={() => signOut()}
          className="text-white text-lg tracking-wide border-b-2 border-transparent pb-1 hover:border-base_text"
        >
          Sign Out
        </button>
      </nav>

      {/* Mobile View */}
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
                  className={
                    isActive
                      ? "text-base_text text-lg tracking-wide border-b-2 border-base_text pb-1"
                      : "text-white text-lg tracking-wide border-b-2 border-transparent pb-1"
                  }
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
