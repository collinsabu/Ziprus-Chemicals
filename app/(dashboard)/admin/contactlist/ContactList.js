import Link from "next/link";
import RemoveContact from "../../../components/RemoveContact";

async function getList() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://www.zipruschemicals.com/";
    const res = await fetch(`${baseUrl}/api/contacts`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch contacts");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
}

// Format date and time like your order list
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default async function Contacts() {
  const contacts = await getList();

  return (
    <main className="bg-base_color py-10 my-10 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">
        Customer Contact List
      </h1>

      <div className="max-w-screen-lg mx-auto px-4 space-y-4">
        {contacts.length === 0 && (
          <p className="text-center text-gray-300">No contacts found.</p>
        )}

        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="bg-base_text mb-6 p-4 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center gap-3 shadow-md hover:shadow-lg transition"
          >
            {/* Left side - Name, Email, Date */}
            <Link
              href={`/admin/contactlist/${contact._id}`}
              className="flex flex-col sm:flex-row sm:items-center sm:gap-6 flex-grow"
            >
              <div>
                <h5 className="text-xl font-semibold text-base_color">
                  {contact.fullname}
                </h5>
                <div className="text-sm text-base_color/80">{contact.email}</div>
              </div>

              {contact.createdAt && (
                <div className="mt-2 sm:mt-0">
                  <p className="bg-white/20 rounded-full px-3 py-1 text-xs sm:text-sm">
                    📅 {formatDate(contact.createdAt)}
                  </p>
                </div>
              )}
            </Link>

            {/* Right side - Delete button */}
            <div className="flex justify-end sm:justify-center flex-shrink-0">
              <RemoveContact id={contact._id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
