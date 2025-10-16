import Link from "next/link";
import RemoveBtn from "../../../components/RemoveBtn";

async function getList() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://www.zipruschemicals.com/";
    const res = await fetch(`${baseUrl}/api/order`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch orders");

    return await res.json();
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}

export default async function OrderList() {
  const orders = await getList();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <main className="bg-base_color py-10 mt-5 min-h-screen">
      <h1 className="text-2xl font-semibold text-center mb-10 text-white">
        Customer Order List
      </h1>

      <div className="max-w-screen-lg mx-auto px-4 space-y-4">
        {orders.length === 0 && (
          <p className="text-center text-gray-300">No orders found.</p>
        )}

        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-base_text rounded-lg p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3 shadow-md hover:shadow-lg transition"
          >
            {/* Left side - Name, Company, Date */}
            <Link
              href={`/admin/orderlist/${order._id}`}
              className="flex flex-col sm:flex-row sm:items-center sm:gap-6 flex-grow"
            >
              <div>
                <h5 className="text-xl font-semibold text-base_color">
                  {order.name}
                </h5>
                <p className="text-sm text-base_color/80">{order.company}</p>
              </div>

              <div className="mt-2 sm:mt-0">
                <p className="bg-white/20 rounded-full px-3 py-1 text-xs sm:text-sm">
                  📅 {formatDate(order.createdAt)}
                </p>
              </div>
            </Link>

            {/* Right side - Delete button */}
            <div className="flex justify-end sm:justify-center flex-shrink-0">
              <RemoveBtn id={order._id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
