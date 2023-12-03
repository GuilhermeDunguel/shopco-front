import React from "react";
import {
  Container,
  ItemImage,
  ItemTitle,
  OnSaleWrapper,
  PriceWrapper,
  StarRatingWrapper,
} from "./CatalogItem.styled";
import { Star, StarHalf } from "@phosphor-icons/react";

interface CatalogItemProps {
  title: string;
  rating: number;
  image: string;
  price: number;
  onSale?: {
    percentage: number;
  };
}

export function CatalogItem({
  title,
  rating,
  image,
  price,
  onSale,
}: CatalogItemProps) {
  const ratingInt = Math.floor(rating);
  const hasDecimal = rating !== ratingInt;

  const starRating = new Array(ratingInt).fill(null);

  return (
    <Container>
      <ItemImage imageSrc={image} />
      <div className="item-details-wrapper">
        <ItemTitle>{title}</ItemTitle>
        <StarRatingWrapper>
          <div>
            {starRating.map((_, index) => (
              <Star weight="fill" key={index} />
            ))}
            {hasDecimal && <StarHalf weight="fill" />}
          </div>
          <p>
            <span>{rating}</span>/5
          </p>
        </StarRatingWrapper>
        <PriceWrapper>
          {onSale ? (
            <>
              <span className="price-span">
                ${(price * (1 - onSale.percentage / 100)).toFixed(0)}
              </span>
              <OnSaleWrapper>
                <span className="old-price">${price}</span>
                <span className="percentage-tag">{onSale.percentage}%</span>
              </OnSaleWrapper>
            </>
          ) : (
            <span className="price-span">${price}</span>
          )}
        </PriceWrapper>
      </div>
    </Container>
  );
}
