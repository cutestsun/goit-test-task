import styled from "styled-components";
import { colors } from "../../utils/variables";
import { transition } from "../../utils/transition";

export const Button = styled.button`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
  text-transform: uppercase;
  border: none;
  padding: 14px;
  color: ${colors.mainBtnText};
  background-color: ${({ "data-followed": followed }) =>
    followed ? colors.secondaryBtnBg : colors.mainBtnBg};
  min-width: 196px;
  border-radius: 10.3px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition:
    background-color ${transition},
    transform ${transition};

  &:hover,
  &:focus {
    transform: scale(1.075);
  }

  &:active {
    transform: scale(1);
  }
`;
