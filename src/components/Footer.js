import React from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="container-fluid navbar-bg">
      <div className="container-sm py-4">
        <div className="font-regular text-xl text-white mb-2">
          BURGER KING® DELIVERY
        </div>

        <div className="d-flex align-items-center gap-3 mb-2">
          <a href="tel:1500025" className="d-flex align-items-center gap-1">
            <FaPhoneAlt color="#fff" size={14} />
            <div className="text-white font-regular text-lg">15000 25 </div>
          </a>
          <a
            href="mailto:guestservice@burgerking.co.id"
            className="d-flex align-items-center gap-1"
          >
            <MdEmail color="#fff" size={18} />
            <div className="text-white font-regular text-lg">
              guestservice@burgerking.co.id
            </div>
          </a>
          <div className="d-flex align-items-center gap-2">
            <a href="https://www.facebook.com/burgerkingindonesia/">
              <FaFacebookF color="#fff" size={14} />
            </a>
            <a href="https://www.instagram.com/burgerking.id/">
              <FaInstagram color="#fff" size={14} />
            </a>
            <a href="https://twitter.com/burgerking_id">
              <FaTwitter color="#fff" size={14} />
            </a>
            <a href="https://www.youtube.com/channel/UC-F_fh9CRDwhJrY_ibHae-g">
              <FaYoutube color="#fff" size={14} />
            </a>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <a href="/" className="gray-link text-sm">
            About Us
          </a>
          <div className="color-gray">|</div>
          <a href="/" className="gray-link text-sm">
            Kebijakan Privasi
          </a>
          <div className="color-gray">|</div>
          <a href="/" className="gray-link text-sm">
            Syarat dan Ketentuan
          </a>
          <div className="color-gray">|</div>
          <div className="color-gray text-sm">
            TM & © 2023 Burger King Corporation. Used Under License. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
