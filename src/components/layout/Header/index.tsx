"use client";

import {
  MagnifyingGlass,
  ShoppingCartSimple,
  UserCircle,
} from "@phosphor-icons/react";
import { HeaderButtons, IconButtons, SearchField } from "../../index";
import { Container, NavMenu, UserAndCartWrapper } from "./Header.styled";
import Image from "next/image";

export function Header() {
  return (
    <Container>
      <Image src={"/logo.svg"} width={160} height={22} quality={100} alt="" />
      <NavMenu>
        <HeaderButtons label={"Shop"} hasDropdown={true} />
        <HeaderButtons label={"On Sale"} hasDropdown={false} />
        <HeaderButtons label={"New Arrivals"} hasDropdown={false} />
        <HeaderButtons label={"Brands"} hasDropdown={false} />
      </NavMenu>
      <SearchField
        icon={<MagnifyingGlass size={24} />}
        placeholder={"Search for products..."}
      />
      <UserAndCartWrapper>
        <IconButtons
          icon={<ShoppingCartSimple size={24} weight="bold" />}
          onClick={() => console.log()}
        />
        <IconButtons
          icon={<UserCircle size={24} weight="bold" />}
          onClick={() => console.log()}
        />
      </UserAndCartWrapper>
    </Container>
  );
}
