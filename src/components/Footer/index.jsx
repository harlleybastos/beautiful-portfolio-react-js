import React from "react";
import {
  FooterLogo,
  FooterPermaLinkItem,
  FooterPermaLinkItemArchor,
  FooterPermalinks,
  FooterSocials,
  FooterSocialsLink,
  FooterWrapper,
  FooterCopyright,
  FooterCopyrightText,
} from "./styles";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo href="#">Harlley Bastos</FooterLogo>

      <FooterPermalinks>
        <FooterPermaLinkItem>
          <FooterPermaLinkItemArchor href="#">Home</FooterPermaLinkItemArchor>
        </FooterPermaLinkItem>
        <FooterPermaLinkItem>
          <FooterPermaLinkItemArchor href="#about">
            About
          </FooterPermaLinkItemArchor>
        </FooterPermaLinkItem>
        <FooterPermaLinkItem>
          <FooterPermaLinkItemArchor href="#experience">
            Experience
          </FooterPermaLinkItemArchor>
        </FooterPermaLinkItem>
        <FooterPermaLinkItem>
          <FooterPermaLinkItemArchor href="#services">
            Services
          </FooterPermaLinkItemArchor>
        </FooterPermaLinkItem>
        <FooterPermaLinkItem>
          <FooterPermaLinkItemArchor href="#testimonials">
            Testimonials
          </FooterPermaLinkItemArchor>
        </FooterPermaLinkItem>
        <FooterPermaLinkItem>
          <FooterPermaLinkItemArchor href="#testimonials">
            Contact
          </FooterPermaLinkItemArchor>
        </FooterPermaLinkItem>
      </FooterPermalinks>

      <FooterSocials>
        <FooterSocialsLink href="http://facebook.com">
          <FaFacebookF />
        </FooterSocialsLink>
        <FooterSocialsLink href="http://instagram.com">
          <FiInstagram />
        </FooterSocialsLink>
        <FooterSocialsLink href="http://twitter.com">
          <IoLogoTwitter />
        </FooterSocialsLink>
      </FooterSocials>

      <FooterCopyright>
        <FooterCopyrightText>
          &copy; {new Date().getFullYear()} Harlley Bastos. All rights reserved.
        </FooterCopyrightText>
      </FooterCopyright>
    </FooterWrapper>
  );
};

export default Footer;
