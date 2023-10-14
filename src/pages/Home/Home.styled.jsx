import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 40px;
`;

export const Title = styled.h1`
  font-size: 72px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 498.98px) {
    font-size: 14.3vw;
  }

  @media screen and (max-width: 319.98px) {
    font-size: 45.8px;
  }
`;

export const Image = styled.img`
  width: 460px;

  @media screen and (max-width: 498.98px) {
    width: 100%;
  }
`;

export const Description = styled.p`
  font-size: 26px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-transform: capitalize;

  @media screen and (max-width: 498.98px) {
    font-size: 5.2vw;
  }

  @media screen and (max-width: 319.98px) {
    font-size: 16.65px;
  }
`;
