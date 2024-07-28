"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for the hamburger menu
import { signOut } from "next-auth/react"; // Importing signOut function from next-auth

const navLinks = [
  { name: "Orders", href: "/admin" },
  { name: "Contacts", href: "/admin/contactlist" },
  { name: "Report", href: "/report" },
  { name: "View Report", href: "/viewreport" },
  { name: "Loading/Payment", href: "/loadingandpayment" },
  { name: "View Load/Payment", href: "/viewloadingandpayment" },
  { name: "Balance", href: "/balance" },
];

export default function AdminHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="menu-bar bg-base_color h-20 flex items-center gap-[100px] sm:gap-[190px] px-6 md:px-20 mt-2 relative">
      <div>
        <h1 className="admin-nav text-white text-xl">Admin Dashboard</h1>
      </div>
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>
      <nav
        className={`nav_links flex-col md:flex-row md:flex items-center gap-4 md:gap-5 ${
          isMenuOpen ? "flex" : "hidden"
        } absolute md:static top-full left-0 w-full md:w-auto bg-base_color md:bg-transparent p-6 md:p-0`}
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
          onClick={() => signOut({ callbackUrl: "/login" })} // Redirect to home after sign out
          className="text-white text-lg tracking-wide border-b-2 border-transparent pb-1"
        >
          Sign Out
        </button>
      </nav>
    </div>
  );
}
