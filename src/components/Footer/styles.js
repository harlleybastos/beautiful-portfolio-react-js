import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--color-primary);
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  a {
    color: var(--color-bg);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;

export const FooterLogo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;
`;

export const FooterPermalinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const FooterPermaLinkItem = styled.li``;

export const FooterPermaLinkItemArchor = styled.a``;

export const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem:
  @media screen and (max-width: 600px) {
    margin-bottom: 2.6rem;
  }
`;

export const FooterSocialsLink = styled.a`
  background: var(--color-bg);
  padding: 0.8rem;
  border-radius: 0.7rem;
  display: flex;
  border: 1px solid transparent;

  :hover {
    background: transparent;
    color: var(--color-bg);
    border-color: var(--color-bg);
  }
  * {
    color: var(--color-white);
  }
`;

export const FooterCopyright = styled.div`
  margin-bottom: 4rem;
  color: var(--color-bg);
`;

export const FooterCopyrightText = styled.small``;
