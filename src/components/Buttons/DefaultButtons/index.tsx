import React from "react";
import { Container } from "./DefaultButtons.styled";

interface DefaultButtonsProps {
  label: string;
  secondary?: boolean;
}

export function DefaultButtons({
  label,
  secondary = false,
}: DefaultButtonsProps) {
  return <Container secondary={secondary}>{label}</Container>;
}
