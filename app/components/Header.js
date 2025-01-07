// Updated Header Component with Framer Motion and Enhanced UX

"use client";
// react-icons import
import { FaEnvelope, FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
//import from react
import { useState } from "react";

// import from next
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Framer Motion import
import { motion } from "framer-motion";

// general import
import logo from "./logo_white.png";

const navLinks = [
  { name: "Who we are", href: "/about" },
  { name: "How we work", href: "/faq" },
  { name: "Visit our Factory", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(true);
  };

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
      <div className="top-bar flex justify-between items-center px-5 bg-base_two h-10 text-base_text fixed w-full z-50">
        <div>
          <h6 className="font-semibold">+2342018870085</h6>
        </div>
        <div className="socials flex items-center w-40">
          <div className="flex justify-around w-20">
            <a
              href="mailto:info@zipruschemicals.com"
              target="_blank"
              rel="ziprus chemical email"
            >
              <FaEnvelope className="text-lg" />
            </a>
            <a
              href={"https://youtube.com/@zipruschemicals?si=PyDgAhGYlthsP5zW"}
              target="_blank"
              rel="ziprus chemical YouTube page"
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              href="https://www.facebook.com/ZiprusGold"
              target="_blank"
              rel="ziprus chemical facebook page"
            >
              <FaFacebookSquare className="text-lg" />
            </a>
          </div>
          <div className="division-line mr-1">|</div>
          <div>
            <a
              href="https://ziprus-blog.vercel.app/"
              className="font-semibold"
              target="_blank"
              rel="ziprus chemical blog"
            >
              NEWS
            </a>
          </div>
        </div>
      </div>

      <motion.div
        className="menu-bar bg-base_color h-20 flex items-center justify-between sm:justify-around px-2 sm:px-20 fixed w-full top-10 z-40 shadow-md"
        initial="hidden"
        animate="visible"
        variants={desktopNavAnimation}
      >
        <Link href="/">
          <Image
            src={logo}
            alt="ziprus logo white"
            width="150"
            priority={false}
          />
        </Link>

        <nav className="nav_links hidden sm:block">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                href={link.href}
                className={
                  isActive
                    ? "text-base_text mx-5 text-lg tracking-wide"
                    : "text-white mx-5 text-lg tracking-wide"
                }
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

        <div>
          <HiOutlineMenu
            className="sm:hidden text-white text-4xl mr-4 cursor-pointer"
            onClick={handleClick}
          />
          {showMenu && (
            <motion.div
              className="mobile-menu w-[75%] bg-base_color  h-[400px] sm:hidden text-white flex flex-col gap-5 text-xl p-5 mt-10 z-50 fixed right-0 top-0"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuAnimation}
            >
              <IoClose
                onClick={() => setShowMenu(false)}
                className="cursor-pointer text-3xl self-end"
              />
              <Link href={"/about"} className="border-b-2 border-base_text">
                Who we are
              </Link>
              <Link href={"/faq"} className="border-b-2 border-base_text">
                How we work
              </Link>
              <Link href={"/contact"} className="border-b-2 border-base_text">
                Visit our Factory
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Header;
