import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { siteConfig } from "../lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream border-t border-gold/20">
      {/* Top Section */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              {siteConfig.name}
            </h2>

            <div className="w-16 h-1 bg-gold mt-3 mb-5 rounded-full" />

            <p className="text-sm leading-7 text-cream/80">
              Infinity Industries is a trusted supplier of premium paper and
              board solutions, delivering quality products for printing,
              packaging, industrial, and specialty applications across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="w-14 h-1 bg-gold mt-3 mb-5 rounded-full" />

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-gold transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/infrastructure"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Infrastructure
                </Link>
              </li>

              <li>
                <Link
                  href="/origami"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Origami
                </Link>
              </li>

              <li>
                <Link
                  href="/career"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Career
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Contact Us
            </h3>

            <div className="w-14 h-1 bg-gold mt-3 mb-5 rounded-full" />

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-gold shrink-0" />
                <p className="text-cream/80">
                  Mumbai, Maharashtra, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-gold shrink-0" />
                <a
                  href="tel:+912240462288"
                  className="hover:text-gold transition-colors"
                >
                  +91 22 4046 2288
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gold shrink-0" />
                <a
                  href="mailto:infinity@galagroup.net"
                  className="hover:text-gold transition-colors break-all"
                >
                 infinity@galagroup.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex justify-center items-center">
          <p className="text-sm text-center text-cream/70">
            © {year} {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}