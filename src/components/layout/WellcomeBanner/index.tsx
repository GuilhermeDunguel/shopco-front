"use client";
import { X } from "@phosphor-icons/react";
import React from "react";
import { Container } from "./WellcomeBanner.styled";
import Link from "next/link";

interface WellcomeBannerProps {
  closeBannerFunction: React.Dispatch<React.SetStateAction<boolean>>;
}

export function WellcomeBanner({ closeBannerFunction }: WellcomeBannerProps) {
  return (
    <Container>
      <span className="advice-span">
        Sign up and get 20% off to yout first order.{" "}
        <Link className="advice-cta" href={""}>
          Sign Up Now
        </Link>
      </span>
      <button onClick={() => closeBannerFunction(false)}>
        <X size={16} color="white" weight="bold" />
      </button>
    </Container>
  );
}
