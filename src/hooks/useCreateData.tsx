import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postAuthors } from "../services/postServices";
import { Author } from "../interfaces/entity";

export const useCreateData = (author: Author) => {
  const client = useQueryClient();
  const { mutate: createAuthor } = useMutation({
    mutationKey: ["create-author"],
    mutationFn: () => postAuthors(author),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["authors"] });
    },
  });

  return { createAuthor };
};
