// pages/e-learning/admin-dashboard-guide.js
import Link from 'next/link';

export default function AdminDashboardGuidePage() {
  return (
    <div className="bg-base_color text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center">Admin Dashboard Guide - Level One</h2>
      <p className="text-lg mt-4">
        Welcome to this e-learning module, designed to help you navigate and effectively use the Admin Dashboard at Level One. In this section, we'll briefly discuss the purpose of the various tabs and share best practices for completing and submitting each report.
      </p>
      
      <div className="my-6">
        <p>I will insert image here</p>
      </div>

      <h3 className="text-xl font-bold mt-6">Report Tab Overview</h3>
      <p className="text-lg mt-4">
        The Report tab contains several buttons that lead to different reporting systems relevant to our business operations. As a Level One admin, your access may be restricted to specific routes within the web application, ensuring you only interact with necessary areas. Below is a list of available report systems within this tab. We will discuss each in detail, focusing on their purpose and how to fill them out correctly.
      </p>

      <h3 className="text-xl font-bold mt-6">Available Report Systems</h3>
      <ul className="list-disc pl-6 text-lg mt-4">
        <li>Crude Report</li>
        <li>Bag Account</li>
        <li>Production Report</li>
        <li>Despatch Report</li>
        <li>Wages Account</li>
        <li>Light Usage</li>
        <li>Morning Report</li>
        <li>Situation Report</li>
        <li>Daily Report</li>
      </ul>

      <h4 className="text-lg font-bold mt-6">1. Crude Report</h4>
      <p className="text-lg mt-4">
        The Crude Report is used to document all crude materials supplied to the factory. Key fields include:
      </p>
      <ul className="list-disc pl-6 text-lg mt-2">
        <li><strong>Material Kind:</strong> Specifies whether the material is Animal Feed, Glass, or White Calcite for Texcoat.</li>
        <li><strong>Material Type:</strong> Indicates whether the material is Boulder or Chipping.</li>
        <li><strong>Vehicle Number:</strong> The identification number of the delivery vehicle.</li>
        <li><strong>Driver Name & Number:</strong> The name and contact number of the driver.</li>
        <li><strong>Tonnage:</strong> The weight of the materials delivered (required field). If the tipper hasn’t been weighed, enter '0' and provide details in the comments.</li>
        <li><strong>Comment:</strong> Any additional details or observations.</li>
      </ul>
      <p className="text-lg mt-2">
        <strong>How to Fill the Crude Report:</strong> We've included an example image of a completed Crude Report within this module. Use this as a reference to ensure accurate and complete entries, keeping in mind that reports should reflect the actual situation.
      </p>

      <h4 className="text-lg font-bold mt-6">2. Bag Account</h4>
      <p className="text-lg mt-4">
        The Bag Account tracks daily bag purchases, usage, and balances to help manage stock levels. 
      </p>
      <ul className="list-disc pl-6 text-lg mt-2">
        <li><strong>Purchase:</strong> The number of bags bought.</li>
        <li><strong>Usage:</strong> The number of bags used.</li>
        <li><strong>Balance:</strong> The remaining stock of bags.</li>
      </ul>
      <p className="text-lg mt-2">
        This report should be submitted daily by 6 PM. If additional bags are purchased after this time, a new report should be created.
      </p>
      <p className="text-lg mt-2">
        <strong>How to Fill the Bag Account Report:</strong> Refer to the provided example image to guide you through completing this report accurately. Adjust the entries based on actual data.
      </p>

      <h4 className="text-lg font-bold mt-6">3. Production Report</h4>
      <p className="text-lg mt-4">
        The Production Report keeps a daily record of materials produced. Important fields include:
      </p>
      <ul className="list-disc pl-6 text-lg mt-2">
        <li><strong>Material Type:</strong> The type of materials produced.</li>
        <li><strong>Total Produce:</strong> The total quantity produced within the reporting period.</li>
        <li><strong>Paid:</strong> The amount paid out for produced materials.</li>
        <li><strong>Balance:</strong> The remaining unpaid amount, if any.</li>
      </ul>
      <p className="text-lg mt-2">
        This report is typically submitted at 6 PM, with the next entry due at 7 AM the following day.
      </p>
      <p className="text-lg mt-2">
        <strong>How to Fill the Production Report:</strong> An example image is provided to help you accurately complete the report. Ensure that your entries are reflective of the day's production.
      </p>

      <h4 className="text-lg font-bold mt-6">4. Despatch Report</h4>
      <p className="text-lg mt-4">
        The Despatch Report records all finished materials dispatched from the factory. Key fields include:
      </p>
      <ul className="list-disc pl-6 text-lg mt-2">
        <li><strong>Material Type:</strong> The type of material dispatched.</li>
        <li><strong>Driver Name & Vehicle Number:</strong> Details of the driver and vehicle used for dispatch.</li>
        <li><strong>Destination:</strong> The customer’s name and delivery address.</li>
        <li><strong>Number Loaded:</strong> The number of bags dispatched.</li>
        <li><strong>Balance:</strong> Remaining stock after dispatch.</li>
        <li><strong>Comment:</strong> Additional notes.</li>
      </ul>
      <p className="text-lg mt-2">
        <strong>How to Fill the Despatch Report:</strong> Refer to the provided example for guidance on accurately filling out the report. Adjust the details according to the actual dispatch activity.
      </p>

      <h4 className="text-lg font-bold mt-6">5. Wages Account</h4>
      <p className="text-lg mt-4">
        The Wages Account tracks payments made to workers, particularly over the weekend or when production payments are made during the week. Key fields include:
      </p>
      <ul className="list-disc pl-6 text-lg mt-2">
        <li><strong>Worker’s Name:</strong> The name of the worker or group receiving payment.</li>
        <li><strong>Bag:</strong> The total number of bags paid out.</li>
        <li><strong>Material Type:</strong> The type of material for which payment is made.</li>
        <li><strong>Paid:</strong> The amount paid.</li>
        <li><strong>Balance:</strong> Any remaining amount owed.</li>
        <li><strong>Comment:</strong> Additional details.</li>
      </ul>
      <p className="text-lg mt-2">
        <strong>How to Fill the Wages Account Report:</strong> An example is included for your reference. Use it to guide you in accurately completing the report based on the payment details.
      </p>

      <h4 className="text-lg font-bold mt-6">6. Light Usage</h4>
      <p className="text-lg mt-4">
        The Light Usage report monitors electricity consumption, helping us optimize usage. This report is submitted every four hours. Key fields include:
      </p>
      <ul className="list-disc pl-6 text-lg mt-2">
        <li><strong>Number of Bags:</strong> The quantity of bags processed during the four-hour period.</li>
        <li><strong>Light:</strong> Record whether there was uninterrupted power, or if there were outages.</li>
        <li><strong>Comment:</strong> Any additional challenges or observations.</li>
      </ul>
      <p className="text-lg mt-2">
        <strong>How to Fill the Light Usage Report:</strong> Use the provided example image as a reference to ensure accurate reporting. Adjust your entries based on the actual power usage and any issues encountered.
      </p>

      <h4 className="text-lg font-bold mt-6">7. Morning Report</h4>
      <p className="text-lg mt-4">
        The Morning Report outlines your planned activities for the day and must be submitted before 7 AM. Key fields include:
      </p>
      <ul className="list-disc pl-6 text-lg mt-2">
        <li><strong>Planned Activities:</strong> A list of tasks you intend to complete.</li>
        <li><strong>Summary Note:</strong> Potential challenges and proposed solutions.</li>
      </ul>
      <p className="text-lg mt-2">
        <strong>How to Fill the Morning Report:</strong> Refer to the provided example to complete this report. Ensure that your plans are clearly outlined and any anticipated challenges are noted.
      </p>

      <h4 className="text-lg font-bold mt-6">8. Situation Report</h4>
      <p className="text-lg mt-4">
        The Situation Report provides an update on ongoing activities and must be submitted between 12:00 PM and 1:00 PM daily. Key fields include:
      </p>
      <ul className="list-disc pl-6 text-lg mt-2">
        <li><strong>Challenge:</strong> Any issues encountered during operations.</li>
        <li><strong>Solution:</strong> Proposed solutions to these challenges.</li>
        <li><strong>Employee Name:</strong> Your name.</li>
      </ul>
      <p className="text-lg mt-2">
        <strong>How to Fill the Situation Report:</strong> An example is provided to guide you. Accurately fill in the report based on the current situation and challenges.
      </p>

      <h4 className="text-lg font-bold mt-6">9. Daily Report</h4>
      <p className="text-lg mt-4">
        The Daily Report summarizes the day’s activities and is mandatory for all staff. It must be submitted by 7:30 PM daily. Key fields include:
      </p>
      <ul className="list-disc pl-6 text-lg mt-2">
        <li><strong>Ideas/Suggestions:</strong> Propose ideas to help achieve and exceed targets.</li>
        <li><strong>Challenges:</strong> Record any challenges faced during the day.</li>
        <li><strong>Summary Note:</strong> A summary of the day’s events.</li>
        <li><strong>Employee Name:</strong> Your name.</li>
      </ul>
      <p className="text-lg mt-2">
        <strong>How to Fill the Daily Report:</strong> Use the provided example as a guide. Ensure that your summary accurately reflects the day's activities and challenges.
      </p>

      <p className="text-lg mt-6">
        This guide is designed to provide you with the essential knowledge to effectively use the Admin Dashboard. Always tailor your reports to the specific circumstances at hand and refer to the provided examples when in doubt.
      </p>

      <div className="flex justify-between mt-8">
        <Link href="/e-learning">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">Previous Page</p>
        </Link>
        <Link href="/e-learning/page4">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">Next Page</p>
        </Link>
      </div>
    </div>
  );
}
