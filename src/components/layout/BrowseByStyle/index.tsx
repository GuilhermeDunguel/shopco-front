"use client";
import React from "react";
import { Container, StyleWrapper } from "./BrowseByStyle.styled";
import { H2 } from "@/styles/global.styled";
import { StyleItem } from "@/components/StyleItem";
import Image from "next/image";

export function BrowseByStyle() {
  return (
    <Container>
      <H2>BROWSE BY DRESS STYLE</H2>
      <div className="style-rows">
        <StyleWrapper minorItem={1}>
          <div className="style-item casual">
            <span>Casual</span>
          </div>
          <div className="style-item formal">
            <span>Formal</span>
          </div>
        </StyleWrapper>
        <StyleWrapper minorItem={2}>
          <div className="style-item party">
            <span>Party</span>
          </div>
          <div className="style-item gym">
            <span>Gym</span>
          </div>
        </StyleWrapper>
      </div>
    </Container>
  );
}
