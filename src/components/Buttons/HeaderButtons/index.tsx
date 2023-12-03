"use client";
import React from "react";
import { Container } from "./HeaderButtons.styled";
import { CaretDown } from "@phosphor-icons/react";

interface HeaderButtonsProps {
  label: string;
  hasDropdown: boolean;
}

export function HeaderButtons({ label, hasDropdown }: HeaderButtonsProps) {
  return (
    <Container>
      {label} {hasDropdown && <CaretDown size={16} color="black" />}
    </Container>
  );
}
