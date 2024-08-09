// pages/e-learning/balance.js
import Link from 'next/link';

export default function BalancePage() {
  return (
    <div className="bg-base_color text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center">Balance</h2>
      <p className="text-lg mt-4">
        The Balance section is the final link in the Admin menu. This route displays the calculations for all customer balances. However, as a Level One admin, you do not have access to this page.
      </p>
      
      <h3 className="text-xl font-bold mt-6">Requesting Access</h3>
      <p className="text-lg mt-4">
        If you require access to any records that are not available to you, please send an email to the Level Two administrators requesting access. Additionally, if you have any concerns or questions regarding this e-learning module, do not hesitate to reach out to a Level Two admin for assistance.
      </p>

      <h3 className="text-xl font-bold mt-6">E-learning Module Updates</h3>
      <p className="text-lg mt-4">
        Please note that this e-learning is still under review and improvement to ensure you gain the most comprehensive understanding of how to navigate the admin aspects of our web application as a Level One admin.
      </p>

      <div className="flex justify-between mt-8">
        <Link href="/e-learning/page5">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">Previous Page</p>
        </Link>
        <Link href="/e-learning/page6">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">Next Page</p>
        </Link>
      </div>
    </div>
  );
}
