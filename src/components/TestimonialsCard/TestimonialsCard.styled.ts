import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.75rem;

  min-height: 15rem;
  max-width: 25rem;
  height: 100%;
  width: 100%;

  padding: 2rem 1.75rem;
  border: 1px solid #e6e6e6;
  border-radius: 20px;
`

export const StarRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`

export const UserName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    font-size: 1.25rem;
    font-weight: 700;
  }
`

export const UserDepoiment = styled.p`
  color: #666666;
  font-size: 1rem;
`