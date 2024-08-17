"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for the hamburger menu
import { signOut } from "next-auth/react";

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

  return (
    <div className="menu-bar bg-base_color h-20 flex items-center justify-between px-4 md:px-20 mt-2 relative">
      <div>
        <Link href={"/admin"} className="admin-nav text-white text-xl">
          Admin Home
        </Link>
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
      </nav>
    </div>
  );
}
