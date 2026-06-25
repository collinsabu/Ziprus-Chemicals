import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendDespatchEmail(record) {
  try {
    await resend.emails.send({
      from: "Ziprus Dispatch System <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: `🚛 New Dispatch Record - ${record.materialType} | ${record.destination}`,

      html: `
      <div style="font-family: Arial, sans-serif; background:#0f172a; padding:20px;">
        
        <!-- HEADER -->
        <div style="max-width:600px;margin:auto;background:#111827;border-radius:12px;overflow:hidden;border:1px solid #1f2937;">
          
          <div style="background:#0CC76D;padding:16px;text-align:center;">
            <h1 style="margin:0;color:#0b0f14;font-size:20px;">
              🚛 DISPATCH REPORT ALERT
            </h1>
          </div>

          <!-- BODY -->
          <div style="padding:20px;color:#e5e7eb;">

            <p style="font-size:14px;color:#9ca3af;">
              A new dispatch record has been submitted into the Ziprus system.
            </p>

            <!-- INFO GRID -->
            <div style="margin-top:20px;">

              <div style="margin-bottom:10px;">
                <span style="color:#0CC76D;font-weight:bold;">Date:</span>
                <span>${record.date}</span>
              </div>

              <div style="margin-bottom:10px;">
                <span style="color:#0CC76D;font-weight:bold;">Time:</span>
                <span>${record.time}</span>
              </div>

              <div style="margin-bottom:10px;">
                <span style="color:#0CC76D;font-weight:bold;">Material:</span>
                <span>${record.materialType}</span>
              </div>

              <div style="margin-bottom:10px;">
                <span style="color:#0CC76D;font-weight:bold;">Vehicle:</span>
                <span>${record.vehicleNumber}</span>
              </div>

              <div style="margin-bottom:10px;">
                <span style="color:#0CC76D;font-weight:bold;">Driver:</span>
                <span>${record.driverName}</span>
              </div>

              <div style="margin-bottom:10px;">
                <span style="color:#0CC76D;font-weight:bold;">Destination:</span>
                <span>${record.destination}</span>
              </div>

            </div>

            <!-- LOAD INFO BOX -->
            <div style="margin-top:20px;padding:15px;background:#1f2937;border-radius:10px;">

              <h3 style="margin-top:0;color:#0CC76D;">Load Summary</h3>

              <p style="margin:5px 0;">
                <strong>Number Loaded:</strong> ${record.numberLoaded}
              </p>

              <p style="margin:5px 0;">
                <strong>Balance Bag:</strong> ${record.balanceBag}
              </p>

              <p style="margin:5px 0;">
                <strong>Tonnage:</strong> ${record.tonnage || "N/A"}
              </p>

            </div>

            <!-- COMMENT -->
            <div style="margin-top:20px;">
              <h3 style="color:#0CC76D;">Comment</h3>
              <p style="background:#111827;padding:12px;border-radius:8px;">
                ${record.comment || "No comment provided"}
              </p>
            </div>

            <!-- FOOTER -->
            <div style="margin-top:25px;text-align:center;font-size:12px;color:#6b7280;">
              Ziprus Chemical Dispatch System • Automated Notification
            </div>

          </div>
        </div>
      </div>
      `,
    });
  } catch (err) {
    console.error("Dispatch Email Error:", err);
  }
}