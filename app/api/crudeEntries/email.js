import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendCrudeEntryEmail(record) {
  try {
    await resend.emails.send({
      from: "Ziprus Quarry System <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: `⛏️ Crude Stock Entry - ${record.materialKind} | ${record.materialType}`,

      html: `
      <div style="font-family:Arial,sans-serif;background:#0b1220;padding:25px;">

        <div style="max-width:650px;margin:auto;background:#111827;border-radius:14px;overflow:hidden;border:1px solid #1f2937;">

          <!-- HEADER -->
          <div style="background:#0CC76D;padding:18px;text-align:center;">
            <h2 style="margin:0;color:#0b0f14;font-size:18px;">
              ⛏️ CRUDE STOCK TAKE REPORT
            </h2>
          </div>

          <!-- BODY -->
          <div style="padding:22px;color:#e5e7eb;">

            <p style="color:#9ca3af;font-size:13px;margin-top:0;">
              New crude stock movement has been recorded in the system.
            </p>

            <!-- MAIN INFO GRID -->
            <div style="margin-top:18px;">

              <div style="margin-bottom:10px;">
                <span style="color:#0CC76D;font-weight:bold;">Date:</span>
                <span>${record.date}</span>
              </div>

              <div style="margin-bottom:10px;">
                <span style="color:#0CC76D;font-weight:bold;">Time:</span>
                <span>${record.time}</span>
              </div>

              <div style="margin-bottom:10px;">
                <span style="color:#0CC76D;font-weight:bold;">Material Kind:</span>
                <span>${record.materialKind}</span>
              </div>

              <div style="margin-bottom:10px;">
                <span style="color:#0CC76D;font-weight:bold;">Material Type:</span>
                <span>${record.materialType}</span>
              </div>

            </div>

            <!-- LOGISTICS BOX -->
            <div style="margin-top:18px;background:#1f2937;padding:15px;border-radius:10px;">

              <h3 style="margin-top:0;color:#0CC76D;">
                🚛 Logistics Details
              </h3>

              <p style="margin:6px 0;">
                <strong>Vehicle Number:</strong> ${record.vehicleNumber}
              </p>

              <p style="margin:6px 0;">
                <strong>Driver Name:</strong> ${record.driverName}
              </p>

              <p style="margin:6px 0;">
                <strong>Driver Number:</strong> ${record.driverNumber}
              </p>

            </div>

            <!-- QUANTITY BOX -->
            <div style="margin-top:18px;background:#0f172a;border:1px solid #374151;padding:18px;border-radius:10px;text-align:center;">

              <p style="margin:0;color:#9ca3af;font-size:12px;">
                TOTAL TONNAGE RECORDED
              </p>

              <h1 style="margin:8px 0;color:#0CC76D;font-size:34px;">
                ${Number(record.tonnage).toLocaleString()} TONS
              </h1>

            </div>

            <!-- COMMENT -->
            <div style="margin-top:18px;">
              <h3 style="color:#0CC76D;">📝 Comment / Location Info</h3>
              <p style="background:#111827;padding:12px;border-radius:8px;color:#d1d5db;">
                ${record.comment || "No additional information provided"}
              </p>
            </div>

            <!-- FOOTER -->
            <div style="margin-top:25px;text-align:center;font-size:12px;color:#6b7280;">
              Ziprus Crude Stock System • Automated Notification
            </div>

          </div>
        </div>
      </div>
      `,
    });
  } catch (err) {
    console.error("Crude Entry Email Error:", err);
  }
}