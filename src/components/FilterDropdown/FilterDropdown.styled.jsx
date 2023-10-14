import styled from "styled-components";
import Select from "react-select";
import { transition } from "../../utils/transition";
import { colors } from "../../utils/variables";

export const StyledSelect = styled(Select)`
  & .Select__control {
    max-width: 200px;
    background-color: ${colors.secondaryBtnBg};
    border: none;
    box-shadow: none;
    cursor: pointer;
    padding: 14px;
    border-radius: 12px;

    svg {
      transform: rotate(0deg);
      transition: transform ${transition};
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-180deg);
      }
    }
  }

  & .Select__value-container {
    padding: 0;
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: ${colors.mainAccent};
    padding: 0;
    cursor: pointer;

    &:hover {
      color: ${colors.mainAccent};
    }
  }

  & .Select__input-container {
    color: ${colors.mainAccent};
    margin: 0;
    padding: 0;
  }

  & .Select__input {
    line-height: 1.285 !important;
  }

  & .Select__placeholder,
  & .Select__single-value {
    color: ${colors.mainAccent};
    line-height: 1.285;
    margin: 0;
    width: 100%;
    padding-right: 12px;
    text-transform: uppercase;
    font-size: 18px;
  }

  & .Select__menu {
    margin: 0;
    margin-top: 4px;
    border-radius: 12px;
    background-color: ${colors.secondaryBtnBg};
    overflow: hidden;
  }

  & .Select__menu-list {
    padding: 12px 8px;
    border-radius: 12px;
    background-color: ${colors.secondaryBtnBg};
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    max-height: 300px;
  }

  & .Select__option {
    padding: 8px;
    border-radius: 12px;
    color: ${colors.mainAccent};
    transition:
      color ${transition},
      background-color ${transition},
      transform ${transition};
    background-color: transparent;
    cursor: pointer;
    line-height: 1.285;
    font-size: 18px;
    overflow-wrap: break-word;
    text-transform: uppercase;

    &:hover,
    &:focus {
      background-color: ${colors.dropdownOptionHoverBg};
    }

    &:active {
      color: ${colors.secondaryBtnBg};
      background-color: ${colors.mainAccent};
    }
  }

  & .Select__option--is-selected {
    color: ${colors.secondaryBtnBg};
    background-color: ${colors.mainAccent};

    &:hover,
    &:focus {
      background-color: ${colors.mainAccent};
    }
  }
`;
