"use client";
import React from "react";
import Image from "next/image";
import { Container } from "./BrandsWeWork.styled";

export function BrandsWeWork() {
  return (
    <Container>
      <Image
        src={"/brands/versace.svg"}
        width={166.48}
        height={33.16}
        alt={""}
      />
      <Image src={"/brands/zara.svg"} width={91} height={38} alt={""} />
      <Image src={"/brands/gucci.svg"} width={156} height={36} alt={""} />
      <Image src={"/brands/prada.svg"} width={194} height={32} alt={""} />
      <Image
        src={"/brands/calvin.svg"}
        width={206.79}
        height={33.35}
        alt={""}
      />
    </Container>
  );
}
