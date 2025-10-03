"use client";
// react-icons import
import {
  FaEnvelope,
  FaYoutube,
  FaFacebookSquare,
  FaUserAlt,
  FaTools,
  FaMapMarkerAlt,
  FaPaintRoller ,
} from "react-icons/fa";

import { GiGoat } from "react-icons/gi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaBottleDroplet } from "react-icons/fa6";
import { GiStoneWheel } from "react-icons/gi";

// react imports
import { useState } from "react";

// next imports
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Framer Motion import
import { motion } from "framer-motion";

// General imports
import logo from "./logo_white.png";

const navLinks = [
  { name: "Who we are", href: "/about", icon: <FaUserAlt /> },
  { name: "How we work", href: "/faq", icon: <FaTools /> },
  { name: "Visit our Factory", href: "/contact", icon: <FaMapMarkerAlt /> },
  { name: "GlassLimestone", href: "/glass-grade-limestone", icon: <FaBottleDroplet /> },
  { name: "AmimalFeed", href: "/animal-feed-limestone", icon: <GiGoat /> },
  { name: "Dolomite", href: "/calcium-carbonate-dolomite", icon: <FaPaintRoller /> },
  { name: "Calcium", href: "/calcium-carbonate", icon: <GiStoneWheel />},
  
];

const Header = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track active link

  const desktopNavAnimation = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const mobileMenuAnimation = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.main
      className="poppins"
      initial="hidden"
      animate="visible"
      variants={desktopNavAnimation}
    >
      {/* Top Bar */}
      <div className="top-bar flex justify-between items-center px-5 sm:px-7 bg-base_two h-10 text-base_text fixed w-full z-50">
        <div>
          <h6 className="font-semibold text-sm">+2347085544340</h6>
        </div>
        <div className="socials flex items-center gap-2">
          <a
            href="mailto:info@zipruschemicals.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
      <motion.div
        className="menu-bar bg-base_color h-20 flex items-center justify-between px-5 sm:px-20 fixed w-full top-10 z-40 shadow-md"
        initial="hidden"
        animate="visible"
        variants={desktopNavAnimation}
      >
        <Link href="/">
          <Image src={logo} alt="ziprus logo white" width="150" priority={false} />
        </Link>

        <nav className="hidden sm:flex gap-6 items-center">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                href={link.href}
                className={`text-lg ${
                  isActive ? "text-base_text font-bold" : "text-white"
                }`}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>


        <a
          href="#order-form"
          className="text-white bg-base_color border-2 px-7 py-2 rounded-full cursor-pointer hover:bg-lime-950 ease-in-out duration-300 hidden sm:block"
        >
          Place an Order
        </a>

        <HiOutlineMenu
          className="sm:hidden text-white text-3xl cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      </motion.div>

      {/* Mobile Menu */}
      {showMenu && (
        <motion.div
          className="mobile-menu bg-base_color w-3/4 h-screen fixed top-0 right-0 text-white p-6 flex flex-col gap-4 z-50 shadow-lg"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuAnimation}
        >
          <IoClose
            onClick={() => setShowMenu(false)}
            className="self-end text-3xl cursor-pointer"
          />
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-all duration-300 ${
                activeLink === link.href ? "bg-base_text text-black" : "hover:bg-base_two"
              }`}
              onClick={() => setActiveLink(link.href)}
            >
              {link.icon}
              <Link href={link.href}>
                <span>{link.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.main>
  );
};

export default Header;
