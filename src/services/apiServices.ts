import { Author, Book, Publisher } from "../interfaces/entity";
import { axiosInstance as axios } from "./axiosInstance";

export const getAuthors = async (): Promise<Author[]> => {
  const response = await axios.get<{ authors: Author[] }>('/authors');
  if (response.status >= 400) {
    throw new Error("Network response was not ok");
  }
  return response.data.authors;
};

export const getPublishers = async (): Promise<Publisher[]> => {
  const response = await axios.get<{ publishers: Publisher[] }>(
    `/publishers`
  );
  if (response.status >= 400) {
    throw new Error("Network response was not ok");
  }
  return response.data.publishers;
};

export const getBooks = async (): Promise<Book[]> => {
  const response = await axios.get<{ books: Book[] }>(`/books`);
  if (response.status >= 400) {
    throw new Error("Network response was not ok");
  }
  return response.data.books;
};
