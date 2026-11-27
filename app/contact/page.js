import {pageMetadata} from "../lib/seo";
export const metadata=pageMetadata({"title":"Contact Ziprus Chemicals | Mineral Supply Enquiries","description":"Contact Ziprus Chemicals in Ikpeshi, Edo State, for calcium carbonate, dolomite, limestone and kaolin supply enquiries.","path":"/contact"});

// React icons import
import { MdLocationPin } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="pt-36 mb-10 sm:mb-16 bg-base_color poppins">
      <h1 className="px-4 text-center text-3xl font-bold text-white">Contact Ziprus Chemicals</h1>
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
            <p className="text-sm font-extralight">info@zipruschemicals.com</p>
            <p className="text-sm font-extralight">sales@zipruschemicals.com</p>
          </div>

          <div className="flex flex-col items-center mb-4">
            <IoPhonePortrait className="text-xl" />
            <p className="text-sm font-extralight">+2342018899613</p>
            <p className="text-sm font-extralight">+2347085544340</p>
          </div>
        </div>
      </div>
    </section>
  );
}
