import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendDailyReportEmail(report) {
  try {
    await resend.emails.send({
      from: "Ziprus Reports <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: `📋 New Daily Report - ${report.employeeName} (${report.date})`,

      html: `
      <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">

        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb;">

          <!-- HEADER (same bag style) -->
          <div style="background:#035145;padding:20px;color:white;text-align:center;">
            <h2 style="margin:0;font-size:20px;">Ziprus Chemical</h2>
            <p style="margin:5px 0 0;font-size:13px;opacity:0.9;">
              Daily Report Notification
            </p>
          </div>

          <!-- BODY -->
          <div style="padding:20px;">

            <!-- DATE / TIME BOX -->
            <div style="background:#ecfdf5;border-left:5px solid #0CC76D;padding:12px;margin-bottom:15px;border-radius:6px;">
              <strong>📅 Date:</strong> ${report.date} <br/>
              <strong>⏰ Time:</strong> ${report.time}
            </div>

            <!-- EMPLOYEE -->
            <div style="margin-bottom:15px;">
              <strong>👤 Employee:</strong> ${report.employeeName}
            </div>

            <!-- TABLE -->
            <table style="width:100%;border-collapse:collapse;font-size:14px;">

              <tr>
                <td style="padding:10px;background:#f9fafb;"><strong>Ideas / Suggestions</strong></td>
              </tr>
              <tr>
                <td style="padding:10px;color:#374151;">
                  ${report.ideas}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;background:#f9fafb;"><strong>Challenges</strong></td>
              </tr>
              <tr>
                <td style="padding:10px;color:#374151;">
                  ${report.challenges}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;background:#f9fafb;"><strong>Summary Note</strong></td>
              </tr>
              <tr>
                <td style="padding:10px;color:#374151;">
                  ${report.summaryNote}
                </td>
              </tr>

            </table>

          </div>

          <!-- BUTTON -->
          <div style="text-align:center;padding-bottom:20px;">

            <a href="${process.env.NEXT_PUBLIC_APP_URL}/viewreport/dailyReportsList"
              style="
                display:inline-block;
                background:#035145;
                color:white;
                text-decoration:none;
                padding:12px 25px;
                border-radius:8px;
                font-weight:bold;
                font-size:14px;
              ">
              View Report Dashboard
            </a>

          </div>

          <!-- FOOTER (same system style) -->
          <div style="background:#111827;color:white;text-align:center;padding:12px;font-size:12px;">
            Ziprus Chemical Internal Reporting System
          </div>

        </div>

      </div>
      `,
    });
  } catch (error) {
    console.error("Daily Report Email Error:", error);
  }
}