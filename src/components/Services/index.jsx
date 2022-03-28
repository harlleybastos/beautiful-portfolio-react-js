import React from "react";
import {
  FirstText,
  SecondText,
  ServiceContainer,
  ServiceContainerHead,
  ServiceContainerHeadTitle,
  ServiceList,
  ServiceListItem,
  ServiceListItemParagraph,
  ServicesContainer,
  ServicesWrapper,
} from "./styles";

import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <ServicesWrapper>
      <FirstText>What I Offer</FirstText>
      <SecondText>Services</SecondText>

      <ServicesContainer>
        <ServiceContainer>
          <ServiceContainerHead>
            <ServiceContainerHeadTitle>UI/UX Design</ServiceContainerHeadTitle>
          </ServiceContainerHead>
          <ServiceList>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
          </ServiceList>
        </ServiceContainer>

        <ServiceContainer>
          <ServiceContainerHead>
            <ServiceContainerHeadTitle>
              Web Development
            </ServiceContainerHeadTitle>
          </ServiceContainerHead>
          <ServiceList>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
          </ServiceList>
        </ServiceContainer>

        <ServiceContainer>
          <ServiceContainerHead>
            <ServiceContainerHeadTitle>
              Content Creation
            </ServiceContainerHeadTitle>
          </ServiceContainerHead>
          <ServiceList>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__list-icon" />
              <ServiceListItemParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ServiceListItemParagraph>
            </ServiceListItem>
          </ServiceList>
        </ServiceContainer>
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default Services;
