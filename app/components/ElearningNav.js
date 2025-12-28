"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ElearningNav() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    await signOut();
    router.push("/login");
  };

  return (
    <nav className="bg-base_two px-4 py-6 sm:py-10 sm:pt-40 pt-40 sm:mt-0">
      <div
        className="
          flex
          flex-col
          gap-3
          sm:flex-row
          sm:flex-wrap
          sm:justify-center
          sm:gap-4
        "
      >
        <Link href="/e-learning">
          <p className="nav-btn">Admin Level 1</p>
        </Link>

        <Link href="/e-learning/adminLevelTwo">
          <p className="nav-btn">Admin Level 2</p>
        </Link>

        <Link href="/e-learning/marketing">
          <p className="nav-btn">Marketing Dept</p>
        </Link>

        <Link href="/e-learning/secretary">
          <p className="nav-btn">Secretary</p>
        </Link>

        <button
          onClick={handleSignOut}
          disabled={isLoggingOut}
          className="nav-btn"
        >
          {isLoggingOut ? "Signing Out..." : "Sign Out"}
        </button>
      </div>
    </nav>
  );
}
