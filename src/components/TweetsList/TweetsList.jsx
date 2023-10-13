import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Tweet } from "../Tweet/Tweet";
import { List, Wrapper } from "./TweetsList.styled";
import { getAllUsers } from "../../services/api";
import { updateArray } from "../../helpers/updateArray";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";

const STORAGE_KEY = import.meta.env.VITE_STORAGE_KEY;
const ITEMS_PER_PAGE = 3;

export const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState(
    () => JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  );
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
        const newFollowedUsers = data.map((item) => ({
          id: item.id,
          followed: false,
        }));

        const resultFollowedUsers = updateArray(
          followedUsers,
          newFollowedUsers
        );

        setFollowedUsers(resultFollowedUsers);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(resultFollowedUsers));
      })
      .catch(() =>
        toast.error("Something went wrong. Please try again later.")
      );
  }, []);

  const updateFollowing = (id, followed) => {
    const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    const updatedData = storedData.map((item) => {
      if (item.id === id) {
        return { ...item, followed };
      }

      return item;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  };

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderedUsers = users.slice(0, currentPage * ITEMS_PER_PAGE);

  return (
    <Wrapper>
      <List>
        {renderedUsers.map(({ id, user, tweets, followers, avatar }, index) => (
          <Tweet
            id={id}
            key={id}
            user={user}
            followers={followers}
            tweets={tweets}
            avatar={avatar}
            followed={followedUsers[index].followed}
            updateFollowing={updateFollowing}
          />
        ))}
      </List>
      {renderedUsers.length < users.length && (
        <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
      )}
    </Wrapper>
  );
};
