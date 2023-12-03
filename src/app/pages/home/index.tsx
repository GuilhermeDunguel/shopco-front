"use client";
import {
  BrandsWeWork,
  Header,
  HighlightBanner,
  HighlightItems,
  WellcomeBanner,
  BrowseByStyle,
  Testimonials,
  Footer,
} from "@/components";
import React, { useState } from "react";
import {
  BrandsWeWorkWrapper,
  BrowseByStyleWrapper,
  FooterWrapper,
  HeaderWrapper,
  HighlightBannerWrapper,
  HighlightItemsWrapper,
  TestimonialsWrapper,
} from "./Home.styled";

export function HomePage() {
  const [wellcomeBannerStatus, setWellcomeBannerStatus] = useState(true);

  const newArrivals = [
    {
      id: "1",
      image: "https://i.imgur.com/uYNtuab.png",
      title: "T-shirt with Tape Details",
      price: 120,
      rating: 4.5,
    },
    {
      id: "2",
      image: "https://i.imgur.com/oAnhZEx.png",
      title: "Skinny Fit Jeans",
      price: 260,
      rating: 3.5,
      onSale: {
        percentage: 20,
      },
    },
    {
      id: "3",
      image: "https://i.imgur.com/iTF8gIX.png",
      title: "Checkered Shirt",
      price: 180,
      rating: 4.5,
    },
    {
      id: "4",
      image: "https://i.imgur.com/mq5Yor6.png",
      title: "Sleeve Striped T-shirt",
      price: 160,
      rating: 4.5,
      onSale: {
        percentage: 30,
      },
    },
  ];

  const topSelling = [
    {
      id: "1",
      image: "https://i.imgur.com/uaAiLq5.png",
      title: "Vertical Striped Shirt",
      price: 212,
      rating: 5,
      onSale: {
        percentage: 20,
      },
    },
    {
      id: "2",
      image: "https://i.imgur.com/adv4nBZ.png",
      title: "Courage Graphic T-shirt",
      price: 145,
      rating: 4,
    },
    {
      id: "3",
      image: "https://i.imgur.com/Tz4jfg5.png",
      title: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3,
    },
    {
      id: "4",
      image: "https://i.imgur.com/5DfEBtv.png",
      title: "Faded Skinny Jeans",
      price: 210,
      rating: 4.5,
    },
  ];

  return (
    <main>
      {wellcomeBannerStatus && (
        <WellcomeBanner closeBannerFunction={setWellcomeBannerStatus} />
      )}

      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <HighlightBannerWrapper>
        <HighlightBanner />
      </HighlightBannerWrapper>
      <BrandsWeWorkWrapper>
        <BrandsWeWork />
      </BrandsWeWorkWrapper>
      <HighlightItemsWrapper>
        <HighlightItems
          title={"NEW ARRIVALS"}
          viewAllHref={""}
          items={newArrivals}
        />
        <HighlightItems
          title={"TOP SELLING"}
          viewAllHref={""}
          items={topSelling}
        />
      </HighlightItemsWrapper>
      <BrowseByStyleWrapper>
        <BrowseByStyle />
      </BrowseByStyleWrapper>
      <TestimonialsWrapper>
        <Testimonials />
      </TestimonialsWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </main>
  );
}
