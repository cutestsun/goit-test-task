import { Button } from "./FollowBtn.styled";

export const FollowBtn = ({ followed = false, followUser, unfollowUser }) => {
  return (
    <Button
      data-followed={followed}
      type="button"
      onClick={followed ? unfollowUser : followUser}
      aria-label={followed ? "following" : "follow"}
    >
      {followed ? "following" : "follow"}
    </Button>
  );
};
