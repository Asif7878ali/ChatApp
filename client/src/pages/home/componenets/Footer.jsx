import React from "react";
import Logo from "../../../assets/chatwave.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#f2f3ef] py-8 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1">
            <div className="mb-4">
              <img src={Logo} alt="WhatsApp Logo" className="h-10" />
            </div>
            <button className="bg-[#25d366] text-white font-medium py-2 px-6 rounded-full hover:bg-[#20b85c]">
              Download
            </button>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Who we are</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline">About us</a>
              </li>
              <li>
                <a className="hover:underline">Careers</a>
              </li>
              <li>
                <a className="hover:underline">Brand Center</a>
              </li>
              <li>
                <a className="hover:underline">Privacy</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Use WhatsApp</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline">Android</a>
              </li>
              <li>
                <a className="hover:underline">iPhone</a>
              </li>
              <li>
                <a className="hover:underline">Mac/PC</a>
              </li>
              <li>
                <a className="hover:underline">WhatsApp Web</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Need help?</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline">Contact Us</a>
              </li>
              <li>
                <a className="hover:underline">Help Center</a>
              </li>
              <li>
                <a className="hover:underline">Apps</a>
              </li>
              <li>
                <a className="hover:underline">Security Advisories</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8"></div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-sm">
            <p>2024 © Chatwave LLC</p>
            <p>
              <a className="hover:underline">Terms & Privacy Policy</a> |{" "}
              <a className="hover:underline">Sitemap</a>
            </p>
          </div>

          <div className="flex space-x-4">
            <FaSquareXTwitter size={25} />
            <FaYoutube size={25} />
            <FaInstagram size={25} />
            <FaFacebookF size={25} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
