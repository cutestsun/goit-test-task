import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { toast } from "react-toastify";
import { FilterDropdown } from "../../components/FilterDropdown/FilterDropdown";
import { SecondaryBtn } from "../../components/SecondaryBtn/SecondaryBtn";
import { TweetsList } from "../../components/TweetsList/TweetsList";
import { updateArray } from "../../helpers/updateArray";
import { Loader } from "../../components/Loader/Loader";
import { useResize } from "../../hooks/useResize";
import { getAllUsers } from "../../services/api";
import { Wrapper } from "./Tweets.styled";

const STORAGE_KEY = import.meta.env.VITE_STORAGE_KEY;

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState(
    () => JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  );
  const [filterOption, setFilterOption] = useState("all");
  const [currentPage, setCurrentPage] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { width } = useResize();
  const ITEMS_PER_PAGE = width > 1690 ? 4 : width > 1275 ? 3 : 2;

  const filteredUsers = users.filter((user) => {
    switch (filterOption) {
      case "all":
        return true;
      case "follow":
        return !followedUsers.find(({ id }) => user.id === id).followed;
      case "followings":
        return followedUsers.find(({ id }) => user.id === id).followed;

      default:
        return false;
    }
  });

  const renderedUsers = filteredUsers.slice(0, currentPage * ITEMS_PER_PAGE);

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

    setFollowedUsers(updatedData);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  };

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Wrapper>
        {isLoading && <Loader />}
        <Link to="/">
          <SecondaryBtn>
            <HiChevronLeft size={26} />
            Back
          </SecondaryBtn>
        </Link>
        <FilterDropdown setFilterOption={setFilterOption} />
        {!renderedUsers.length && "Sorry, there are no users for this request"}
        <TweetsList
          followedUsers={followedUsers}
          renderedUsers={renderedUsers}
          updateFollowing={updateFollowing}
          isLoading={isLoading}
          error={error}
        />
        {renderedUsers.length < filteredUsers.length && (
          <SecondaryBtn onClick={loadMore}>Load More</SecondaryBtn>
        )}
      </Wrapper>
    </>
  );
}
