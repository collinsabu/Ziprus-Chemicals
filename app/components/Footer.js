"use client";
import Link from "next/link";
import { FaEnvelope, FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-base_color text-white poppins">
      {/* Top Section */}
      <div className="px-5 sm:px-16 pt-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-10 sm:mb-12 text-center sm:text-left">
          Your Number 1 Trusted Solid Mineral Producers <br />
          in Africa...
        </h1>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pb-10">
          {/* Office */}
          <div className="text-center sm:text-left">
            <h4 className="mb-4 text-gray-400 font-semibold">OFFICE</h4>
            <p className="text-sm font-light leading-7 mb-4">
              Km 102 Auchi Igarra Road, Ikpeshi, Edo State, Nigeria.
              <br />
              Landmark Freedom Junction
            </p>
            <div className="flex justify-center sm:justify-start gap-4 mt-2">
              <a href="mailto:info@zipruschemicals.com">
                <FaEnvelope className="text-lg" />
              </a>
              <a
                href="https://youtube.com/@zipruschemicals?si=PyDgAhGYlthsP5zW"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com/ZiprusGold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/ziprus_chemicals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiInstagramLogoFill className="text-xl" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h4 className="mb-4 text-gray-400 font-semibold">COMPANY</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/">Place Order</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Meet Ziprus Links */}
          <div className="text-center sm:text-left">
            <h4 className="mb-4 text-gray-400 font-semibold">MEET ZIPRUS</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><Link href="/guarantee">Our Guarantee</Link></li>
              <li><Link href="/impact">Ziprus Impact</Link></li>
              <li><Link href="/testimonial">Customer Stories</Link></li>
              <li><Link href="/partnership">Partnership</Link></li>
              <li><Link href="/weather">Auchi Weather</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-base_two text-white flex flex-col sm:flex-row justify-between items-center py-4 sm:py-3 px-5 sm:px-16 text-sm sm:text-base font-semibold">
        <p className="mb-2 sm:mb-0">© 2024 Ziprus - Nigeria</p>
        <div className="flex gap-6">
          <Link href="/term">Terms of Use</Link>
          <Link href="/policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
