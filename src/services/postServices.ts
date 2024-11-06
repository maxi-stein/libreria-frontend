import { Author } from "../interfaces/entity";
import { axiosInstance as axios } from "./axiosInstance";

export const postAuthors = async (author: Author) => {
  delete author._id;
  const response = await axios.post(`/authors`, author);
  if (response.status >= 400) {
    throw new Error("Network response was not ok");
  }
  return response.data.author;
};
