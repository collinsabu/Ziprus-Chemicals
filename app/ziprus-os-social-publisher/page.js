import Link from "next/link";

export const metadata = {
  title: "Ziprus OS Social Publisher | Official Application",
  description:
    "Official information about Ziprus OS Social Publisher, a Ziprus Chemicals Limited business tool for managing authorised social channels and YouTube uploads.",
  alternates: { canonical: "https://www.zipruschemicals.com/ziprus-os-social-publisher" },
};

const features = [
  {
    title: "Connect authorised channels",
    body: "Company staff with the appropriate permissions can connect supported business social media accounts using each provider's official authorisation process.",
  },
  {
    title: "Prepare business content",
    body: "Create and organise company announcements, approved marketing materials, video assets and publishing activity in one internal workspace.",
  },
  {
    title: "Manage YouTube uploads",
    body: "Identify the selected YouTube channel and submit approved videos for upload after an authorised publishing action, with operational records in Ziprus OS.",
  },
];

export default function SocialPublisherPage() {
  return (
    <main className="min-h-screen bg-[#f6faf8] pt-36 pb-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl bg-[#032C26] px-6 py-12 text-white sm:px-12 sm:py-16">
          <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-200">Official Ziprus Chemicals application</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">Ziprus OS <span className="text-[#0CC76D]">Social Publisher</span></h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
            A secure, staff-facing social media management tool developed for Ziprus Chemicals Limited. It helps authorised team members connect company channels, prepare business content and manage approved publishing activity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://os.zipruschemicals.com/" className="inline-flex rounded-xl bg-[#0CC76D] px-5 py-3 text-sm font-bold text-[#032C26] transition hover:bg-emerald-300">Open Ziprus OS</a>
            <Link href="/policy" className="inline-flex rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Read Privacy Policy</Link>
          </div>
          <p className="mt-4 text-xs text-slate-300">Ziprus OS is intended for authorised company users, not public account registration.</p>
        </div>

        <section className="mt-10 grid gap-5 md:grid-cols-3" aria-labelledby="what-it-does">
          <h2 id="what-it-does" className="sr-only">What Ziprus OS Social Publisher does</h2>
          {features.map((feature, index) => (
            <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-800">0{index + 1}</div>
              <h3 className="mt-5 text-lg font-semibold text-[#032C26]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold text-[#032C26]">How Google and YouTube access works</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">YouTube connection is optional and initiated by an authorised Ziprus OS account manager. Google presents a consent screen showing the permissions requested. Ziprus OS does not ask users to enter their Google password into the application.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-[#f1f8f4] p-5">
              <p className="text-sm font-bold text-emerald-950">Read channel information</p>
              <code className="mt-2 block break-all text-xs text-emerald-800">https://www.googleapis.com/auth/youtube.readonly</code>
              <p className="mt-3 text-sm leading-7 text-slate-700">Identifies the authorised channel using its name, ID and other basic channel details.</p>
            </div>
            <div className="rounded-2xl bg-[#f1f8f4] p-5">
              <p className="text-sm font-bold text-emerald-950">Upload videos</p>
              <code className="mt-2 block break-all text-xs text-emerald-800">https://www.googleapis.com/auth/youtube.upload</code>
              <p className="mt-3 text-sm leading-7 text-slate-700">Allows approved video content to be uploaded to the selected channel when an authorised user initiates publication.</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-700">Ziprus OS stores channel connection details and encrypted authorisation credentials needed to operate the integration. For how this information is used, shared, retained and removed, please see the <Link className="font-semibold text-emerald-800 underline" href="/policy">Privacy Policy</Link>.</p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#032C26]">Your control over Google access</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">An authorised manager can disconnect a YouTube channel from Ziprus OS. You can also revoke Google's permission at any time using Google Account settings. For a request to delete data retained within Ziprus OS, contact our team.</p>
            <a className="mt-4 inline-block text-sm font-semibold text-emerald-800 underline" href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Manage Google account access</a>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#032C26]">Privacy and support</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">This service is operated by Ziprus Chemicals Limited, Ikpeshi, Edo State, Nigeria. Questions about connecting channels, privacy or deleting stored information can be sent to:</p>
            <a className="mt-4 inline-block text-sm font-semibold text-emerald-800 underline" href="mailto:info@zipruschemicals.com">info@zipruschemicals.com</a>
          </div>
        </section>

        <footer className="mt-8 rounded-2xl bg-white px-6 py-6 text-sm text-slate-700 shadow-sm border border-slate-200">
          <p className="font-semibold text-[#032C26]">Important links and policies</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/policy" className="text-emerald-800 underline">Privacy Policy</Link>
            <Link href="/term" className="text-emerald-800 underline">Terms of Service</Link>
            <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className="text-emerald-800 underline">YouTube Terms of Service</a>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-800 underline">Google Privacy Policy</a>
            <Link href="/" className="text-emerald-800 underline">Ziprus Chemicals homepage</Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">Ziprus OS Social Publisher is a Ziprus Chemicals Limited application and is not affiliated with or endorsed by Google or YouTube.</p>
        </footer>
      </div>
    </main>
  );
}
