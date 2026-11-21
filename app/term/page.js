import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Ziprus Chemicals Limited",
  description:
    "Terms governing the Ziprus Chemicals website and the authorised use of Ziprus OS Social Publisher.",
  alternates: { canonical: "https://www.zipruschemicals.com/term" },
};

const updated = "21 November 2026";

function Section({ number, title, children }) {
  return (
    <section className="mt-8 border-t border-slate-200 pt-8">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#032C26]">
        <span className="mr-2 text-[#03835D]">{number}.</span>{title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-700">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f6faf8] pt-36 pb-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <header className="rounded-3xl bg-[#032C26] px-6 py-10 text-white sm:px-12 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-emerald-300">Ziprus Chemicals Limited</p>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-emerald-50">
            Terms for using the Ziprus Chemicals website and the Ziprus OS Social Publisher application.
          </p>
          <p className="mt-5 text-xs text-emerald-200">Effective and last updated: {updated}</p>
        </header>

        <article className="mt-6 rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-12 sm:py-12">
          <p className="text-[15px] leading-7 text-slate-700">
            These Terms of Service ("Terms") apply to the public website of Ziprus Chemicals Limited
            ("Ziprus") and, where relevant, the internal <Link href="/ziprus-os-social-publisher" className="text-emerald-800 underline">Ziprus OS Social Publisher</Link> application.
            By using the relevant service, you agree to these Terms, subject to any separate written agreement that applies.
          </p>

          <Section number="1" title="About Ziprus and the application">
            <p>Ziprus Chemicals Limited is an industrial minerals business based in Edo State, Nigeria. Its public website provides company, product and enquiry information. Ziprus OS Social Publisher is an internal business tool for authorised staff to connect social media accounts and manage approved business content.</p>
          </Section>

          <Section number="2" title="Authorised access and accounts">
            <p>Access to Ziprus OS is restricted to people authorised by Ziprus. Users must protect their sign-in details, use only accounts and channels they have permission to administer, and notify Ziprus promptly if they suspect unauthorised access.</p>
            <p>Connecting a third-party account does not give you rights over that account. You remain responsible for ensuring that the account owner and platform permit the actions you take.</p>
          </Section>

          <Section number="3" title="Use of social media and YouTube">
            <p>Ziprus OS Social Publisher can identify an authorised YouTube channel and support uploading videos to it, subject to the Google permissions the account holder grants. Uploading through the application is intended to follow an authorised user's action and the application's publishing workflow.</p>
            <p><strong>By using the YouTube integration, you also agree to be bound by the <a className="text-emerald-800 underline" href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a>.</strong> Your use of other connected services remains subject to their applicable platform terms, policies and permissions.</p>
            <p>Users are responsible for the accuracy and legality of content they authorise for publication, including copyright permissions, privacy rights, advertising rules and applicable industry restrictions. Published content may be visible publicly on the relevant platform.</p>
          </Section>

          <Section number="4" title="Acceptable use">
            <p>You must not misuse the website or application, gain unauthorised access, bypass security controls, distribute harmful software, impersonate others, spam, publish unlawful material, infringe third-party rights or use a connection in ways prohibited by the relevant platform.</p>
          </Section>

          <Section number="5" title="Company information and enquiries">
            <p>Website descriptions of mineral products, specifications, prices, delivery options and availability are general information and may change. A website enquiry or quotation request does not by itself create a binding supply contract. Any sale or supply arrangement is governed by its separately agreed commercial terms.</p>
          </Section>

          <Section number="6" title="Intellectual property">
            <p>The Ziprus name, application design, website materials and business content are owned by Ziprus or their respective rights holders. You may not reuse them beyond the permissions granted to you or permitted by law. Content uploaded to third-party platforms remains subject to those platforms' terms and the rights of the relevant content owner.</p>
          </Section>

          <Section number="7" title="Privacy and third-party services">
            <p>Please read our <Link href="/policy" className="text-emerald-800 underline">Privacy Policy</Link>, which explains how personal information and Google/YouTube account data are handled, stored and deleted. Google and other connected platforms operate their own services independently of Ziprus.</p>
          </Section>

          <Section number="8" title="Disconnecting accounts and ending access">
            <p>An authorised user can ask the administrator to disconnect a channel from Ziprus OS. Google access may also be revoked from <a className="text-emerald-800 underline" href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Account permissions</a>. Disconnecting a channel does not automatically remove videos or posts already published on an external platform.</p>
            <p>Ziprus may suspend or withdraw application access where necessary for security, policy compliance, account management or lawful business purposes.</p>
          </Section>

          <Section number="9" title="Availability, liability and applicable law">
            <p>We take reasonable care in operating our services, but they may be interrupted by maintenance, technical issues or changes made by third-party platforms. To the extent permitted by applicable law, the website and internal application are provided without a guarantee of uninterrupted availability.</p>
            <p>Nothing in these Terms excludes a liability or statutory right that cannot lawfully be excluded. These Terms are governed by the laws of Nigeria, except where mandatory laws provide otherwise. Any applicable written customer or employment agreement takes precedence where it expressly conflicts with these general website or application Terms.</p>
          </Section>

          <Section number="10" title="Changes and contact">
            <p>We may update these Terms as the website or application changes. The date above identifies the published version. For questions about these Terms, contact:</p>
            <p><strong>Ziprus Chemicals Limited</strong><br />Km 102 Auchi–Igarra Road, Ikpeshi, Edo State, Nigeria<br /><a className="text-emerald-800 underline" href="mailto:info@zipruschemicals.com">info@zipruschemicals.com</a></p>
          </Section>

          <nav aria-label="Related pages" className="mt-10 flex flex-wrap gap-4 border-t border-slate-200 pt-7 text-sm font-semibold">
            <Link className="text-emerald-800 underline" href="/policy">Privacy Policy</Link>
            <Link className="text-emerald-800 underline" href="/ziprus-os-social-publisher">About Ziprus OS Social Publisher</Link>
            <Link className="text-emerald-800 underline" href="/">Company homepage</Link>
          </nav>
        </article>
      </div>
    </main>
  );
}
