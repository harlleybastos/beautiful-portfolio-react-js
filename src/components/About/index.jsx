import React from "react";
import {
  AboutButton,
  AboutContainer,
  AboutContainerContent,
  AboutContainerContentCard,
  AboutContainerContentCardFirstText,
  AboutContainerContentCards,
  AboutContainerContentCardSecondText,
  AboutContainerMe,
  AboutContainerMeImg,
  AboutParagraph,
  AboutWrapper,
  FirstText,
  SecondText,
} from "./styles";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import Me from "../../assets/img/me-about.jpg";
const About = () => {
  return (
    <AboutWrapper>
      <FirstText>Get To Known</FirstText>
      <SecondText>About Me</SecondText>

      <AboutContainer>
        <AboutContainerMe>
          <AboutContainerMeImg src={Me} alt="About Image" />
        </AboutContainerMe>

        <AboutContainerContent>
          <AboutContainerContentCards>
            <AboutContainerContentCard>
              <FaAward className="about__icon" />
              <AboutContainerContentCardFirstText>
                Experience
              </AboutContainerContentCardFirstText>
              <AboutContainerContentCardSecondText>
                1+ Years Working
              </AboutContainerContentCardSecondText>
            </AboutContainerContentCard>
            <AboutContainerContentCard>
              <FiUsers className="about__icon" />
              <AboutContainerContentCardFirstText>
                Clients
              </AboutContainerContentCardFirstText>
              <AboutContainerContentCardSecondText>
                200+ Worldwide
              </AboutContainerContentCardSecondText>
            </AboutContainerContentCard>
            <AboutContainerContentCard>
              <VscFolderLibrary className="about__icon" />
              <AboutContainerContentCardFirstText>
                Projects
              </AboutContainerContentCardFirstText>
              <AboutContainerContentCardSecondText>
                80+ Completed
              </AboutContainerContentCardSecondText>
            </AboutContainerContentCard>
          </AboutContainerContentCards>
          <AboutParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            perferendis placeat aut nobis, veritatis eos cumque earum. Ratione
            ipsam iste qui dolores? Nesciunt, quam illo esse doloribus
            voluptates blanditiis unde!
          </AboutParagraph>
          <AboutButton>Let's Talk</AboutButton>
        </AboutContainerContent>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
