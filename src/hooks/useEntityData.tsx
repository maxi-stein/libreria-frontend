import { useQuery } from "@tanstack/react-query";
import { getAuthors, getBooks, getPublishers } from "../services/apiServices";

const fetchAuthors = async () => {
  const response = await getAuthors();
  if (response.length === 0) throw new Error("No hay autores");
  return response;
};

const fetchPublishers = async () => {
  const response = await getPublishers();
  if (response.length === 0) throw new Error("No hay editores");
  return response;
};

const fetchBooks = async () => {
  const response = await getBooks();
  if (response.length === 0) throw new Error("No hay libros");
  return response;
};

export const useEntityData = () => {
  const {
    data: authors,
    isLoading: loadingAuthors,
    refetch: refetchAuthors,
  } = useQuery({
    queryKey: ["authors"],
    queryFn: fetchAuthors,
  });

  const { data: publishers, isLoading: loadingPublishers } = useQuery({
    queryKey: ["publishers"],
    queryFn: fetchPublishers,
  });

  const { data: books, isLoading: loadingBooks } = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  const isLoading = loadingAuthors || loadingPublishers || loadingBooks;

  return {
    entityData: {
      authors: authors || [],
      publishers: publishers || [],
      books: books || [],
    },
    refetchAuthors,
    isLoading,
  };
};
