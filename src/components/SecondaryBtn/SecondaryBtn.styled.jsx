import styled from "styled-components";
import { colors } from "../../utils/variables";
import { transition } from "../../utils/transition";

export const Button = styled.button`
  display: inline-flex;
  align-items: center;

  column-gap: 8px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
  text-transform: uppercase;
  border: none;
  padding: 14px 24px;
  color: ${colors.loadMoreBtnText};
  background-color: ${colors.loadMoreBtnBg};
  /* min-width: 180px; */
  border-radius: 10.3px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition:
    background-color ${transition},
    transform ${transition};
  margin: 0 auto;

  &:first-child {
    margin-left: unset;
  }

  &:hover,
  &:focus {
    transform: scale(1.075);
  }

  &:active {
    transform: scale(1);
  }
`;
