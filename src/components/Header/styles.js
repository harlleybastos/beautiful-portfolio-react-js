import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 900px;
  padding-top: 7rem;
  overflow: hidden;
`;

export const HeaderContainer = styled.div.attrs({
  className: "container",
})`
  text-align: center;
  height: 100%;
  position: relative;
`;

export const FirstText = styled.h5``;

export const SecondText = styled.h1``;

export const ThirdText = styled.h5.attrs({
  className: "text-light",
})``;

export const ContainerMyProfile = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
  overflow: hidden;
`;

export const MyPhoto = styled.img``;

export const ScrollDownLink = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
