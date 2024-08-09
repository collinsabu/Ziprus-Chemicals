// pages/e-learning/view-report.js
import Link from 'next/link';

export default function ViewReportPage() {
  return (
    <div className="bg-base_color text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center">View Report</h2>
      <p className="text-lg mt-4">
        The View Report tab, located in the Admin Header, allows you to access and review all report records that have been submitted over time. This tab includes a submenu with links to the various report systems discussed in the Report section.
      </p>

      <h3 className="text-xl font-bold mt-6">Key Features of the View Report Tab</h3>
      <h4 className="text-lg font-bold mt-4">Welcome List:</h4>
      <p className="text-lg mt-4">
        When you select a report type from the submenu, you will be greeted with a list of all reports submitted for the current month. This list provides a brief summary of each report. To view more details, simply click on a specific report, which will then expand to show the complete information.
      </p>
      <div className="my-6">
        <p>I will insert image here</p>
        <p>(Here is an image of the Welcome List. For this example, we have used the Crude Report List.)</p>
      </div>

      <div className="my-6">
        <p>I will insert image here</p>
        <p>(Here is an image of a Crude Report details page after selecting an entry from the list.)</p>
      </div>

      <h4 className="text-lg font-bold mt-4">List Navigation Arrows:</h4>
      <p className="text-lg mt-4">
        To navigate between different months, use the Previous Month and Next Month buttons located at the top of the list page.
      </p>
      <p className="text-lg mt-4">
        When you first access a report list, it displays the most recent month by default. To view reports from earlier months, click the Previous Month button. Similarly, use the Next Month button to move forward to more recent records.
      </p>

      <div className="flex justify-between mt-8">
        <Link href="/e-learning/page3">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">Previous Page</p>
        </Link>
        <Link href="/e-learning/page5">
          <p className="bg-base_text text-base_two py-2 px-4 rounded">Next Page</p>
        </Link>
      </div>
    </div>
  );
}
