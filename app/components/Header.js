"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import {
  FaEnvelope,
  FaYoutube,
  FaFacebookSquare,
  FaUserAlt,
  FaTools,
  FaMapMarkerAlt,
  FaPaintRoller,
  FaSuperpowers,
} from "react-icons/fa";
import { GiGoat, GiStoneWheel } from "react-icons/gi";
import { FaBottleDroplet } from "react-icons/fa6";
import Image from "next/image";
import logo from "./logo_white.png";

const navLinks = [
  { name: "Who we are", href: "/about", icon: <FaUserAlt /> },
  { name: "How we work", href: "/faq", icon: <FaTools /> },
  { name: "Visit our Factory", href: "/contact", icon: <FaMapMarkerAlt /> },
  { name: "GlassLimestone", href: "/glass-grade-limestone", icon: <FaBottleDroplet /> },
  { name: "AnimalFeed", href: "/animal-feed-limestone", icon: <GiGoat /> },
  { name: "Dolomite", href: "/calcium-carbonate-dolomite", icon: <FaPaintRoller /> },
  { name: "SuperFine", href: "/super-fine-calcium", icon:  <FaSuperpowers /> },
  { name: "Calcium", href: "/calcium-carbonate", icon: <GiStoneWheel /> },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.main initial="hidden" animate="visible">
      {/* Top Bar */}
      <div className="top-bar flex justify-between items-center px-5 sm:px-7 bg-base_two h-10 text-base_text fixed w-full z-[60]">
        <div>
          <h6 className="font-semibold text-sm">+2347085544340</h6>
        </div>
        <div className="socials flex items-center gap-2">
          <a href="mailto:info@zipruschemicals.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-lg" />
          </a>
          <a
            href="https://youtube.com/@zipruschemicals?si=PyDgAhGYlthsP5zW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-xl" />
          </a>
          <a
            href="https://www.facebook.com/ZiprusGold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="text-lg" />
          </a>
          <div className="division-line mr-1">|</div>
          <Link href="https://blog.zipruschemicals.com/">
            <span className="font-semibold text-sm cursor-pointer">NEWS</span>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="menu-bar bg-base_color h-20 flex items-center justify-between px-5 sm:px-20 fixed w-full top-10 z-[50] shadow-md">
        <Link href="/">
          <Image src={logo} alt="ziprus logo white" width={150} priority={false} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6 items-center overflow-x-auto whitespace-nowrap scrollbar-hide max-w-[80%]">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`text-lg ${
                  isActive ? "text-base_text font-bold" : "text-white hover:text-base_text"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <a
          href="#order-form"
          className="text-white bg-base_color border-2 px-7 py-2 rounded-full cursor-pointer hover:bg-lime-950 ease-in-out duration-300 hidden lg:block"
        >
          Place an Order
        </a>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-white text-3xl cursor-pointer relative z-[70]"
          onClick={() => setIsMenuOpen(true)}
        >
          <HiOutlineMenu />
        </button>
      </div>

      {/* Mobile / Tablet Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-base_color border-l-2 border-base_text flex flex-col items-start justify-start pt-10 px-6 gap-6 lg:hidden z-[80] overflow-y-auto overscroll-contain"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {/* Close Icon inside the menu */}
            <button
              className="text-white text-3xl self-end mb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoClose />
            </button>

            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={`text-lg tracking-wide border-b pb-2 w-full transition-all duration-300 flex items-center gap-3 ${
                    isActive
                      ? "text-base_text border-base_text"
                      : "text-white hover:text-base_text border-base_text/50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}

            <a
              href="#order-form"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg tracking-wide border-b border-base_text pb-2 w-full hover:text-base_text transition-all duration-300"
            >
              Place an Order
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
