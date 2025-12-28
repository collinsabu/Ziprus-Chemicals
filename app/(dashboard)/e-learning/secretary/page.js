// pages/secretary-guide/index.js
import Link from "next/link";

export default function SecretaryGuidePage() {
  return (
    <main className="bg-base_color mb-3">
      <div className="text-white min-h-screen sm:px-6 px-10 py-20">

        <h1 className="text-3xl font-bold text-center text-base_text mb-14">
          Secretary Daily Work Guide
        </h1>

        <p className="text-lg mt-4">
          This page explains the daily duties, expectations, and reporting
          procedures for the position of a <strong>Secretary</strong> at Ziprus
          Chemicals. Anyone visiting this page should be able to read it and
          clearly understand what is required.
        </p>

        <p className="text-lg mt-4">
          If at any point something is not clear, questions are encouraged.
          Proper understanding of duties is very important to our operations.
        </p>

        {/* Resumption Time */}
        <h2 className="text-2xl font-bold mt-10">Resumption Time</h2>
        <p className="text-lg mt-4">
          Work resumes every day at <strong>8:00am, Monday to Saturday</strong>.
          All staff are required to use the clock-in and clock-out system to
          record attendance.
        </p>

        {/* No Production Days */}
        <h2 className="text-2xl font-bold mt-10">Days Without Production</h2>
        <p className="text-lg mt-4">
          Days without factory production are <strong>not holidays</strong>.
          These days should be used for:
        </p>
        <ul className="list-disc list-inside mt-4 text-lg">
          <li>Cleaning the office and store</li>
          <li>Reorganizing factory items</li>
          <li>Visiting or following up with vendors</li>
        </ul>

        {/* Calls & Follow-up */}
        <h2 className="text-2xl font-bold mt-10">Calls and Follow-ups</h2>
        <p className="text-lg mt-4">
          You may be asked to make calls or follow up with vendors or customers.
          When this happens, feedback must be sent through:
        </p>
        <ul className="list-disc list-inside mt-4 text-lg">
          <li>General communication group</li>
          <li>Voice note</li>
          <li>Direct call (for urgent matters)</li>
        </ul>

        <p className="text-lg mt-4">
          Feedback is important so that others can continue from where you
          stopped and everyone remains informed.
        </p>

        {/* Group Usage */}
        <h2 className="text-2xl font-bold mt-10">Use of Communication Groups</h2>
        <p className="text-lg mt-4">
          Different WhatsApp groups are used for different purposes and must be
          used correctly.
        </p>

        <ul className="list-disc list-inside mt-4 text-lg">
          <li><strong>General Communication:</strong> Daily activities with pictures</li>
          <li><strong>Bags Group:</strong> Bag purchases and reports</li>
          <li><strong>Production Group:</strong> Production activities</li>
          <li><strong>Crude Group:</strong> Crude material supplies</li>
          <li><strong>Dispatch Group:</strong> Loaded and dispatched materials</li>
        </ul>

        {/* Reporting */}
        <h2 className="text-2xl font-bold mt-10">Reporting</h2>
        <p className="text-lg mt-4">
          Reporting is very important. It helps reduce errors and ensures proper
          accountability.
        </p>

        {/* Daily Report */}
        <h3 className="text-xl font-bold mt-6">Daily Report</h3>
        <p className="text-lg mt-4">
          A daily report of all activities must be submitted by
          <strong> 6:30pm every day</strong>. This applies from Monday to Sunday.
        </p>

        {/* Production Report */}
        <h3 className="text-xl font-bold mt-6">Production Report</h3>
        <p className="text-lg mt-4">
          This report records all materials produced in a day.
        </p>
        <ul className="list-disc list-inside mt-4 text-lg">
          <li>Cut-off time is <strong>5:30pm</strong></li>
          <li>Anything produced after this counts for the next day</li>
          <li>Even one bag must be recorded</li>
        </ul>

        {/* Salary Report */}
        <h3 className="text-xl font-bold mt-6">Salary Report</h3>
        <p className="text-lg mt-4">
          Salary reports record workers’ payments. Production records and salary
          records must always match.
        </p>

        {/* Crude Stock */}
        <h3 className="text-xl font-bold mt-6">Crude Stock Report</h3>
        <p className="text-lg mt-4">
          This report tracks all crude materials supplied to the factory.
        </p>
        <ul className="list-disc list-inside mt-4 text-lg">
          <li>Record the tonnage of each tipper</li>
          <li>Take pictures before offloading</li>
          <li>Confirm weighbridge tickets</li>
          <li>No tipper should offload without a weighbridge ticket</li>
        </ul>

        {/* Dispatch */}
        <h3 className="text-xl font-bold mt-6">Dispatch Report</h3>
        <p className="text-lg mt-4">
          Every dispatched or loaded truck must be approved through the general
          communication group before loading.
        </p>
        <p className="text-lg mt-4">
          Approval must include customer name and number of bags. Pictures must
          be sent during and after loading.
        </p>

        {/* Bags */}
        <h3 className="text-xl font-bold mt-6">Bags Report</h3>
        <p className="text-lg mt-4">
          All bag purchases must be counted and reported accurately. Errors are
          not allowed.
        </p>
        <ul className="list-disc list-inside mt-4 text-lg">
          <li>Group bags into sets of 100</li>
          <li>Release bags based on production demand</li>
          <li>Return damaged bags to the seller for replacement</li>
        </ul>

        {/* Situation Report */}
        <h3 className="text-xl font-bold mt-6">Situation Report</h3>
        <p className="text-lg mt-4">
          Any repairs or issues must be reported with pictures and explanation
          in the general communication group.
        </p>

        <p className="text-lg mt-4">
          Situation reports can also include progress updates on ongoing work.
        </p>

        {/* Navigation */}
        <div className="flex justify-end mt-10">
          <Link href="/e-learning">
            <p className="bg-base_text text-base_two py-2 px-4 rounded">
              Back to Home
            </p>
          </Link>
        </div>

      </div>
    </main>
  );
}
