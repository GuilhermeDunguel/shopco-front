import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 4rem;

  max-width: 77.4375rem;
  width: 100%;

  margin: 0px 6.25rem;
  padding: 4.5rem 4rem;
  
  border-radius: 2.5rem;
  background-color: #F0F0F0;

  h2 {
    text-align: center;
  }

  .style-rows {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`

interface StyleWrapperProps {
  minorItem: number;
}

export const StyleWrapper = styled.div<StyleWrapperProps>`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  
  .style-item {
    position: relative;

    flex: 2;

    min-width: 25.4375rem;
    min-height: 18.0625rem;
    
    border-radius: 20px;
    background-position: right;
    background-repeat: no-repeat;
    background-color: white;

    transition: 0.15s;

    &:nth-child(${props => props.minorItem}) {
      flex: 1;
    }

    &.casual {
      background-image: url('/models-styles/casual.png');
    }

    &.formal {
      background-image: url('/models-styles/formal.png');
    }

    &.party {
      background-image: url('/models-styles/party.png');
    }

    &.gym {
      background-image: url('/models-styles/gym.png');
    }

    &:hover {
      cursor: pointer;
      filter: opacity(85%);
      transform: scale(1.05);
      box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.05);
    }

    span {
      position: absolute;
      top: 1.6rem;
      left: 2rem;

      color: black;
      font-size: 2rem;
      font-weight: 700;
    }
  }
`
