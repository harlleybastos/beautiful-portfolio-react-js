import styled from "styled-components";

export const ExperienceWrapper = styled.section.attrs({
  id: "experience",
})``;

export const FirstText = styled.h5``;

export const SecondText = styled.h2``;

export const ExperienceContainer = styled.div.attrs({
  className: "container",
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;

export const ExperienceContainerFrontEnd = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);
  :hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`;

export const ExperienceContainerFrontEndText = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-primary);
`;

export const ExperienceContainerBackEnd = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  :hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`;
export const ExperienceContainerBackEndText = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-primary);
`;

export const ExperienceContainerDetails = styled.article`
  display: flex;
  gap: 1rem;

  & > .experience__details-icon {
    margin-top: 6px;
    color: var(--color-primary);
  }
`;
export const ExperienceContainerDetailsWrapper = styled.div``;

export const ExperienceContainerDetailsFirstText = styled.h4``;
export const ExperienceContainerDetailsSecondText = styled.small``;

export const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
`;
