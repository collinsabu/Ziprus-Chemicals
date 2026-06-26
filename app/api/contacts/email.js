import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(contact) {
  try {
    await resend.emails.send({
      from: "Ziprus Reports <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: `📩 New Contact Message - ${contact.fullname}`,

      html: `
      <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">

        <div style="
          max-width:600px;
          margin:auto;
          background:#ffffff;
          border-radius:10px;
          overflow:hidden;
          border:1px solid #e5e7eb;
        ">

          <!-- HEADER -->
          <div style="
            background:#035145;
            padding:20px;
            color:white;
            text-align:center;
          ">
            <h2 style="margin:0;font-size:22px;">
              Ziprus Chemical
            </h2>

            <p style="
              margin:8px 0 0;
              font-size:13px;
              opacity:0.9;
            ">
              New Website Contact Message
            </p>
          </div>

          <!-- BODY -->
          <div style="padding:20px;">

            <!-- ALERT -->
            <div style="
              background:#ecfdf5;
              border-left:5px solid #0CC76D;
              padding:14px;
              margin-bottom:20px;
              border-radius:6px;
            ">
              <strong>📩 New enquiry received from your website.</strong>
            </div>

            <!-- DETAILS -->
            <table style="
              width:100%;
              border-collapse:collapse;
              font-size:14px;
            ">

              <tr>
                <td style="
                  padding:12px;
                  background:#f9fafb;
                  width:35%;
                ">
                  <strong>👤 Full Name</strong>
                </td>

                <td style="padding:12px;">
                  ${contact.fullname}
                </td>
              </tr>

              <tr>
                <td style="
                  padding:12px;
                  background:#f9fafb;
                ">
                  <strong>📧 Email</strong>
                </td>

                <td style="padding:12px;">
                  <a
                    href="mailto:${contact.email}"
                    style="
                      color:#035145;
                      text-decoration:none;
                    "
                  >
                    ${contact.email}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="
                  padding:12px;
                  background:#f9fafb;
                ">
                  <strong>📞 Phone Number</strong>
                </td>

                <td style="padding:12px;">
                  ${contact.phonenumber}
                </td>
              </tr>

            </table>

            <!-- MESSAGE -->
            <div style="margin-top:25px;">
              <h3 style="
                font-size:15px;
                color:#111827;
                margin-bottom:10px;
              ">
                💬 Message
              </h3>

              <div style="
                background:#f3f4f6;
                padding:15px;
                border-radius:6px;
                color:#374151;
                line-height:1.7;
                white-space:pre-wrap;
              ">
                ${contact.message}
              </div>
            </div>

            <!-- CTA -->
            <div style="
              text-align:center;
              margin-top:30px;
            ">
              <a
                href="mailto:${contact.email}"
                style="
                  display:inline-block;
                  background:#035145;
                  color:#ffffff;
                  text-decoration:none;
                  padding:12px 24px;
                  border-radius:8px;
                  font-weight:bold;
                "
              >
                Reply to Customer
              </a>
            </div>

          </div>

          <!-- FOOTER -->
          <div style="
            background:#111827;
            color:white;
            text-align:center;
            padding:14px;
            font-size:12px;
          ">
            Ziprus Chemical Internal Reporting System
            <br />
            © ${new Date().getFullYear()} Ziprus Chemicals Ltd.
          </div>

        </div>

      </div>
      `,
    });
  } catch (err) {
    console.error("Contact Email Error:", err);
  }
}