import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendReportEmail(report) {
  try {
    await resend.emails.send({
      from: "Ziprus Reports <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: `New Staff Report - ${report.staffName}`,
      html: `
        <div style="font-family: Arial; padding: 10px;">
          <h2>📢 New Staff Report Submitted</h2>

          <p><strong>Staff:</strong> ${report.staffName}</p>
          <p><strong>Department:</strong> ${report.department}</p>
          <p><strong>Title:</strong> ${report.title}</p>

          <hr/>

          <p>${report.report}</p>

          <br/>

          <a href="https://zipruschemicals.com/dashboard/reports/${report._id}">
            View Full Report
          </a>
        </div>
      `,
    });
  } catch (err) {
    console.error("Email error:", err);
  }
}