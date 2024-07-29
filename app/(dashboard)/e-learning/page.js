// pages/e-learning/index.js
import Link from 'next/link';
import Image from 'next/image';

/* Images Link */

import Navimage from "./adminnavbar.PNG"

export default function ELearningHomePage() {
  return (
   <main className="bg-base_color  mb-3">
    <div className=" text-white min-h-screen sm:px-6 px-10 py-20">
      <h1 className="text-3xl font-bold text-center text-base_text mb-14">How to Use Ziprus Chemical Website Admin Dashboard</h1>
      <p className="text-lg mt-4">
        Hi, this e-learning covers how to navigate and use the Ziprus Chemicals admin dashboard level-one.
      </p>
      <p className="text-lg mt-4">
        Firstly, you must know that the website has two levels of admin with different access roles: Admin Level 1 and Admin Level 2.
      </p>
      <p className="text-lg mt-4">
        Both levels of admin require the same link to get started: 
        <a href="https://zipruschem.com" className="text-base_text underline">https://zipruschem.com</a>. 
        Enter the link on your browser and press Enter on your keyboard to be taken to the admin welcome page. Here, you will be greeted with the admin NavBar, an OrderList, and the public footer.
      </p>
      <p className="text-lg mt-4">
        <strong>Note:</strong> Images have been included in this e-learning to help you follow along and understand easily.
      </p>
      <h2 className="text-2xl font-bold mt-8">Navbar Links</h2>
      <ul className="list-disc list-inside mt-4">
        <li>Contact List</li>
        <li>Report</li>
        <li>View Report</li>
        <li>Loading/Payment</li>
        <li>View Load/Payment</li>
        <li>Balance</li>
        <li>Sign Out</li>
      </ul>
      <div className="my-6">
         <h1 className='my-4'>Admin Navbar Image Sample</h1>
        <Image src={Navimage} alt="Admin Navbar" layout="responsive" width={700} height={475} />
      </div>
      <p className="text-lg mt-4">
        Please note that as an Admin Level 1, you don't have access to some of these pages. When you try to access them, you will be redirected to the forbidden page indicating that you don't have the authorization or permission to access that page.
      </p>
      <h2 className="text-2xl font-bold mt-8">Admin Welcome Page</h2>
      <p className="text-lg mt-4">
        The admin welcome page includes the admin NavBar, the public Header, the OrderList, and the public footer. In this e-learning class, we will focus on the Admin NavBar and the OrderList. Let's start with the OrderList.
      </p>
      <h3 className="text-xl font-bold mt-6">OrderList</h3>
      <p className="text-lg mt-4">
        The OrderList is a list of all orders submitted through the public homepage order form visible to the public section of the website. Each list represents a separate order placed using the order form. To see the details of an order, click on a list. The details of the order will pop up.
      </p>
      <div className="my-6">
        <p>I will insert image here</p>
      </div>
      <h3 className="text-xl font-bold mt-6">Deleting an OrderList</h3>
      <p className="text-lg mt-4">
        As an Admin Level 1, the delete button attached to every OrderList is visible to you. However, before deleting a list, you must seek authorization from a Level 2 admin via email. An order should not be deleted unless it has been supplied and confirmed paid for in full by the customer.
      </p>
      <div className="flex justify-end mt-8">
        <Link href="/e-learning/page2">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">Next Page</p>
        </Link>
      </div>
    </div>
    </main>
  );
}
