"use client";

import Link from "next/link";

export default function AdminLevelTwo() {
  return (
    <main className="bg-base_color xt p-6 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-6 text-base_text">Admin-Level Two E-Learning Overview</h1>
      <section className="mb-8">
        <p className="text-lg">
          Before beginning this Admin-Level Two e-learning course, it is essential that you have completed the Admin-Level One course.
          You are expected to have a comprehensive understanding of the full web application. Please proceed only after successfully
          completing the Admin-Level One course.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold">Exclusive Access for Admin Level Two</h2>
        <p className="text-lg mt-4">
          The first route that is exclusively accessible to Admin Level Two users is the Loading/Payment route. The details of the Loading route were thoroughly covered in the Admin-Level One e-learning course. Please refer back to that course for more information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold">Customer Payment Report</h2>
        <p className="text-lg mt-4">
          The Customer Payment Report is a critical feature that tracks payments made by customers for the materials supplied to them.
          This report is vital for the system to accurately calculate each customer's balance. Key fields in the payment record include:
        </p>

        <ul className="list-disc ml-8 mt-4">
          <li className="text-lg">
            <strong>Customer Unique ID:</strong> This ID is used by the system to identify each customer. It is crucial that the Customer Unique ID is unique and case-sensitive. 
          </li>
          <li className="text-lg">
            <strong>Payment Amount:</strong> This field records the exact amount paid by the customer.
          </li>
          <li className="text-lg">
            <strong>Summary Note:</strong> Enter all relevant details here, including your name.
          </li>
        </ul>

        <p className="text-lg mt-4">
          Example Unique ID: If the company name is "Roland Paint" located in "Lagos" with a unique number "868", the resulting Unique ID will be "ROLLAG868".
        </p>

        <p className="text-lg mt-4">
          <strong>Note:</strong> A Customer Unique ID is created only once and must differ from all others.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold">View Payment and Loading</h2>
        <p className="text-lg mt-4">
          This route allows you to view payments and loading details submitted through the customer loading and payment forms. For an
          in-depth explanation of how the list and details pages function, please refer to the Admin-Level One e-learning course.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold">Balance Overview</h2>
        <p className="text-lg mt-4">
          The Balance route displays balance records for Wages, Crude, Bags, and Customers. Let’s discuss each in detail:
        </p>

        <ul className="list-disc ml-8 mt-4">
          <li className="text-lg">
            <strong>Wages:</strong> This route monitors production in relation to payment. It shows the total material produced, the payments made, and the remaining balance.
          </li>
          <li className="text-lg">
            <strong>Crude:</strong> The crude balance account is measured in tons. It shows the total purchased materials in tons, total dispatched materials in tons, and the balance between the crude supplied and crude dispatched.
          </li>
          <li className="text-lg">
            <strong>Bags:</strong> This account displays the total bags purchased, total materials produced, and any remaining bags. If no bags remain, it will display zero.
          </li>
          <li className="text-lg">
            <strong>Customer:</strong> The customer's balance account calculates the total materials dispatched to a customer, the total payments made, and the customer’s remaining balance. A menu navbar is available to navigate through each customer’s account, and it updates as new customers are added.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold">Important Note</h2>
        <p className="text-lg mt-4">
          Timely submission of reports is crucial as they are used to calculate various balance records. To ensure accuracy, reports
          should always be double-checked before submission.
        </p>
      </section>

      <div className="flex justify-between mt-8">
        <Link href="/e-learning/adminLevelTwo">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">Previous Page</p>
        </Link>
        <Link href="/e-learning">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">E-Learning Home</p>
        </Link>
      </div>
    </main>
  );
}
