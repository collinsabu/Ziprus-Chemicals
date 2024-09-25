export const metadata = {
  title: "Contact Us - Ziprus",
  description: "Get in touch with Ziprus, your trusted mineral producers. Contact us for inquiries, orders, or support.",
  openGraph: {
    title: "Contact Us - Ziprus",
    description: "Get in touch with Ziprus, your trusted mineral producers. Contact us for inquiries, orders, or support.",
    url: "https://www.ziprus.com/contact",
    images: [
      {
        url: "https://www.ziprus.com/images/contact-us-banner.jpg", // replace with a relevant image
        width: 800,
        height: 600,
        alt: "Contact Ziprus",
      },
    ],
    siteName: "Ziprus",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ziprus",
    title: "Contact Us - Ziprus",
    description: "Get in touch with Ziprus, your trusted mineral producers. Contact us for inquiries, orders, or support.",
    images: ["https://www.ziprus.com/images/contact-us-banner.jpg"], // replace with a relevant image
  },
};

// React icons import
import { MdLocationPin } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="mt-5 mb-10 sm:mb-16 bg-base_color poppins">
      <div className="container flex m-auto sm:w-4/5 py-20 flex-col sm:flex-row justify-center">
        <div className="form_container sm:w-2/5 text-white">
          <div>
            <ContactForm />
          </div>
        </div>
        <div className="divider bg-white"></div>
        <div className="contact_text sm:w-2/5 text-white flex flex-col items-center pt-16 sm:py-12">
          <div className="flex flex-col items-center mb-10">
            <MdLocationPin className="text-2xl" />
            <p className="text-sm font-extralight text-center">
              Km 102 Auchi Igarra Road, Ikpeshi, <br /> Edo state, Nigeria
            </p>
          </div>

          <div className="flex flex-col items-center mb-10">
            <FaEnvelope className="text-xl" />
            <p className="text-sm font-extralight">info@Zipruschemicals.com</p>
            <p className="text-sm font-extralight">sales@Zipruschemicals.com</p>
          </div>

          <div className="flex flex-col items-center mb-4">
            <IoPhonePortrait className="text-xl" />
            <p className="text-sm font-extralight">+2347085544340</p>
            <p className="text-sm font-extralight">+23408121130017</p>
          </div>
        </div>
      </div>
    </section>
  );
}
