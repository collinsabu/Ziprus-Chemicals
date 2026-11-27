import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CallbackPopup from "./components/CallbackPopup";



export const metadata = {
  metadataBase: new URL("https://zipruschemicals.com"),
  title: "Ziprus - Your Trusted Mineral Producers",
  description: "Discover Ziprus, a leading mineral production company in Africa. Explore our products, learn about our company, and get in touch with us.",
  openGraph: {
    title: "Ziprus - Your Trusted Mineral Producers",
    description: "Discover Ziprus, a leading mineral production company in Africa. Explore our products, learn about our company, and get in touch with us.",
    url: "https://zipruschemicals.com",
    images: [
      {
        url: "https://zipruschemicals.com/favicon.png",
        width: 800,
        height: 600,
        alt: "Ziprus Logo",
      },
    ],
    siteName: "Ziprus",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ziprus",
    title: "Ziprus - Your Trusted Mineral Producers",
    description: "Discover Ziprus, a leading mineral production company in Africa. Explore our products, learn about our company, and get in touch with us.",
    images: ["https://zipruschemicals.com/favicon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
          <CallbackPopup />
        
        <Footer />
      </body>
    </html>
  );
}
