import { styled } from "styled-components";

interface ContainerProps {
  secondary: boolean;
}

export const Container = styled.button<ContainerProps>`
  padding: 1rem 3.375rem;
  color: ${props => props.secondary ? 'black' : 'white'};
  font-size: 1rem;
  font-weight: 500;

  border-radius: 999px;
  border: 1px solid ${props => props.secondary ? '#E6E6E6' : 'black'};

  background-color: ${props => props.secondary ? 'white' : 'black'};
  transition: 0.15s;

  &:hover {
    filter: opacity(85%);
    transform: scale(1.05);
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.05);
  }
`