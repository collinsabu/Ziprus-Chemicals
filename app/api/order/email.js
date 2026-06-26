import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderEmail(order) {
  try {
    await resend.emails.send({
      from: "Ziprus Orders <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      replyTo: order.email,
      subject: `📦 New Order Request - ${order.company}`,

      html: `
      <div style="font-family:Arial,sans-serif;background:#f4f6f8;padding:20px;">

        <div style="
          max-width:650px;
          margin:auto;
          background:#ffffff;
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
            <h2 style="
              margin:0;
              font-size:24px;
              font-weight:700;
            ">
              📦 New Customer Order
            </h2>

            <p style="
              margin-top:8px;
              font-size:14px;
              color:#d1fae5;
            ">
              A new order enquiry has been submitted through the website.
            </p>
          </div>

          <!-- BODY -->
          <div style="padding:25px;">

            <!-- CUSTOMER CARD -->
            <div style="
              background:#ecfdf5;
              border-left:5px solid #0CC76D;
              padding:15px;
              border-radius:8px;
              margin-bottom:25px;
            ">
              <div style="
                font-size:18px;
                color:#035145;
                font-weight:bold;
                margin-bottom:6px;
              ">
                👤 ${order.name}
              </div>

              <div style="color:#374151;font-size:14px;">
                New order enquiry received from
                <strong>${order.company}</strong>
              </div>
            </div>

            <!-- ORDER DETAILS -->
            <table style="
              width:100%;
              border-collapse:collapse;
              font-size:14px;
              margin-bottom:25px;
            ">

              <tr>
                <td style="
                  padding:12px;
                  background:#f9fafb;
                  width:35%;
                  border-bottom:1px solid #e5e7eb;
                ">
                  <strong>🏢 Company</strong>
                </td>

                <td style="
                  padding:12px;
                  border-bottom:1px solid #e5e7eb;
                ">
                  ${order.company}
                </td>
              </tr>

              <tr>
                <td style="
                  padding:12px;
                  background:#f9fafb;
                  border-bottom:1px solid #e5e7eb;
                ">
                  <strong>📧 Email</strong>
                </td>

                <td style="
                  padding:12px;
                  border-bottom:1px solid #e5e7eb;
                ">
                  <a
                    href="mailto:${order.email}"
                    style="
                      color:#035145;
                      text-decoration:none;
                      font-weight:600;
                    "
                  >
                    ${order.email}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="
                  padding:12px;
                  background:#f9fafb;
                  border-bottom:1px solid #e5e7eb;
                ">
                  <strong>📱 Phone Number</strong>
                </td>

                <td style="
                  padding:12px;
                  border-bottom:1px solid #e5e7eb;
                ">
                  ${order.number}
                </td>
              </tr>

              <tr>
                <td style="
                  padding:12px;
                  background:#f9fafb;
                  border-bottom:1px solid #e5e7eb;
                ">
                  <strong>📦 Material Requested</strong>
                </td>

                <td style="
                  padding:12px;
                  border-bottom:1px solid #e5e7eb;
                ">
                  <strong style="color:#035145;">
                    ${order.material}
                  </strong>
                </td>
              </tr>

              <tr>
                <td style="
                  padding:12px;
                  background:#f9fafb;
                ">
                  <strong>📍 Supply Address</strong>
                </td>

                <td style="padding:12px;">
                  ${order.supply}
                </td>
              </tr>

            </table>

            <!-- MESSAGE -->
            <div>
              <h3 style="
                font-size:15px;
                color:#111827;
                margin-bottom:10px;
              ">
                📝 Customer Message
              </h3>

              <div style="
                background:#f3f4f6;
                padding:16px;
                border-radius:8px;
                color:#374151;
                line-height:1.7;
                white-space:pre-wrap;
              ">
                ${order.body || "No additional message provided."}
              </div>
            </div>

            <!-- ACTION BUTTONS -->
            <div style="
              margin-top:30px;
              text-align:center;
            ">

              <a
                href="mailto:${order.email}"
                style="
                  display:inline-block;
                  background:#035145;
                  color:white;
                  text-decoration:none;
                  padding:12px 22px;
                  border-radius:8px;
                  font-weight:bold;
                  margin-right:10px;
                "
              >
                Reply to Customer
              </a>

              <a
                href="tel:${order.number}"
                style="
                  display:inline-block;
                  background:#0CC76D;
                  color:white;
                  text-decoration:none;
                  padding:12px 22px;
                  border-radius:8px;
                  font-weight:bold;
                "
              >
                Call Customer
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
            Ziprus Chemical Order Management System<br/>
            © ${new Date().getFullYear()} Ziprus Chemical Ltd.
          </div>

        </div>

      </div>
      `,
    });
  } catch (err) {
    console.error("Order Email Error:", err);
  }
}