"use client";
import React from "react";
import { Container, Heading } from "./Testimonials.styled";
import { H2 } from "@/styles/global.styled";
import { IconButtons, TestimonialsCard } from "@/components";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Testimonials() {
  const Testimonials = [
    {
      name: "Sarah M.",
      testimonial: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    },
    {
      name: "Alex K.",
      testimonial: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    },
    {
      name: "James L.",
      testimonial: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    },
    // Duplicando os depoimentos
    {
      name: "Emily R.",
      testimonial: `"Shop.co has completely transformed my wardrobe. The attention to detail in their clothing is exceptional, and I can always find something perfect for any occasion.”`,
    },
    {
      name: "Michael B.",
      testimonial: `"I never thought shopping for clothes could be so enjoyable until I started using Shop.co. The variety and quality are unmatched, and I always receive compliments on my outfits.”`,
    },
    {
      name: "Olivia S.",
      testimonial: `"Shop.co is my go-to destination for the latest fashion trends. The stylish and affordable options make it easy for me to stay on top of my fashion game without breaking the bank.”`,
    },
    // Inserindo novos depoimentos
    {
      name: "David H.",
      testimonial: `"The exceptional customer service at Shop.co sets them apart. Not only do they offer fantastic clothing options, but their commitment to customer satisfaction makes the shopping experience truly enjoyable.”`,
    },
    {
      name: "Sophie T.",
      testimonial: `"Shop.co has become my fashion sanctuary. The seamless online shopping experience combined with the trendy and comfortable clothing keeps me coming back for more.”`,
    },
    {
      name: "Ryan C.",
      testimonial: `"I've never been disappointed with a purchase from Shop.co. Their attention to quality and style is evident in every piece, making it my first choice for all things fashion.”`,
    },
  ];

  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: false, // Show navigation dots
    infinite: false, // Enable infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 3,
    arrows: false,
  };

  return (
    <Container>
      <Heading>
        <H2>OUR HAPPY CUSTOMERS</H2>
        <div>
          <IconButtons
            icon={<ArrowLeft size={24} />}
            onClick={() => {
              sliderRef.current?.slickPrev();
            }}
          />
          <IconButtons
            icon={<ArrowRight size={24} />}
            onClick={() => {
              sliderRef.current?.slickNext();
            }}
          />
        </div>
      </Heading>
      <Slider ref={sliderRef} {...settings}>
        {Testimonials.map((testimonial) => (
          <TestimonialsCard
            key={testimonial.testimonial}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
          />
        ))}
      </Slider>
    </Container>
  );
}
