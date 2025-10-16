"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Customer Loading", href: "/loadingandpayment" },
  { name: "Customer Payment", href: "/loadingandpayment/custmerpayment" },
  { name: "View Loading/Payment", href: "/viewloadingandpayment" },
];

export default function AdminHeader({ user }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.25 } },
  };

  return (
    <header className="relative top-[120px] left-0 w-full z-50 shadow-lg border-t border-white">
      {/* Top bar */}
      <div className="bg-base_color border-b border-black/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo / Title */}
          <Link href="/admin" className="flex items-center gap-3">
            <span className="text-white text-sm sm:text-base md:text-lg font-semibold">
              Admin Customer Loading
            </span>
          </Link>

          {/* Desktop nav — only show above 990px */}
          <nav className="hidden [@media(min-width:991px)]:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base lg:text-lg font-medium pb-1 border-b-2 ${
                    isActive
                      ? "text-base_text border-base_text"
                      : "text-white border-transparent hover:text-base_text hover:border-base_text"
                  } transition-colors`}
                >
                  {link.name}
                </Link>
              );
            })}

            <button
              onClick={() => signOut()}
              className="text-white text-base lg:text-lg font-medium pb-1 border-b-2 border-transparent hover:text-base_text hover:border-base_text transition-colors"
            >
              Sign Out
            </button>
          </nav>

          {/* Mobile hamburger — show below 990px */}
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((s) => !s)}
            className="[@media(min-width:991px)]:hidden text-white text-2xl p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base_text"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu + backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sliding panel */}
            <motion.nav
              key="mobile-menu"
              className="fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-sm bg-base_color z-50 shadow-xl safe-area-inset p-6 flex flex-col pt-14"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              {/* Close & logo */}
              <div className="flex items-center justify-between mb-6">
                <Link
                  href="/admin"
                  className="text-white font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Customer Loading
                </Link>
                <button
                  aria-label="Close menu"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-2xl p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-base_text"
                >
                  <FiX />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = pathname?.startsWith(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-lg font-medium py-2 px-2 rounded-md ${
                        isActive
                          ? "text-base_text bg-white/5"
                          : "text-white hover:text-base_text hover:bg-white/5"
                      } transition-colors`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="mt-4 text-white text-lg text-left py-2 px-2 rounded-md hover:text-base_text hover:bg-white/5 transition-colors"
                >
                  Sign Out
                </button>
              </div>

              {/* User info */}
              <div className="mt-auto pt-6 border-t border-white/10">
                {user ? (
                  <div className="text-sm text-white">
                    <div className="font-medium">{user.name}</div>
                    <div className="text-xs text-white/70">{user.email}</div>
                  </div>
                ) : (
                  <div className="text-sm text-white/70">Not signed in</div>
                )}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
