import { styled } from "styled-components";

export const Container = styled.button`
  padding: 0.625rem;

  color: black;
  line-height: 0;

  border-radius: 999px;
  border: 1px solid #CCCCCC;
  background-color: white;

  transition: 0.15s;

  &:hover {
    color: white;
    border: 1px solid black;
    background-color: black;

    filter: opacity(85%);
    transform: scale(1.05);
  }
  `