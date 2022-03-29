import styled from "styled-components";

export const TestimonialsWrapper = styled.section.attrs({
  id: "testimonials",
})`
  .testimonial {
    background: var(--color-bg-variant);
    text-align: center;
    padding: 2rem;
    border-radius: 2rem;
    user-select: none;
  }
  .testimonials__container {
    width: 40%;
    padding-bottom: 4rem;

    @media screen and (max-width: 1024px) {
      width: 60%;
    }
    @media screen and (max-width: 600px) {
      width: var(--container-width-sm);
    }
  }

  .swiper-pagination-clickable .swiper-pagination-bullet {
    background: var(--color-primary);
  }
`;

export const FirstText = styled.h5``;

export const SecondText = styled.h2``;

export const TestimonialsContainer = styled.div.attrs({
  className: "container",
})``;

export const TestimonialContainer = styled.article`
  background: var(--color-bg-variant);
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  user-select: none;
`;

export const TestimonialContainerClientAvatar = styled.div`
  width: 4rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 0.4rem solid var(--color-primary-variant);
`;

export const TestimonialContainerClientAvatarImage = styled.img``;

export const TestimonialContainerClientAvatarName = styled.h5``;

export const TestimonialContainerClientAvatarClientsReview = styled.small`
  color: var(--color-light);
  font-weight: 300;
  display: block;
  width: 80%;
  margin: 0.8rem auto 0;
  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;
