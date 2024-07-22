import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../../public/logo.png';

const Footer = () => {
  return (
    <div className="py-10 bg-white text-gray-800">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-center md:items-start">
          <Image src={logo} alt="BoxPower Logo" className="w-32 h-auto" />
          <p className="text-center md:text-left mt-4">Interested in sharing your product offering with BoxPower?.</p>
          <div className="flex mt-4 space-x-4">
            <FaFacebookF className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
          </div>
          <p className="mt-4 text-gray-600">&copy; 2024 BoxPower Inc.</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2">Quick Links</h3>
          <a href="#" className="hover:underline">Log in</a>
          <a href="#" className="hover:underline">Sign up</a>
          <a href="#" className="hover:underline">User Manual</a>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2">Call us</h3>
          <p>(530)-802-5477</p>
          <h3 className="font-bold mb-2 mt-4">Mail us</h3>
          <p>info@boxpower.io</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2">Visit us</h3>
          <p>12438 Loma Rica Dr. STE C,<br />Grass Valley, CA 95945</p>
        </div>
      </div>
      <div className="text-center mt-10">
        <a href="#" className="hover:underline">Terms & Conditions</a> | <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
