import React from "react";
import {
  FirstText,
  SecondText,
  TestimonialContainerClientAvatar,
  TestimonialContainerClientAvatarClientsReview,
  TestimonialContainerClientAvatarImage,
  TestimonialContainerClientAvatarName,
  TestimonialsContainer,
  TestimonialsWrapper,
} from "./styles";

import Avatar1 from "../../assets/img/avatar1.jpg";
import Avatar2 from "../../assets/img/avatar2.jpg";
import Avatar3 from "../../assets/img/avatar3.jpg";
import Avatar4 from "../../assets/img/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avatar1,
    name: "Client 01",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi quisquam ullam! Ducimus fugit ab quaerat corporis deleniti quam repudiandae earum sed. Molestiae libero magni maxime ducimus corporis placeat enim.",
  },
  {
    avatar: Avatar2,
    name: "Client 02",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi quisquam ullam! Ducimus fugit ab quaerat corporis deleniti quam repudiandae earum sed. Molestiae libero magni maxime ducimus corporis placeat enim.",
  },
  {
    avatar: Avatar3,
    name: "Client 03",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi quisquam ullam! Ducimus fugit ab quaerat corporis deleniti quam repudiandae earum sed. Molestiae libero magni maxime ducimus corporis placeat enim.",
  },
  {
    avatar: Avatar4,
    name: "Client 04",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi quisquam ullam! Ducimus fugit ab quaerat corporis deleniti quam repudiandae earum sed. Molestiae libero magni maxime ducimus corporis placeat enim.",
  },
];

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <FirstText>Review from clients</FirstText>
      <SecondText>Testimonials</SecondText>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <TestimonialContainerClientAvatar>
              <TestimonialContainerClientAvatarImage src={avatar} alt={name} />
            </TestimonialContainerClientAvatar>
            <TestimonialContainerClientAvatarName>
              {name}
            </TestimonialContainerClientAvatarName>
            <TestimonialContainerClientAvatarClientsReview>
              {review}
            </TestimonialContainerClientAvatarClientsReview>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
