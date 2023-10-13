import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

axios.defaults.baseURL = BASE_URL;

export const getAllUsers = async () => {
  const { data } = await axios.get("/users");

  return data;
};

export const getUserById = async (id) => {
  const { data } = await axios.get(`/users/${id}`);

  return data;
};

export const updateUser = async (id, updatedData) => {
  const { data } = await axios.put(`/users/${id}`, updatedData);

  return data;
};
