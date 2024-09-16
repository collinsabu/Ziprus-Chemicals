// src/app/blog/page.js

"use client"; // Add this to ensure it's a Client Component

export default function BlogUnderConstruction() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base_color">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Page Under Construction</h1>
        <p className="text-lg text-white mb-6">
          Our blog is currently being developed. Stay tuned for updates!
        </p>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-base_text animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2v2m6.364 1.636l-1.414 1.414m4.95 4.95h-2M18 12l-1.636 1.636M12 20v2m-6.364-1.636l1.414-1.414M2 12h2M6.364 6.364L7.778 4.95"
            />
          </svg>
        </div>
        <button
          onClick={() => window.history.back()}
          className="mt-6 bg-base_text text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-950"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
