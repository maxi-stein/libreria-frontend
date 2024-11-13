import { Author } from "../interfaces/entity";
import { axiosInstance as axios } from "./axiosInstance";

export const postAuthors = async (author: Author) => {
  delete author._id;
  console.log("haciendo axios");
  const response = await axios.post(`/authors`, author);
  if (response.status >= 400) {
    console.log("problemas");
    throw new Error("Network response was not ok");
  }

  console.log("La respuesta es:");
  console.log(response);
  return response.data.author;
};
