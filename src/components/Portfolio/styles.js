import styled from "styled-components";

export const PortfolioWrapper = styled.section.attrs({
  id: "portfolio",
})``;

export const FirstText = styled.h5``;

export const SecondText = styled.h2``;

export const PortfolioContainer = styled.div.attrs({
  className: "container",
})`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);
  :hover {
    border-color: var(--color-primary-variant);
    background: tranparent;
  }
`;

export const PortfolioItemCta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const PortfolioItemImageContainer = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`;

export const PortfolioItemImage = styled.img``;

export const PortfolioTitle = styled.h3`
  margin: 1.2rem 0 2rem;
`;

export const PortfolioItemLink = styled.a.attrs({
  className: "btn",
})``;

export const PortfolioItemLinkTwo = styled.a.attrs({
  className: "btn btn-primary",
})``;
