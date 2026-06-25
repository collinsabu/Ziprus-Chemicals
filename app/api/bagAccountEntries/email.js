import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBagAccountEmail(entry) {
  try {
    await resend.emails.send({
      from: "Ziprus Reports <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: `📦 New Bag Account Entry - ${entry.date}`,

      html: `
      <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">

        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb;">

          <!-- HEADER -->
          <div style="background:#035145;padding:20px;color:white;text-align:center;">
            <h2 style="margin:0;font-size:20px;">Ziprus Chemical</h2>
            <p style="margin:5px 0 0;font-size:13px;opacity:0.9;">
              Bag Account Entry Notification
            </p>
          </div>

          <!-- BODY -->
          <div style="padding:20px;">

            <div style="background:#ecfdf5;border-left:5px solid #0CC76D;padding:12px;margin-bottom:15px;border-radius:6px;">
              <strong>📅 Date:</strong> ${entry.date} <br/>
              <strong>⏰ Time:</strong> ${entry.time}
            </div>

            <table style="width:100%;border-collapse:collapse;font-size:14px;">

              <tr>
                <td style="padding:10px;background:#f9fafb;"><strong>Purchase</strong></td>
                <td style="padding:10px;">${entry.purchase}</td>
              </tr>

              <tr>
                <td style="padding:10px;background:#f9fafb;"><strong>Used</strong></td>
                <td style="padding:10px;">${entry.used}</td>
              </tr>

              <tr>
                <td style="padding:10px;background:#f9fafb;"><strong>Balance</strong></td>
                <td style="padding:10px;"><b style="color:#035145;">${entry.balance}</b></td>
              </tr>

            </table>

            <!-- COMMENT -->
            <div style="margin-top:20px;">
              <h3 style="font-size:14px;color:#111827;margin-bottom:8px;">
                📝 Comment
              </h3>
              <div style="background:#f3f4f6;padding:12px;border-radius:6px;color:#374151;">
                ${entry.comment || "No comment provided"}
              </div>
            </div>

          </div>

          <!-- FOOTER -->
          <div style="background:#111827;color:white;text-align:center;padding:12px;font-size:12px;">
            Ziprus Chemical Internal Reporting System
          </div>

        </div>

      </div>
      `,
    });
  } catch (err) {
    console.error("Bag Account Email Error:", err);
  }
}