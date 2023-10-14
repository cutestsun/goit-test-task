import { Tweet } from "../Tweet/Tweet";
import { List } from "./TweetsList.styled";

export const TweetsList = ({
  followedUsers,
  renderedUsers,
  updateFollowing,
  isLoading,
  error,
}) => {
  return (
    <List>
      {!isLoading &&
        !error &&
        renderedUsers.map(({ id, user, tweets, followers, avatar }) => (
          <Tweet
            id={id}
            key={id}
            user={user}
            followers={followers}
            tweets={tweets}
            avatar={avatar}
            followed={followedUsers.find((user) => user.id === id).followed}
            updateFollowing={updateFollowing}
          />
        ))}
    </List>
  );
};
