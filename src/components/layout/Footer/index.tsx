import React from "react";
import {
  Branding,
  BrandingWrapper,
  CTANewsLetter,
  Container,
  Content,
  CopyAndPaymentsWrapper,
  Links,
  SocialLinks,
  StayUpdated,
} from "./Footer.styled";
import { DefaultButtons, IconButtons, SearchField } from "@/components";
import Image from "next/image";
import {
  Envelope,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  MagnifyingGlass,
  TwitterLogo,
} from "@phosphor-icons/react";
import { SocialButtons } from "@/components/Buttons/SocialButtons";
import Link from "next/link";

export function Footer() {
  return (
    <Container>
      <StayUpdated>
        <span>STAY UPTO DATE ABOUT OUR LATEST OFFERS</span>
        <CTANewsLetter>
          <SearchField
            icon={<Envelope size={24} />}
            placeholder={"Enter your email address"}
          />
          <DefaultButtons secondary label={"Subscribe to Newsletter"} />
        </CTANewsLetter>
      </StayUpdated>
      <Content>
        <Branding>
          <BrandingWrapper>
            <Image src={"/logo.svg"} width={150} height={25} alt={""} />
            <span>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </span>
          </BrandingWrapper>
          <SocialLinks>
            <SocialButtons
              icon={<TwitterLogo size={20} weight="fill" />}
              onClick={() => console.log()}
            />
            <SocialButtons
              icon={<FacebookLogo size={20} weight="fill" />}
              onClick={() => console.log()}
            />
            <SocialButtons
              icon={<InstagramLogo size={20} weight="fill" />}
              onClick={() => console.log()}
            />
            <SocialButtons
              icon={<GithubLogo size={20} weight="fill" />}
              onClick={() => console.log()}
            />
          </SocialLinks>
        </Branding>
        <Links>
          <span>COMPANY</span>
          <div>
            <Link href={""}>About</Link>
            <Link href={""}>Features</Link>
            <Link href={""}>Works</Link>
            <Link href={""}>Career</Link>
          </div>
        </Links>
        <Links>
          <span>HELP</span>
          <div>
            <Link href={""}>Customer Support</Link>
            <Link href={""}>Delivery Details</Link>
            <Link href={""}>Terms & Conditions</Link>
            <Link href={""}>Privacy Policy</Link>
          </div>
        </Links>
        <Links>
          <span>FAQ</span>
          <div>
            <Link href={""}>Account</Link>
            <Link href={""}>Manage Deliveries</Link>
            <Link href={""}>Orders</Link>
            <Link href={""}>Payments</Link>
          </div>
        </Links>
        <Links>
          <span>RESOURCES</span>
          <div>
            <Link href={""}>Free eBook</Link>
            <Link href={""}>Development Tutorial</Link>
            <Link href={""}>How to - Blog</Link>
            <Link href={""}>Youtube Playlist</Link>
          </div>
        </Links>
      </Content>
      <CopyAndPaymentsWrapper>
        <span>Shop.co © 2000-2023, All Rights Reserved</span>
        <div>
          <Image src={"/payment/visa.png"} width={60} height={40} alt={""} />
          <Image
            src={"/payment/mastercard.png"}
            width={60}
            height={40}
            alt={""}
          />
          <Image src={"/payment/paypal.png"} width={60} height={40} alt={""} />
          <Image
            src={"/payment/applepay.png"}
            width={60}
            height={40}
            alt={""}
          />
          <Image
            src={"/payment/googlepay.png"}
            width={60}
            height={40}
            alt={""}
          />
        </div>
      </CopyAndPaymentsWrapper>
    </Container>
  );
}
