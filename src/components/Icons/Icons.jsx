import { FaUserMinus, FaUserPlus } from "react-icons/fa";
import { IconWrapper } from "./Icons.styled";

export const FollowIcon = () => {
  return (
    <IconWrapper>
      <FaUserPlus size={13} />
    </IconWrapper>
  );
};

export const UnfollowIcon = () => {
  return (
    <IconWrapper>
      <FaUserMinus size={13} />
    </IconWrapper>
  );
};
