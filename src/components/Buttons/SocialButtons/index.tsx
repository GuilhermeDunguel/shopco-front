import React, { ReactNode, MouseEvent } from "react";
import { Container } from "./SocialButtons.styled";

interface IconButtonsProps {
  icon: ReactNode;
  onClick: () => void;
}

export function SocialButtons({ icon, onClick }: IconButtonsProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick();
  };

  return <Container onClick={handleClick}>{icon}</Container>;
}
