"use client";
import React from "react";
import {
  Container,
  StarRating,
  UserDepoiment,
  UserName,
} from "./TestimonialsCard.styled";
import { CheckCircle, Star } from "@phosphor-icons/react";

interface TestimonialsCardProps {
  name: string;
  testimonial: string;
}

export function TestimonialsCard({ name, testimonial }: TestimonialsCardProps) {
  return (
    <Container>
      <StarRating>
        <Star size={22} weight="fill" color="#FFC633" />
        <Star size={22} weight="fill" color="#FFC633" />
        <Star size={22} weight="fill" color="#FFC633" />
        <Star size={22} weight="fill" color="#FFC633" />
        <Star size={22} weight="fill" color="#FFC633" />
      </StarRating>
      <UserName>
        <span>{name}</span>
        <CheckCircle size={24} weight="fill" color="#01AB31" />
      </UserName>
      <UserDepoiment>{testimonial}</UserDepoiment>
    </Container>
  );
}
