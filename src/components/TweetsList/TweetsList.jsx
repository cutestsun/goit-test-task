import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { HiChevronLeft } from "react-icons/hi";
import { Tweet } from "../Tweet/Tweet";
import { List, Wrapper } from "./TweetsList.styled";
import { getAllUsers } from "../../services/api";
import { updateArray } from "../../helpers/updateArray";
import { SecondaryBtn } from "../SecondaryBtn/SecondaryBtn";
import { Loader } from "../Loader/Loader";
import { Link } from "react-router-dom";
import { useResize } from "../../hooks/useResize";

const STORAGE_KEY = import.meta.env.VITE_STORAGE_KEY;

export const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState(
    () => JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  );
  const [currentPage, setCurrentPage] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { width } = useResize();
  const ITEMS_PER_PAGE = width < 1668 ? 3 : width < 1252 ? 2 : 4;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await getAllUsers();

        setUsers(users);

        const newFollowedUsers = users.map((item) => ({
          id: item.id,
          followed: false,
        }));

        const resultFollowedUsers = updateArray(
          followedUsers,
          newFollowedUsers
        );

        setFollowedUsers(resultFollowedUsers);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(resultFollowedUsers));
      } catch (error) {
        setError(error);
        toast.error("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
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
      <Link to="/">
        <SecondaryBtn>
          <HiChevronLeft size={26} />
          Back
        </SecondaryBtn>
      </Link>
      <List>
        {isLoading && <Loader />}

        {!isLoading &&
          !error &&
          renderedUsers.map(
            ({ id, user, tweets, followers, avatar }, index) => (
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
            )
          )}
      </List>
      {renderedUsers.length < users.length && (
        <SecondaryBtn onClick={loadMore}>Load More</SecondaryBtn>
      )}
    </Wrapper>
  );
};
