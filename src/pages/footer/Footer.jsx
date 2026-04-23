import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import paypal from "../../assets/paypal.png";
import stripe from "../../assets/strip.png";
import skrill from "../../assets/skrill.png";
import master from "../../assets/master.png";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Left */}
          <div>
            <h2 className="text-xl font-semibold mb-4">tripbooking.ai</h2>
            <p className="text-sm text-gray-200 mb-6">
              Dive into local recommendations for a truly authentic experience.
            </p>

            <p className="text-sm text-gray-300">Need help? Call us</p>
            <p className="text-lg font-semibold">1-800-222-8888</p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>About Us</li>
              <li>Community Blog</li>
              <li>Jobs & Careers</li>
              <li>Contact Us</li>
              <li>Our Awards</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Tour Guide</li>
              <li>Tour Booking</li>
              <li>Hotel Booking</li>
              <li>Ticket Booking</li>
              <li>Rental Services</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>

            <div className="flex bg-white rounded-full overflow-hidden mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm text-black outline-none"
              />
              <button className="bg-yellow-400 text-black px-4 py-2 text-sm">
                Subscribe
              </button>
            </div>

            <h4 className="font-semibold mb-2">Payments</h4>
            <div className="flex gap-2">
              <img className="w-12 h-5" src={paypal} alt="" />
              <img className="w-12 h-5" src={stripe} alt="" />
              <img className="w-12 h-5" src={master} alt="" />
              <img className="w-12 h-5" src={skrill} alt="" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-500 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 gap-4">
          <p>© 2024 Travila Inc. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <span>Follow us</span>

            <div className="flex gap-2">
              <div className="w-8 h-8 flex items-center justify-center border rounded-full">
                <FaFacebookF size={12} />
              </div>
              <div className="w-8 h-8 flex items-center justify-center border rounded-full">
                <FaTwitter size={12} />
              </div>
              <div className="w-8 h-8 flex items-center justify-center border rounded-full">
                <FaInstagram size={12} />
              </div>
              <div className="w-8 h-8 flex items-center justify-center border rounded-full">
                <FaYoutube size={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
