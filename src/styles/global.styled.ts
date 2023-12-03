'use client'
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    border: none;
    background: none;

    &:hover {
      cursor: pointer;
    }
  }

  input {
    border: none;
    background: none;
    outline: none;
  }
`

export const H2 = styled.h2`
  font-size: 3rem;
  font-weight: 900;
`