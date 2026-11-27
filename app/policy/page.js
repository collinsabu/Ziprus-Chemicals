import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Ziprus Chemicals Limited",
  description:
    "How Ziprus Chemicals Limited and Ziprus OS Social Publisher handle website, business and Google/YouTube account information.",
  alternates: { canonical: "https://www.zipruschemicals.com/policy" },
};

const updated = "27 November 2026";
const email = "info@zipruschemicals.com";

function Section({ number, title, children }) {
  return (
    <section className="border-t border-slate-200 pt-8 mt-8">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#032C26]">
        <span className="mr-2 text-[#03835D]">{number}.</span>{title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-700">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f6faf8] min-h-screen pt-36 pb-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="rounded-3xl bg-[#032C26] px-6 py-10 text-white sm:px-12 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-emerald-300">Ziprus Chemicals Limited</p>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-emerald-50">
            Information about how we handle personal information across our company website and the Ziprus OS Social Publisher application.
          </p>
          <p className="mt-5 text-xs text-emerald-200">Effective and last updated: {updated}</p>
        </div>

        <article className="mt-6 rounded-3xl bg-white border border-slate-200 px-6 py-8 shadow-sm sm:px-12 sm:py-12">
          <p className="text-[15px] leading-7 text-slate-700">
            Ziprus Chemicals Limited ("Ziprus", "we", "us" or "our") operates
            <a className="mx-1 text-emerald-800 underline underline-offset-4" href="https://www.zipruschemicals.com/">www.zipruschemicals.com</a>
            and the staff-facing <Link className="text-emerald-800 underline underline-offset-4" href="/ziprus-os-social-publisher">Ziprus OS Social Publisher</Link>
            application. This policy explains what information we collect, why we use it, how it may be shared, and your choices.
            It covers our website, business enquiries, and connected social media accounts, including YouTube.
          </p>

          <Section number="1" title="Who is responsible for your information?">
            <p>Ziprus Chemicals Limited, Km 102 Auchi–Igarra Road, Ikpeshi, Edo State, Nigeria. Privacy questions and requests can be sent to <a className="text-emerald-800 underline" href={`mailto:${email}`}>{email}</a>.</p>
          </Section>

          <Section number="2" title="Information we collect">
            <p><strong>Website and business enquiries:</strong> Names, company details, email addresses, telephone numbers, delivery or enquiry details, and information you choose to submit through our forms, email, telephone, or other business channels.</p>
            <p><strong>Technical information:</strong> Basic device, browser, IP address, security logs and cookie or session data that may be needed to operate, secure or improve our website and internal systems.</p>
            <p><strong>Authorised staff accounts:</strong> Internal user details, access permissions, account connection status, content drafts, publication history and related audit records needed to operate Ziprus OS.</p>
          </Section>

          <Section number="3" title="Google and YouTube information accessed by Ziprus OS">
            <p>Ziprus OS Social Publisher uses <strong>YouTube API Services</strong> after an authorised user signs in with Google and grants consent. The application requests these Google permissions:</p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-[#032C26]"><tr><th className="p-4 font-semibold">Google permission</th><th className="p-4 font-semibold">Purpose</th></tr></thead>
                <tbody className="divide-y divide-slate-200">
                  <tr><td className="p-4 align-top font-mono text-xs break-all">youtube.readonly</td><td className="p-4">Identify an authorised YouTube channel and read basic channel information, such as its ID, name and handle.</td></tr>
                  <tr><td className="p-4 align-top font-mono text-xs break-all">youtube.upload</td><td className="p-4">Upload videos to the selected channel when an authorised Ziprus OS user initiates the publishing action.</td></tr>
                </tbody>
              </table>
            </div>
            <p>We may process the connected channel ID, title, handle, granted permission details, authentication tokens, uploaded video details, status and publishing history necessary for this functionality. <strong>We do not ask for or store your Google password.</strong></p>
            <p>Google's processing of information through its services is described in the <a className="text-emerald-800 underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>. Use of our YouTube integration is also subject to the <a className="text-emerald-800 underline" href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a>.</p>
          </Section>

          <Section number="4" title="How and why we use information">
            <p>We use information to respond to enquiries, manage business relationships, operate and secure our website and Ziprus OS, administer authorised staff accounts, connect selected social media channels, prepare and publish approved content, and maintain operational records.</p>
            <p>Google user data is used only for the functionality explained here and authorised by the account holder. We do not use information obtained through Google APIs to build advertising profiles or sell that information to data brokers or advertisers. Access is limited to authorised personnel and service providers who need it to operate the service.</p>
          </Section>

          <Section number="5" title="Storage, security and service providers">
            <p>Connection credentials for YouTube are stored on our server in encrypted form rather than exposed in the browser. Channel details and publishing records may be stored in Ziprus OS so authorised staff can manage accounts and track activity.</p>
            <p>We use hosting, database, storage, email and other technical service providers where necessary to run the website and application. We may share limited information with these providers under appropriate access controls, with Google/YouTube when you authorise an API action, and where required by law. We apply reasonable safeguards, but no online system can be guaranteed completely secure.</p>
            <p>Service providers may process information outside your country. Where applicable, we will use appropriate safeguards and comply with relevant data protection requirements.</p>
          </Section>

          <Section number="6" title="How long information is kept">
            <p>We keep business communications and operational records for as long as reasonably necessary for the purposes described in this policy, subject to applicable legal requirements. We retain Google authorisation credentials only while needed for an authorised connection. YouTube API data is reviewed, refreshed or removed according to applicable YouTube API Services requirements and consent status.</p>
            <p>Disconnecting an account stops future authenticated use by Ziprus OS and removes its stored connection credentials. Existing internal drafts or publishing history may remain as business records unless separately deleted. Videos already uploaded to YouTube remain on YouTube unless removed through YouTube itself.</p>
          </Section>

          <Section number="7" title="Disconnecting YouTube, revoking Google access and deleting data">
            <p><strong>Disconnect in Ziprus OS:</strong> An authorised account manager can use the YouTube account disconnect action in Ziprus OS to remove the saved connection credential.</p>
            <p><strong>Revoke Google's authorisation:</strong> You can independently remove Ziprus OS Social Publisher's Google access at <a className="text-emerald-800 underline break-all" href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a>. This is separate from deleting videos on YouTube.</p>
            <p><strong>Request deletion of data held by Ziprus:</strong> Email <a className="text-emerald-800 underline" href={`mailto:${email}?subject=Ziprus%20OS%20YouTube%20data%20deletion%20request`}>{email}</a> with the subject “Ziprus OS YouTube data deletion request” and enough information to identify the connected channel. We will verify the request and remove applicable stored data as required by YouTube's policies and relevant law. Records that must be retained by law will be handled separately.</p>
            <p>Deleting information stored by Ziprus OS does not delete content held by YouTube. To remove a published video from YouTube, use YouTube Studio or another authorised YouTube tool.</p>
          </Section>

          <Section number="8" title="Cookies and similar technology">
            <p>Our website and internal system may use cookies and comparable technologies for sign-in sessions, security, preferences and service performance. Third-party services embedded on a page may use their own cookies under their respective privacy notices. Where consent is legally required for optional tracking, we will obtain it.</p><p>If enabled, Google Analytics is loaded only after you allow optional analytics. It measures page visits and successful commercial enquiries. Our analytics events do not include form contents, names, email addresses, telephone numbers or CVs. Google may process device and network information and use analytics cookies. You can change your choice using Analytics preferences at the bottom of the website. Declining does not affect enquiry forms.</p>
          </Section>

          <Section number="9" title="Your privacy rights">
            <p>Subject to applicable law, you may request access, correction, deletion or restriction of relevant personal information, or object to certain uses. You can unsubscribe from marketing emails using the instructions in those messages or by contacting us. We may need to verify your identity before acting on a request.</p>
          </Section>

          <Section number="10" title="Children and external services">
            <p>Our website and internal publishing application are intended for business users and are not directed to children. Links to Google, YouTube, Facebook and other third-party services lead to platforms with their own terms and privacy practices.</p>
          </Section>

          <Section number="11" title="Changes and contact">
            <p>We may update this policy as our systems, permissions or legal obligations change. The current version and effective date will be shown on this page. Material changes affecting connected Google data will be communicated or presented for renewed consent when required.</p>
            <p><strong>Ziprus Chemicals Limited</strong><br />Km 102 Auchi–Igarra Road, Ikpeshi, Edo State, Nigeria<br />Email: <a className="text-emerald-800 underline" href={`mailto:${email}`}>{email}</a></p>
          </Section>

          <nav aria-label="Related pages" className="mt-10 flex flex-wrap gap-4 border-t border-slate-200 pt-7 text-sm font-semibold">
            <Link className="text-emerald-800 underline" href="/term">Terms of Service</Link>
            <Link className="text-emerald-800 underline" href="/ziprus-os-social-publisher">About Ziprus OS Social Publisher</Link>
            <Link className="text-emerald-800 underline" href="/">Company homepage</Link>
          </nav>
        </article>
      </div>
    </main>
  );
}
