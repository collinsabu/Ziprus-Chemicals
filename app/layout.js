import "./globals.css";
import { AuthProvider } from "./Providers";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Ziprus - Your Trusted Mineral Producers",
  description: "Discover Ziprus, a leading mineral production company in Africa. Explore our products, learn about our company, and get in touch with us.",
  openGraph: {
    title: "Ziprus - Your Trusted Mineral Producers",
    description: "Discover Ziprus, a leading mineral production company in Africa. Explore our products, learn about our company, and get in touch with us.",
    url: "https://www.ziprus.com",
    images: [
      {
        url: "https://www.ziprus.com/images/logo.png",
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
    images: ["https://www.ziprus.com/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Header />
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
