import styled from "styled-components";
import { colors } from "../../utils/variables";

export const TweetWrapper = styled.li`
  position: relative;
  border-radius: 20px;
  background-image: linear-gradient(
    115deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
  max-width: 380px;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 168px;
  object-fit: contain;
`;

export const ImageWrapper = styled.div`
  padding: 28px 36px 18px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${colors.mainAccent};
  box-shadow:
    0px 3.43693px 2.5777px 0px #fbf8ff inset,
    0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px 0px #ae7be3 inset;
`;

export const SeparatorWrapper = styled.div`
  position: relative;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;

export const Avatar = styled.img`
  position: absolute;
  bottom: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${colors.mainAccent};
`;

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 36px 36px;
`;

export const StatsItem = styled.p`
  text-transform: uppercase;
  line-height: 1.2;

  &:first-child {
    margin-bottom: 16px;
  }

  &:last-of-type {
    margin-bottom: 26px;
  }
`;
