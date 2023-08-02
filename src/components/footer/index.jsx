import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import FooterAddress from "./footer-address";

const Footer = () => {
  return (
    <div className="flex flex-col items-center py-20 bg-footerBg">
      <div className="w-full md:max-w-screen-xl md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 text-gray-200 mx-10 md:mx-20 lg:mx-10">
          <div className="">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-semibold">About Us</h1>
              <p>
                An IT consultancy can help you assess your technology needs and
                develop a technology strategy that aligns with your business
              </p>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full">
                  <FaFacebookF className="text-[#800000]" />
                </div>
                <div className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full">
                  <AiOutlineInstagram className="text-[#800000]" />
                </div>
                <div className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full">
                  <AiOutlineTwitter className="text-[#800000]" />
                </div>
                <div className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full">
                  <FaLinkedinIn className="text-[#800000]" />
                </div>
                <div className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full">
                  <AiFillYoutube className="text-[#800000]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-center">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-semibold">Link</h1>
              <ul className="flex flex-col gap-3">
                <li>About Us</li>
                <li>Our Mission</li>
                <li>Meet The Teams</li>
                <li>Our Projects</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="flex lg:justify-center">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-semibold">Explore</h1>
              <ul className="flex flex-col gap-3">
                <li>What we Offer</li>
                <li>Offer</li>
                <li>Our Story</li>
                <li>Latest Posts</li>
                <li>Help Center</li>
              </ul>
            </div>
          </div>
          <div className="flex lg:justify-center">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-semibold">Recent Posts</h1>
              <ul className="flex flex-col gap-3">
                <li>About Us</li>
                <li>Our Mission</li>
                <li>Meet The Teams</li>
                <li>Our Projects</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        <FooterAddress />
      </div>
    </div>
  );
};

export default Footer;
