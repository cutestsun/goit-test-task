import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 380px);
  grid-column-gap: 36px;
  grid-row-gap: 24px;
  justify-content: center;

  @media screen and (max-width: 419.98px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
