import React from "react";
import { Container, Link } from "./styles";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <Container>
      <Link href="http://linkedin.com" target="_blank">
        <BsLinkedin />
      </Link>
      <Link href="http://github.com" target="_blank">
        <FaGithub />
      </Link>
    </Container>
  );
};

export default Socials;
