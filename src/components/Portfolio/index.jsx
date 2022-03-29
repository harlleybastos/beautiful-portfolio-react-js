import React from "react";
import {
  FirstText,
  PortfolioContainer,
  PortfolioItem,
  PortfolioItemCta,
  PortfolioItemImage,
  PortfolioItemImageContainer,
  PortfolioItemLink,
  PortfolioItemLinkTwo,
  PortfolioTitle,
  PortfolioWrapper,
  SecondText,
} from "./styles";
import Image01 from "../../assets/img/portfolio1.jpg";
import Image02 from "../../assets/img/portfolio2.jpg";
import Image03 from "../../assets/img/portfolio3.jpg";
import Image04 from "../../assets/img/portfolio4.jpg";
import Image05 from "../../assets/img/portfolio5.png";
import Image06 from "../../assets/img/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: Image01,
    title: "This is a portfolio number 1",
  },
  {
    id: 2,
    image: Image02,
    title: "This is a portfolio number 2",
  },
  {
    id: 3,
    image: Image03,
    title: "This is a portfolio number 3",
  },
  {
    id: 4,
    image: Image04,
    title: "This is a portfolio number 4",
  },
  {
    id: 5,
    image: Image05,
    title: "This is a portfolio number 5",
  },
  {
    id: 6,
    image: Image06,
    title: "This is a portfolio number 6",
  },
];

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <FirstText>My Recent Work</FirstText>
      <SecondText>Portfolio</SecondText>

      <PortfolioContainer>
        {data.map((item) => (
          <PortfolioItem key={item.id}>
            <PortfolioItemImageContainer>
              <PortfolioItemImage src={item.image} alt={item.title} />
            </PortfolioItemImageContainer>
            <PortfolioTitle>{item.title}</PortfolioTitle>
            <PortfolioItemCta>
              <PortfolioItemLink href="http://github.com" target="_blank">
                Github
              </PortfolioItemLink>
              <PortfolioItemLinkTwo
                href="http://dribbble.com/Alien_pixels"
                target="_blank"
              >
                Github
              </PortfolioItemLinkTwo>
            </PortfolioItemCta>
          </PortfolioItem>
        ))}
      </PortfolioContainer>
    </PortfolioWrapper>
  );
};

export default Portfolio;
