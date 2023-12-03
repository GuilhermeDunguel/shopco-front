'use client'
import { styled } from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;

  padding: 0 6.25rem;

  max-width: 90rem;
  width: 100%;
  height: 41.4375rem;
  
  background-image: url('/banner.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-clip: border-box;
`

export const AdviceTitle = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  max-width: 35.625rem;
`

export const AdviceParagraph = styled.p`
  color: #616060;
  font-size: 1rem;
  font-weight: normal;
  max-width: 36.875rem;
`

export const HighlightDatas = styled.div`
  display: flex;
  align-items: center;

  strong {
    font-size: 2.5rem;
  }

  p {
    color: #616060;
    font-size: 1rem;
  }
 
  .HighlightDataContainer {
    padding: 0px 2rem;
    
    &:first-child {
      padding: 0px 2rem 0px 0px;
    }

    &:not(:last-child) {
      border-right: 1px solid #DAD8D9;
    }
  }
`

export const AdviceCopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`