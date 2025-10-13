import Link from "next/link";
import RemoveBtn from "../../../components/RemoveBtn";

async function getList() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.zipruschemicals.com/"; // Adjust for production
    const res = await fetch(`${baseUrl}/api/order`, {
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

export default async function OrderList() {
  const orders = await getList();

  return (
    <main className="bg-base_color py-10 mt-5 mt10">
      <h1 className="text-2xl font-semibold text-center mb-10 text-white">Customer Order List</h1>
      
      <div className="max-w-screen-lg mx-auto px-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-base_text mb-6 p-2 sm:p-4 rounded-lg flex  sm:flex-row justify-between items-center"
          >
            <Link href={`/admin/orderlist/${order._id}`} className="flex-grow mb-4 sm:mb-0  sm:text-left">
              <div>
                <h5 className="text-xl font-semibold">{order.name}</h5>
                <div>{order.company}</div>
              </div>
            </Link>
            <div className="flex-shrink-0">
              <RemoveBtn id={order._id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
