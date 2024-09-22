"use client"; // Ensure this is a client-side component
import { useEffect, useState } from "react";

export default function AdminApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch applications on component mount
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("/api/jobApplications");
        const data = await res.json();

        if (res.ok) {
          setApplications(data);
        } else {
          setError(data.error || "Error fetching applications.");
        }
      } catch (err) {
        setError("Failed to fetch applications.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="min-h-screen bg-base_color flex flex-col items-center p-6 my-10">
      <h1 className="text-4xl font-bold mb-8 text-base_text">Job Applications</h1>

      {loading ? (
        <p>Loading applications...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <table className="w-full max-w-5xl bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-base_two text-white">
              <th className="py-3 px-6">Full Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Phone</th>
              <th className="py-3 px-6">Position</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.length > 0 ? (
              applications.map((application) => (
                <tr key={application._id} className="border-b">
                  <td className="py-3 px-6">{application.fullName}</td>
                  <td className="py-3 px-6">{application.email}</td>
                  <td className="py-3 px-6">{application.phone}</td>
                  <td className="py-3 px-6">{application.position}</td>
                  <td className="py-3 px-6">
                    <a
                      href={`/api/jobApplications/${application._id}/cv`}
                      className="text-blue-600 hover:underline"
                    >
                      Download CV
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-3">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
