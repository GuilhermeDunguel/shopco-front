import { styled } from "styled-components";

export const Container = styled.footer`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 8.75rem 6.25rem 5.5rem 6.25rem;

  max-width: 90rem;
  width: 100%;


  background-color: #f0f0f0;
`

export const StayUpdated = styled.div`
  position: absolute;
  top: -20%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  max-width: 77.5rem;
  width: 100%;

  padding: 2rem 4rem;

  border-radius: 1.25rem;
  background-color: black;

  span {
    color: white;
    font-size: 2.5rem;
    font-weight: 900;

    max-width: 34.375rem;
  }
`

export const CTANewsLetter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`

export const BrandingWrapper = styled.div`
  display: flex;
    align-items: flex-start;
    flex-direction: column;

    gap: 1.5rem;

    span {
      color: #606060;
      font-size: 0.875rem;
      line-height: 1.375rem;

      max-width: 16.9375rem;
    }
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Branding = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.1875rem;
`


export const Links = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.625rem;

  span {
    color: black;
    font-size: 1rem;
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.25rem;
    

    a {
      color: #606060;
      font-size: 1rem;
      text-decoration: none;
      
    }
  }
`

export const CopyAndPaymentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5625rem 0;
  margin-top: 3.125rem;

  width: 100%;

  border-top: 1px solid #D8D8D8;

  span {
    color: #606060;
    font-size: 0.875rem;
  }
`