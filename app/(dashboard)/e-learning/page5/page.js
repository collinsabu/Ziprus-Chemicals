// pages/e-learning/loading-records.js
import Link from 'next/link';

export default function LoadingRecordsPage() {
  return (
    <div className="bg-base_color text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center">Loading Records</h2>
      <p className="text-lg mt-4">
        The Loading record is distinct from the Despatch record. While the Despatch record logs all materials sent out from the factory at a loading point, the Loading record specifically tracks materials that have been received, weighed, and offloaded by the customer.
      </p>

      <h3 className="text-xl font-bold mt-6">Fields in Loading Records</h3>
      <ul className="list-disc list-inside text-lg mt-4">
        <li><strong>Vehicle Number:</strong> The registration number of the vehicle that transported the materials.</li>
        <li><strong>Customer Unique ID:</strong> A unique identifier for each customer in the system. As a Level One Administrator, it's crucial to know these IDs. If you're uncertain about any, you should consult a Level One Admin.</li>
        <li><strong>Material Type:</strong> The specific type of material that was delivered.</li>
        <li><strong>Tonnage:</strong> The weight of the material delivered.</li>
        <li><strong>Price by Tonnage:</strong> The cost per ton of the material.</li>
        <li><strong>Location:</strong> The destination where the material was delivered.</li>
        <li><strong>Summary Note:</strong> Any additional notes or summaries regarding the loading.</li>
      </ul>

      <div className="my-6">
        <p>I will insert image here</p>
      </div>

      <h3 className="text-xl font-bold mt-6">Additional Notes</h3>
      <p className="text-lg mt-4">
        Some elements of this process were previously explained and are not reiterated here.
      </p>

      <h2 className="text-3xl font-bold text-center mt-10">Payment Records</h2>
      <h3 className="text-xl font-bold mt-6">Purpose</h3>
      <p className="text-lg mt-4">
        Payment records track the payments made by customers for the materials supplied to them. These records are crucial for the system to calculate each customer's balance.
      </p>

      <h3 className="text-xl font-bold mt-6">Access Restrictions</h3>
      <p className="text-lg mt-4">
        As a Level One Administrator, you do not have access to the payment records. Attempting to access this route will redirect you to a forbidden page.
      </p>

      <h2 className="text-3xl font-bold text-center mt-10">View Loading/Payment Route</h2>
      <h3 className="text-xl font-bold mt-6">Purpose</h3>
      <p className="text-lg mt-4">
        This route provides a list and detailed view of every customer loading and payment record submitted.
      </p>

      <h3 className="text-xl font-bold mt-6">Access Restrictions</h3>
      <p className="text-lg mt-4">
        Like the Payment route, the View Loading/Payment route is not accessible to Level One Administrators. Any attempt to access it will result in being redirected to a forbidden page.
      </p>

      <div className="flex justify-between mt-8">
        <Link href="/e-learning/page4">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">Previous Page</p>
        </Link>
        <Link href="/e-learning/page6">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">Next Page</p>
        </Link>
      </div>
    </div>
  );
}
