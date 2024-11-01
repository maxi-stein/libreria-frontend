import { AuthorCard } from "../components/AuthorCard";
import { BookCard } from "../components/BookCard";
import { PublisherCard } from "../components/PublisherCard";
import {
  EntityName,
  Entity,
  Author,
  Publisher,
  Book,
} from "../interfaces/entity";

export const useHomePanel = () => {
  const handleCreate = (entityName: EntityName) => {
    switch (entityName) {
      case "authors":
        break;
      default:
        break;
    }
  };

  const getTitleByName = (name: EntityName) => {
    switch (name) {
      case "authors":
        return "AUTORES";
      case "publishers":
        return "EDITORIALES";
      case "books":
        return "LIBROS";
    }
  };

  const getPanelContent = (entityName: EntityName, entityArray: Entity[]) => {
    switch (entityName) {
      case "authors":
        const authors = entityArray as Author[];
        return authors.map((author) => (
          <AuthorCard
            key={author._id}
            id={author._id || ""}
            name={author.name + " " + author.surname}
            dni={author.dni}
            nationality={author.nationality}
          />
        ));
      case "publishers":
        const publishers = entityArray as Publisher[];
        return publishers.map((publisher) => (
          <PublisherCard
            key={publisher._id}
            id={publisher._id}
            name={publisher.name}
            address={publisher.address}
            cuit={publisher.cuit}
          />
        ));
      case "books":
        const books = entityArray as Book[];
        return books.map((book) => (
          <BookCard
            key={book._id}
            id={book._id}
            authors={book.authors}
            publisher={book.publisher}
            title={book.title}
            category={book.category}
            price={book.price}
            description={book.description}
          />
        ));
    }
  };

  return { getTitleByName, getPanelContent, handleCreate };
};
