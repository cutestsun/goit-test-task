import styled from "styled-components";
import { colors } from "../../utils/variables";

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  padding-left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: ${colors.toastIcon};
  background-color: ${colors.toastIconBg};
`;
