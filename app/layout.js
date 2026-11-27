import "./globals.css";
import StructuredData from "./components/StructuredData";
import CampaignAttribution from "./components/CampaignAttribution";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CallbackPopup from "./components/CallbackPopup";



const description="Ziprus Chemicals supplies calcium carbonate, dolomite, limestone and kaolin for industrial buyers in Nigeria and West Africa.";
export const metadata={
 metadataBase:new URL("https://zipruschemicals.com"),
 title:"Ziprus Chemicals | Industrial Minerals Nigeria",
 description,
 openGraph:{type:"website",siteName:"Ziprus Chemicals",title:"Ziprus Chemicals | Industrial Minerals Nigeria",description,locale:"en_NG",images:[{url:"/images/industrial-minerals.jpg",alt:"Ziprus Chemicals industrial minerals"}]},
 twitter:{card:"summary_large_image",images:["/images/industrial-minerals.jpg"],title:"Ziprus Chemicals | Industrial Minerals Nigeria",description},
 ...(process.env.GOOGLE_SITE_VERIFICATION?{verification:{google:process.env.GOOGLE_SITE_VERIFICATION}}:{})
};
const organization={"@context":"https://schema.org","@type":"Organization","@id":"https://zipruschemicals.com/#organization",name:"Ziprus Chemicals Limited",url:"https://zipruschemicals.com",email:"info@zipruschemicals.com",telephone:"+2347055552429",address:{"@type":"PostalAddress",streetAddress:"Km 102 Auchi Igarra Road, Ikpeshi",addressRegion:"Edo State",addressCountry:"NG"}};
const website={"@context":"https://schema.org","@type":"WebSite","@id":"https://zipruschemicals.com/#website",url:"https://zipruschemicals.com",name:"Ziprus Chemicals",publisher:{"@id":organization["@id"]}};

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
      </body>
    </html>
  );
}
