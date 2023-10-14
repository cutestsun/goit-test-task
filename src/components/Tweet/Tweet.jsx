import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  Avatar,
  AvatarWrapper,
  Image,
  ImageWrapper,
  LogoWrapper,
  Separator,
  SeparatorWrapper,
  StatsWrapper,
  TweetWrapper,
  StatsItem,
} from "./Tweet.styled";
import { Logo } from "../Logo/Logo";
import { AvatarBorder } from "../AvatarBorder/AvatarBorder";
import { MainBtn } from "../MainBtn/MainBtn";
import { updateUser } from "../../services/api";
import picture from "src/img/picture.png";
import picture2x from "src/img/picture@2x.png";
import picture3x from "src/img/picture@3x.png";
import avatarPlaceholder from "src/img/avatar-placeholder.jpg";
import { FollowIcon, UnfollowIcon } from "../Icons/Icons";
import { Loader } from "../Loader/Loader";

export const Tweet = ({
  id,
  user,
  followers: initialFollowers,
  tweets,
  avatar,
  followed: initialFollowed,
  updateFollowing,
}) => {
  const [followed, setFollowed] = useState(initialFollowed);
  const [followers, setFollowers] = useState(initialFollowers);
  const [isLoading, setIsLoading] = useState(false);

  const followUser = async () => {
    const updatedData = {
      id,
      user,
      followers: followers + 1,
      tweets,
      avatar,
    };

    try {
      setIsLoading(true);

      await updateUser(id, updatedData);

      setIsLoading(false);

      toast.success(`You have successfully followed to ${user}`, {
        icon: () => <FollowIcon />,
      });
      setFollowed(true);
      updateFollowing(id, true);
      setFollowers((prevState) => prevState + 1);
    } catch (error) {
      toast.error(error);
    }
  };

  const unfollowUser = async () => {
    const updatedData = {
      id,
      user,
      followers: followers - 1,
      tweets,
      avatar,
    };

    try {
      setIsLoading(true);

      await updateUser(id, updatedData);

      setIsLoading(false);

      toast.success(`You have successfully unfollowed from ${user}`, {
        icon: () => <UnfollowIcon />,
      });
      setFollowed(false);
      updateFollowing(id, false);
      setFollowers((prevState) => prevState - 1);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <TweetWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <ImageWrapper>
          <Image
            src={picture}
            srcSet={`${picture} 1x, ${picture2x} 2x, ${picture3x}3x`}
            loading="lazy"
          />
        </ImageWrapper>

        <SeparatorWrapper>
          <Separator />
          <AvatarWrapper>
            <AvatarBorder />
            <Avatar src={avatar || avatarPlaceholder} loading="lazy" />
          </AvatarWrapper>
        </SeparatorWrapper>
        <StatsWrapper>
          <StatsItem>{tweets} tweets</StatsItem>
          <StatsItem>
            {new Intl.NumberFormat().format(followers)} followers
          </StatsItem>
          <MainBtn
            followed={followed}
            followUser={followUser}
            unfollowUser={unfollowUser}
          />
        </StatsWrapper>
      </TweetWrapper>
    </>
  );
};
