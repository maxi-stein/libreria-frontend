import axios from "axios";
import { Author, Book, Publisher } from "../interfaces/entity";

export const url = `${import.meta.env.VITE_API_URL}`;

export const getAuthors = async (): Promise<Author[]> => {
  const response = await axios.get<{ authors: Author[] }>(`${url}/authors`);
  if (response.status >= 400) {
    throw new Error("Network response was not ok");
  }
  return response.data.authors;
};

export const getPublishers = async (): Promise<Publisher[]> => {
  const response = await axios.get<{ publishers: Publisher[] }>(
    `${url}/publishers`
  );
  if (response.status >= 400) {
    throw new Error("Network response was not ok");
  }
  return response.data.publishers;
};

export const getBooks = async (): Promise<Book[]> => {
  const response = await axios.get<{ books: Book[] }>(`${url}/books`);
  if (response.status >= 400) {
    throw new Error("Network response was not ok");
  }
  return response.data.books;
};
