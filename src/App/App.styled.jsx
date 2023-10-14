import styled from "styled-components";

export const AppWrapper = styled.div`
  min-width: 320px;
  padding: 20px;
  min-height: 100%;
  background-image: linear-gradient(
    150deg,
    rgba(87, 54, 163, 1) 0%,
    rgba(206, 118, 236, 1) 50%,
    rgba(235, 216, 255, 1) 100%
  );

  @media screen and (min-width: 836px) {
    padding: 32px;
  }
`;
