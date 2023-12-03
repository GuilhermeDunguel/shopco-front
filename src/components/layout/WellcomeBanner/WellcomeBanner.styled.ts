import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0.5rem;

  background-color: black;

  button {
    position: absolute;
    right: 6.25rem;
    
    line-height: 0;

    &:hover {
      cursor: pointer;
    }
  }

  .advice-span {
    color: #fff;
    font-size: 0.875rem;
    font-weight: 200;

    .advice-cta {
      color: #fff;
      font-weight: 400;
    }
  }
`

