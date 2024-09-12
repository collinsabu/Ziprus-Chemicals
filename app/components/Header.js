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

// general import
import logo from "./logo_white.png";

const navLinks = [
  { name: "Who we are", href: "/about" },
  { name: "How we work", href: "/faq" },
  { name: "Visit our Factory", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(true);
  };

  return (
    <main className="poppins">
      <div className="top-bar flex justify-between items-center px-5 bg-base_two h-10 text-base_text">
        <div>
          <h6 className="font-semibold">+2347121130017</h6>
        </div>
        <div className="socials flex items-center  w-40">
          <div className="flex justify-around  w-20">
            <a href="mailto:" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-lg" />
            </a>
            <a
              href={"https://www.youtube.com/@zipruschemicals828"}
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
          </div>
          <div className="division-line mr-1">|</div>
          <div>
            <a href="http://localhost:3000/weather" className="font-semibold">WEATHER</a>
          </div>
        </div>
      </div>
      <div className="menu-bar bg-base_color h-20 flex  items-center justify-between sm:justify-around px-2 sm:px-20 ">
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
          className="text-white bg-base_color border-2 px-7 py-2 rounded-full cursor-pointer hover:bg-lime-950 ease-in-out duration-300 hidden sm:block "
        >
          Place an Order
        </a>

        <div>
          {" "}
          <HiOutlineMenu
            className="sm:hidden text-white text-4xl mr-4  relative cursor-pointer  "
            onClick={handleClick}
          />
          {showMenu && (
            <div className="mobile-menu w-[50%] bg-base_color h-[30%] sm:hidden text-white flex flex-col gap-5 text-xl pl-4 py-5 z-10 absolute right-0  top-[120px]   ">
              <IoClose
                onClick={() => setShowMenu(false)}
                className="cursor-pointer text-2xl"
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
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
