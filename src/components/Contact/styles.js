import styled from "styled-components";

export const ContactWrapper = styled.section.attrs({
  id: "contact",
})``;

export const FirstText = styled.h5``;

export const SecondText = styled.h2``;

export const ContactContainer = styled.div.attrs({
  className: "container",
})`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;

  .contact-option-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;

export const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ContactOption = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }
`;

export const ContactOptionFirstText = styled.h4``;

export const ContactOptionSecondText = styled.h5``;

export const ContactOptionLink = styled.a`
  margin-top: 0.7rem;
  display: inline-block;
  font-size: 0.8rem;
`;

export const ContactContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ContactContainerFormInput = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  color: var(--color-white);
`;

export const ContactContainerFormTextArea = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  color: var(--color-white);
  resize: none;
`;

export const ContactContainerFormButton = styled.button.attrs({
  type: "submit",
  className: "btn btn-primary",
})``;
