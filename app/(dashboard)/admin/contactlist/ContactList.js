import Link from "next/link";
import RemoveContact from "../../../components/RemoveContact";

async function getList() {
  try {
    const res = await fetch("http://localhost:3000/api/contacts", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch orders");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}

export default async function Contacts() {
  const contacts = await getList();

  return (
    <main className="bg-base_color py-10 my-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">Contact List</h1>
      
      <div className="max-w-screen-lg mx-auto px-4">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="bg-base_text mb-6 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center"
          >
            <Link href={`/admin/contactlist/${contact._id}`} className="flex-grow mb-4 sm:mb-0 text-center sm:text-left">
              <div>
                <h5 className="text-xl font-semibold">{contact.fullname}</h5>
                <div>{contact.email}</div>
              </div>
            </Link>
            <div className="flex-shrink-0">
              <RemoveContact id={contact._id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
