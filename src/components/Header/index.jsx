import React from "react";

import CallToAction from "./components/CallToAction";

import {
  ContainerMyProfile,
  FirstText,
  HeaderContainer,
  HeaderWrapper,
  MyPhoto,
  SecondText,
  ThirdText,
  ScrollDownLink,
} from "./styles";

import Me from "../../assets/img/me.png";
import Socials from "./components/Socials";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <FirstText>Hello I'm</FirstText>
        <SecondText>Harlley Bastos</SecondText>
        <ThirdText>Frontend Developer</ThirdText>

        <CallToAction />
        <Socials />

        <ContainerMyProfile>
          <MyPhoto src={Me} alt="Me" />
        </ContainerMyProfile>

        <ScrollDownLink href="#contract">Scroll Down</ScrollDownLink>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
