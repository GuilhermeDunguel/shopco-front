import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  max-width: 18.4375rem;
  max-height: 25.5rem;

  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    filter: opacity(85%);
    transform: scale(1.05);  
  }

  .item-details-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

export const ItemTitle = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`

interface ItemImageProps {
  imageSrc: string
}

export const ItemImage = styled.div<ItemImageProps>`
  width: 100%;
  height: 18.625rem;

  border-radius: 1.25rem;
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-position: center;
  
  background-color: #F0EEED;
`

export const StarRatingWrapper = styled.div`
  display: flex;
  align-items: center; 
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    
    svg {
      color: #FFC633;
    }
  }

  p {
    font-size: 0.875rem;
    color: #666666;
    span {
      color: black;
    }
  }
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  .price-span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const OnSaleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  .old-price {
    color: #999999;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: line-through;
  }

  .percentage-tag {
    padding: 0.375rem 0.875rem;

    color: #FF3333;
    font-size: 0.75rem;
    font-weight: 500;

    border-radius: 999px;
    background-color: #FFEBEB;
  }
`