import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadEmail(lead) {
  try {
    await resend.emails.send({
      from: "Ziprus Reports <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,

      subject: `🚨 New Website Lead - ${lead.fullname}`,

      html: `
      <div style="font-family:Arial,sans-serif;background:#f4f6f8;padding:20px;">

        <div style="
          max-width:600px;
          margin:auto;
          background:white;
          border-radius:12px;
          overflow:hidden;
          border:1px solid #e5e7eb;
        ">

          <!-- HEADER -->

          <div style="
            background:#035145;
            padding:25px;
            text-align:center;
            color:white;
          ">

            <h2 style="margin:0;font-size:24px;">
              Ziprus Chemicals Ltd
            </h2>

            <p style="
              margin-top:8px;
              font-size:14px;
            ">
              New Website Callback Request
            </p>

          </div>


          <!-- BODY -->

          <div style="padding:25px;">


            <div style="
              background:#ecfdf5;
              border-left:5px solid #0CC76D;
              padding:15px;
              border-radius:8px;
              margin-bottom:20px;
            ">

              <strong>
                📩 A new customer enquiry has been submitted.
              </strong>

            </div>



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
                  👤 Full Name
                </td>

                <td style="padding:12px;">
                  ${lead.fullname}
                </td>
              </tr>



              <tr>

                <td style="
                  padding:12px;
                  background:#f9fafb;
                ">
                  📞 Phone
                </td>

                <td style="padding:12px;">
                  ${lead.phone}
                </td>

              </tr>



              <tr>

                <td style="
                  padding:12px;
                  background:#f9fafb;
                ">
                  📧 Email
                </td>

                <td style="padding:12px;">
                  ${lead.email || "Not provided"}
                </td>

              </tr>



              <tr>

                <td style="
                  padding:12px;
                  background:#f9fafb;
                ">
                  🏢 Company
                </td>

                <td style="padding:12px;">
                  ${lead.company || "Not provided"}
                </td>

              </tr>



              <tr>

                <td style="
                  padding:12px;
                  background:#f9fafb;
                ">
                  🏭 Product Interest
                </td>

                <td style="padding:12px;">
                  ${lead.productInterest || "Not specified"}
                </td>

              </tr>



              <tr>

                <td style="
                  padding:12px;
                  background:#f9fafb;
                ">
                  🌐 Page Visited
                </td>

                <td style="padding:12px;">
                  ${lead.pageVisited}
                </td>

              </tr>


            </table>




            <div style="margin-top:25px;">

              <h3 style="
                color:#111827;
                font-size:16px;
              ">
                💬 Customer Message
              </h3>


              <div style="
                background:#f3f4f6;
                padding:15px;
                border-radius:8px;
                line-height:1.6;
                color:#374151;
              ">

                ${lead.message || "No message"}

              </div>


            </div>




            <div style="
              text-align:center;
              margin-top:30px;
            ">

              <a
                href="tel:${lead.phone}"
                style="
                  display:inline-block;
                  background:#035145;
                  color:white;
                  text-decoration:none;
                  padding:12px 25px;
                  border-radius:8px;
                  font-weight:bold;
                "
              >
                Call Customer
              </a>

            </div>



          </div>



          <div style="
            background:#111827;
            color:white;
            text-align:center;
            padding:15px;
            font-size:12px;
          ">

            Ziprus Chemicals Website Lead System
            <br />

            © ${new Date().getFullYear()} Ziprus Chemicals Ltd.

          </div>


        </div>


      </div>
      `,
    });

  } catch (error) {

    console.error(
      "Lead Email Error:",
      error
    );

  }
}