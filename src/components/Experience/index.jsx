import React from "react";
import {
  ExperienceContainer,
  ExperienceContainerBackEnd,
  ExperienceContainerBackEndText,
  ExperienceContainerDetails,
  ExperienceContainerDetailsFirstText,
  ExperienceContainerDetailsSecondText,
  ExperienceContainerDetailsWrapper,
  ExperienceContainerFrontEnd,
  ExperienceContainerFrontEndText,
  ExperienceContent,
  ExperienceWrapper,
  FirstText,
  SecondText,
} from "./styles";

import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <ExperienceWrapper>
      <FirstText>What Skills I Have</FirstText>
      <SecondText>My Experience</SecondText>

      <ExperienceContainer>
        <ExperienceContainerFrontEnd>
          <ExperienceContainerFrontEndText>
            Frontend Development
          </ExperienceContainerFrontEndText>
          <ExperienceContent>
            <ExperienceContainerDetails>
              <BsPatchCheckFill className="experience__details-icon" />
              <ExperienceContainerDetailsWrapper>
                <ExperienceContainerDetailsFirstText>
                  HTML
                </ExperienceContainerDetailsFirstText>
                <ExperienceContainerDetailsSecondText>
                  Experienced
                </ExperienceContainerDetailsSecondText>
              </ExperienceContainerDetailsWrapper>
            </ExperienceContainerDetails>
            <ExperienceContainerDetails>
              <BsPatchCheckFill className="experience__details-icon" />
              <ExperienceContainerDetailsWrapper>
                <ExperienceContainerDetailsFirstText>
                  CSS
                </ExperienceContainerDetailsFirstText>
                <ExperienceContainerDetailsSecondText>
                  Intermediate
                </ExperienceContainerDetailsSecondText>
              </ExperienceContainerDetailsWrapper>
            </ExperienceContainerDetails>
            <ExperienceContainerDetails>
              <BsPatchCheckFill className="experience__details-icon" />
              <ExperienceContainerDetailsWrapper>
                <ExperienceContainerDetailsFirstText>
                  Javascript
                </ExperienceContainerDetailsFirstText>
                <ExperienceContainerDetailsSecondText>
                  Experienced
                </ExperienceContainerDetailsSecondText>
              </ExperienceContainerDetailsWrapper>
            </ExperienceContainerDetails>
            <ExperienceContainerDetails>
              <BsPatchCheckFill className="experience__details-icon" />
              <ExperienceContainerDetailsWrapper>
                <ExperienceContainerDetailsFirstText>
                  React
                </ExperienceContainerDetailsFirstText>
                <ExperienceContainerDetailsSecondText>
                  Experienced
                </ExperienceContainerDetailsSecondText>
              </ExperienceContainerDetailsWrapper>
            </ExperienceContainerDetails>
            <ExperienceContainerDetails>
              <BsPatchCheckFill className="experience__details-icon" />
              <ExperienceContainerDetailsWrapper>
                <ExperienceContainerDetailsFirstText>
                  TailwindCSS
                </ExperienceContainerDetailsFirstText>
                <ExperienceContainerDetailsSecondText>
                  Intermediate
                </ExperienceContainerDetailsSecondText>
              </ExperienceContainerDetailsWrapper>
            </ExperienceContainerDetails>
          </ExperienceContent>
        </ExperienceContainerFrontEnd>

        <ExperienceContainerBackEnd>
          <ExperienceContainerBackEndText>
            Backend Development
          </ExperienceContainerBackEndText>
          <ExperienceContent>
            <ExperienceContainerDetails>
              <BsPatchCheckFill className="experience__details-icon" />
              <ExperienceContainerDetailsWrapper>
                <ExperienceContainerDetailsFirstText>
                  Node JS
                </ExperienceContainerDetailsFirstText>
                <ExperienceContainerDetailsSecondText>
                  Experienced
                </ExperienceContainerDetailsSecondText>
              </ExperienceContainerDetailsWrapper>
            </ExperienceContainerDetails>
            <ExperienceContainerDetails>
              <BsPatchCheckFill className="experience__details-icon" />
              <ExperienceContainerDetailsWrapper>
                <ExperienceContainerDetailsFirstText>
                  PHP
                </ExperienceContainerDetailsFirstText>
                <ExperienceContainerDetailsSecondText>
                  Intermediate
                </ExperienceContainerDetailsSecondText>
              </ExperienceContainerDetailsWrapper>
            </ExperienceContainerDetails>
            <ExperienceContainerDetails>
              <BsPatchCheckFill className="experience__details-icon" />
              <ExperienceContainerDetailsWrapper>
                <ExperienceContainerDetailsFirstText>
                  MySQL
                </ExperienceContainerDetailsFirstText>
                <ExperienceContainerDetailsSecondText>
                  Experienced
                </ExperienceContainerDetailsSecondText>
              </ExperienceContainerDetailsWrapper>
            </ExperienceContainerDetails>
            <ExperienceContainerDetails>
              <BsPatchCheckFill className="experience__details-icon" />
              <ExperienceContainerDetailsWrapper>
                <ExperienceContainerDetailsFirstText>
                  MongoDB
                </ExperienceContainerDetailsFirstText>
                <ExperienceContainerDetailsSecondText>
                  Experienced
                </ExperienceContainerDetailsSecondText>
              </ExperienceContainerDetailsWrapper>
            </ExperienceContainerDetails>
            <ExperienceContainerDetails>
              <BsPatchCheckFill className="experience__details-icon" />
              <ExperienceContainerDetailsWrapper>
                <ExperienceContainerDetailsFirstText>
                  Python
                </ExperienceContainerDetailsFirstText>
                <ExperienceContainerDetailsSecondText>
                  Intermediate
                </ExperienceContainerDetailsSecondText>{" "}
              </ExperienceContainerDetailsWrapper>
            </ExperienceContainerDetails>
          </ExperienceContent>
        </ExperienceContainerBackEnd>
      </ExperienceContainer>
    </ExperienceWrapper>
  );
};

export default Experience;
