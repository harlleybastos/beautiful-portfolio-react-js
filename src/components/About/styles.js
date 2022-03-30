import styled from "styled-components";

export const AboutWrapper = styled.section.attrs({
  id: "about",
})`
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const FirstText = styled.h5``;

export const SecondText = styled.h2``;

export const AboutContainer = styled.div.attrs({
  className: "container",
})`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const AboutContainerMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    var(--color-primary),
    transparent
  );
  display: grid;
  place-items: center;
  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }
  @media screen and (max-width: 600px) {
    width: 65%;
    margin 0 auto 3rem;
  }
`;

export const AboutContainerMeImg = styled.img`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);

  :hover {
    transform: rotate(0deg);
  }
`;

export const AboutContainerContent = styled.div``;

export const AboutContainerContentCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const AboutContainerContentCard = styled.article`
  background: var(--color-bg-variant); 
  border 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
  :hover{
    background: transparent;
    cursor: default;
    border-color: var(--color-primary-variant);
  }

  
  & > .about__icon {
    color: var(--color-primary);
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

export const AboutContainerContentCardFirstText = styled.h5`
  font-size: 0.95rem;
`;

export const AboutContainerContentCardSecondText = styled.small`
  font-size: 0.7rem;
  color: var(--color-light);
`;

export const AboutParagraph = styled.p`
  margin: 2rem 0 2.6rem;
  color: var(--color-light);
  @media screen and (max-width: 1024px) {
    margin: 1rem 0 1.5rem;
  }
  @media screen and (max-width: 600px) {
    margin: 1.5rem 0;
  }
`;

export const AboutButton = styled.a.attrs({
  className: "btn btn-primary",
})``;
