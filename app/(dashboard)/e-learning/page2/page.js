// pages/e-learning/page2.js
import Link from 'next/link';

export default function ContactListPage() {
  return (
    <div className="bg-base_color text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center">Contact List</h2>
      <p className="text-lg mt-4">
        The contact list page displays a list of contact information entered by visitors who visited the website to make inquiries. Each list contains detailed information about that contact. To see the details, click on a list. The details will open up for viewing.
      </p>
      <div className="my-6">
        <p>I will insert image here</p>
      </div>
      <h3 className="text-xl font-bold mt-6">Deleting a Contact List</h3>
      <p className="text-lg mt-4">
        Similar to the OrderList, you have the option to delete contacts as an Admin Level 1, but you must seek authorization to do so. A contact list should not be deleted until the inquiries are fully responded to.
      </p>
      <p className="text-lg mt-4">
        As an Admin Level 1, it is a priority to check both the contact list and the order list daily to process or escalate any issues if the resolution is beyond your scope.
      </p>
      <div className="my-6">
        <p>I will insert image here</p>
      </div>
      <div className="flex justify-between mt-8">
        <Link href="/e-learning">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">Previous Page</p>
        </Link>
        <Link href="/e-learning/page3">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">Next Page</p>
        </Link>
      </div>
    </div>
  );
}
