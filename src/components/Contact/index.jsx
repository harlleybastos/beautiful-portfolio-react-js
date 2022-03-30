import React from "react";
import {
  ContactContainer,
  ContactContainerForm,
  ContactContainerFormButton,
  ContactContainerFormInput,
  ContactContainerFormTextArea,
  ContactOption,
  ContactOptionFirstText,
  ContactOptionLink,
  ContactOptions,
  ContactOptionSecondText,
  ContactWrapper,
  FirstText,
  SecondText,
} from "./styles";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <ContactWrapper>
      <FirstText>Get In Touch</FirstText>
      <SecondText>Get In Touch</SecondText>

      <ContactContainer>
        <ContactOptions>
          <ContactOption>
            <MdOutlineEmail className="contact-option-icon" />
            <ContactOptionFirstText>Email</ContactOptionFirstText>
            <ContactOptionSecondText>dummy@gmail.com</ContactOptionSecondText>
            <ContactOptionLink href="https://m.me/dummy">
              Send a message
            </ContactOptionLink>
          </ContactOption>
          <ContactOption>
            <RiMessengerLine className="contact-option-icon" />
            <ContactOptionFirstText>Messenger</ContactOptionFirstText>
            <ContactOptionSecondText>eldummy</ContactOptionSecondText>
            <ContactOptionLink href="mailto:dummy@gmail.com" target="_blank">
              Send a message
            </ContactOptionLink>
          </ContactOption>
          <ContactOption>
            <BsWhatsapp className="contact-option-icon" />
            <ContactOptionFirstText>WhatsApp</ContactOptionFirstText>
            <ContactOptionSecondText>+123456789</ContactOptionSecondText>
            <ContactOptionLink
              href="https://api.whatsapp.com/send=phone+123456789"
              target="_blank"
            >
              Send a message
            </ContactOptionLink>
          </ContactOption>
        </ContactOptions>

        <ContactContainerForm action="">
          <ContactContainerFormInput
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <ContactContainerFormInput
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <ContactContainerFormTextArea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          />
          <ContactContainerFormButton>Send Message</ContactContainerFormButton>
        </ContactContainerForm>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
