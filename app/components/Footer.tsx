import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  PhoneCall,
  PhoneIcon,
  PhoneMissed,
  PhoneOutgoing,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/wooden-pallets"
                  className="hover:text-white transition-colors"
                >
                  Wooden Pallets
                </Link>
              </li>
              <li>
                <Link
                  href="/products/plastic-pallets"
                  className="hover:text-white transition-colors"
                >
                  Wooden Boxes
                </Link>
              </li>
              <li>
                <Link
                  href="/products/custom-pallets"
                  className="hover:text-white transition-colors"
                >
                  Wooden Crates
                </Link>
              </li>
              <li>
                <Link
                  href="/products/pallet-accessories"
                  className="hover:text-white transition-colors"
                >
                  Plywood Pallets
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/pallet-recycling"
                  className="hover:text-white transition-colors"
                >
                  Pallet Recycling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pallet-repair"
                  className="hover:text-white transition-colors"
                >
                  Pallet Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-design"
                  className="hover:text-white transition-colors"
                >
                  Custom Pallet Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/logistics"
                  className="hover:text-white transition-colors"
                >
                  Logistics Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <PhoneOutgoing className="h-5 w-5 mr-2" />
                <Link href={"tel:+919947405821"}>
                  <span>+91 9947405821</span>
                </Link>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 mr-2" />
                <Link href={"tel:+919495785815"}>
                  <span>+91 9495785815</span>
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:royalwoodpacker@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  royalwoodpacker@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <Link
                  href="geo:10.110603148277065, 76.44305279538864"
                  target="_blank"
                >
                  <span>Perumbavoor, Ernakulam, Kerala - 683547</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Royal Wood Packers. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href={"https://www.facebook.com/royalwoodpackers"}
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href={"https://www.instagram.com/royalwoodpackers"}
              target="_blank"
              aria-label="Twitter"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/royalwoodpackers"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
