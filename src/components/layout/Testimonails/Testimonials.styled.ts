import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  max-width: 90rem;
  width: 100%;

  padding: 0 6.25rem;
`

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`