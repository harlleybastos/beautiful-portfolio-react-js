import React from "react";

import CV from "../../../../assets/files/cv.pdf";

import { Container, FirstLink, SecondLink } from "./styles";

const CallToAction = () => {
  return (
    <Container>
      <FirstLink href={CV} download>
        Download CV
      </FirstLink>
      <SecondLink href="#contact">Let's Talk</SecondLink>
    </Container>
  );
};

export default CallToAction;
