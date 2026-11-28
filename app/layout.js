import "./globals.css";
import StructuredData from "./components/StructuredData";
import CampaignAttribution from "./components/CampaignAttribution";
import AnalyticsConsent from "./components/AnalyticsConsent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CallbackPopup from "./components/CallbackPopup";



const description="Ziprus Chemicals supplies calcium carbonate, dolomite, limestone and kaolin for industrial buyers in Nigeria and West Africa.";
export const metadata={
 metadataBase:new URL("https://www.zipruschemicals.com"),
 title:"Ziprus Chemicals | Industrial Minerals Nigeria",
 description,
 openGraph:{type:"website",siteName:"Ziprus Chemicals",title:"Ziprus Chemicals | Industrial Minerals Nigeria",description,locale:"en_NG",images:[{url:"/images/industrial-minerals.jpg",alt:"Ziprus Chemicals industrial minerals"}]},
 twitter:{card:"summary_large_image",images:["/images/industrial-minerals.jpg"],title:"Ziprus Chemicals | Industrial Minerals Nigeria",description},
 ...(process.env.GOOGLE_SITE_VERIFICATION?{verification:{google:process.env.GOOGLE_SITE_VERIFICATION}}:{})
};
const organization={"@context":"https://schema.org","@type":"Organization","@id":"https://www.zipruschemicals.com/#organization",name:"Ziprus Chemicals Limited",url:"https://www.zipruschemicals.com",email:"info@zipruschemicals.com",telephone:"+2347055552429",address:{"@type":"PostalAddress",streetAddress:"Km 102 Auchi Igarra Road, Ikpeshi",addressRegion:"Edo State",addressCountry:"NG"}};
const website={"@context":"https://schema.org","@type":"WebSite","@id":"https://www.zipruschemicals.com/#website",url:"https://www.zipruschemicals.com",name:"Ziprus Chemicals",publisher:{"@id":organization["@id"]}};

function GloriaChat() {
  const options = [
    ["Calcium carbonate", "calcium carbonate"],
    ["Dolomite", "dolomite"],
    ["Feed-grade limestone", "feed-grade limestone"],
    ["Kaolin", "kaolin"],
    ["General enquiry", "industrial minerals"],
  ];
  return (
    <details className="fixed bottom-4 left-4 z-[60] max-w-[calc(100vw-2rem)] text-sm text-slate-900">
      <summary className="flex w-fit cursor-pointer list-none items-center gap-2 rounded-full bg-[#08783f] px-4 py-3 font-semibold text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 [&::-webkit-details-marker]:hidden">
        <span aria-hidden="true">💬</span> Chat with Gloria
      </summary>
      <section aria-label="Gloria WhatsApp enquiry" className="absolute bottom-full left-0 mb-3 max-h-[60vh] w-80 max-w-[calc(100vw-2rem)] overflow-auto rounded-xl border border-emerald-100 bg-white shadow-2xl">
        <div className="bg-[#035145] px-4 py-3 text-white">
          <h2 className="text-base font-bold">Gloria · Ziprus Chemicals</h2>
          <p className="text-xs text-emerald-100">Continue on WhatsApp</p>
        </div>
        <div className="space-y-2 p-4">
          <p>Hello! Which mineral would you like to discuss?</p>
          {options.map(([label, product]) => (
            <a key={product} href={`https://wa.me/2347055552429?text=${encodeURIComponent("Hello Gloria, I found Ziprus Chemicals through your main website and would like information about " + product + ".")}`} className="block rounded-md border border-emerald-100 bg-emerald-50 px-3 py-2 font-semibold text-[#035145] hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600">
              {label} →
            </a>
          ))}
          <p className="text-xs text-slate-600">Choose a product to open WhatsApp, then send your message.</p>
        </div>
      </section>
    </details>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={organization}/>
        <StructuredData data={website}/>
        <CampaignAttribution />
        <Header />
        {children}
          <CallbackPopup />
        
        <Footer />
        <GloriaChat />
        <AnalyticsConsent />
      </body>
    </html>
  );
}
