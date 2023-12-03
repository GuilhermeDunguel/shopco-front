import React from "react";
import {
  AdviceCopyWrapper,
  AdviceParagraph,
  AdviceTitle,
  Container,
  HighlightDatas,
} from "./HighlightBanner.styled";
import { DefaultButtons } from "../..";

export function HighlightBanner() {
  return (
    <Container>
      <AdviceCopyWrapper>
        <AdviceTitle>FIND CLOTHES THAT MATCHES YOUR STYLE</AdviceTitle>
        <AdviceParagraph>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </AdviceParagraph>
        <DefaultButtons label={"Shop Now"} />
      </AdviceCopyWrapper>
      <HighlightDatas>
        <div className="HighlightDataContainer">
          <strong>200+</strong>
          <p>International Brands</p>
        </div>
        <div className="HighlightDataContainer">
          <strong>2,000+</strong>
          <p>High-Quality Products</p>
        </div>
        <div className="HighlightDataContainer">
          <strong>30,000+</strong>
          <p>Happy Customers</p>
        </div>
      </HighlightDatas>
    </Container>
  );
}
