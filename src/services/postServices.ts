import axios from "axios";
import { Author } from "../interfaces/entity";
import { url } from "../services/apiServices";

export const postAuthors = async (author: Author) => {
  delete author._id;
  const response = await axios.post(`${url}/authors`, author);
  if (response.status >= 400) {
    throw new Error("Network response was not ok");
  }
  return response.data.author;
};
