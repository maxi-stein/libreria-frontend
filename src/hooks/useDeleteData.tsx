import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const deleteAuthorById = async (id: string) => {
  const response = await axios.delete(`http://localhost:3001/authors/${id}`);
  if (response.status >= 400) {
    throw new Error("Network response was not ok");
  }
  return response.data;
};

export const useDeleteData = (id: string, entityName: string) => {
  const client = useQueryClient();
  const { mutate: deleteAuthor } = useMutation({
    mutationKey: ["delete-author"],
    mutationFn: () => deleteAuthorById(id),
    onSuccess: () => {
      switch (entityName) {
        case "authors":
          client.invalidateQueries({ queryKey: ["authors"] });
          break;
        default:
          client.invalidateQueries({ queryKey: ["authors"] });
          break;
      }
    },
  });
  //   const { mutate: mutatePublisher } = useMutation({
  //     mutationKey: ["delete-publisher"],
  //     mutationFn: (id: string) => {},
  //   });
  //   const { mutate: mutatBook } = useMutation({
  //     mutationKey: ["delete-book"],
  //     mutationFn: (id: string) => {},
  //   });
  switch (entityName) {
    case "authors":
      return { deleteAuthor };
    default:
      return { deleteAuthor };
  }
};
