"use client";

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ElearningNav() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    await signOut();
    router.push('/login');
  };

  return (
    <nav className="bg-base_two p-4 mt-3">
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
        <Link href="/e-learning">
          <p className="bg-base_text text-base_two py-2 px-4 rounded mb-2 sm:mb-0">Admin Level 1</p>
        </Link>
        <Link href="/e-learning/adminLevelTwo">
          <p className="bg-base_text text-base_two py-2 px-4 rounded mb-2 sm:mb-0">Admin Level 2</p>
        </Link>
        <Link href="/e-learning/marketing">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">Marketing Dept</p>
        </Link>
        <button
          onClick={handleSignOut}
          className="bg-base_text text-base_two py-2 px-4 rounded mb-2 sm:mb-0"
          disabled={isLoggingOut}
        >
          {isLoggingOut ? 'Signing Out...' : 'Sign Out'}
        </button>
      </div>
    </nav>
  );
}
