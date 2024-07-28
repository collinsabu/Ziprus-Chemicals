"use client"

import { useRouter } from 'next/navigation';

const Forbidden = () => {
   const router = useRouter();
   
  const handleGoBack = () => {
 
    router.push('/admin');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base_two text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-base_text mb-4">403 - Forbidden</h1>
      <p className="text-lg text-white mb-6">
        You do not have permission to access this page.
      </p>
      <button
        onClick={handleGoBack}
        className="bg-base_text text-black font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-300 ease-in-out"
      >
        Go Back to Admin
      </button>
    </div>
  );
};

export default Forbidden;
