"use client";
import React from "react";
import { Container, SliderWrapper } from "./HighlightItems.styled";

import { CatalogItem, DefaultButtons } from "../..";
import { H2 } from "@/styles/global.styled";

interface HighlightItemsProps {
  title: string;
  viewAllHref: string;
  items: {
    id: string;
    image: string;
    title: string;
    price: number;
    rating: number;
    onSale?: {
      percentage: number;
    };
  }[];
}

export function HighlightItems({ items, title }: HighlightItemsProps) {
  return (
    <Container className="highlight-item-container">
      <H2>{title.toUpperCase()}</H2>
      <SliderWrapper>
        {items.map((item) => (
          <CatalogItem
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            onSale={item.onSale}
          />
        ))}
      </SliderWrapper>
      <DefaultButtons label={"View All"} secondary />
    </Container>
  );
}
