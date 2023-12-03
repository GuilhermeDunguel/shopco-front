"use client";

import React, { ReactNode } from "react";
import { Container, Input } from "./IconField.styled";
import { MagnifyingGlass } from "@phosphor-icons/react";

interface SearchFieldProps {
  icon: ReactNode;
  placeholder: string;
}

export function SearchField({ icon, placeholder }: SearchFieldProps) {
  return (
    <Container>
      {icon}
      <Input type="text" placeholder={placeholder} />
    </Container>
  );
}
