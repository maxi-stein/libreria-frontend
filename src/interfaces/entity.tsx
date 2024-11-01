export type Entity = Author | Book | Publisher;
export type EntityName = "authors" | "books" | "publishers";

export interface Author {
  _id?: string;
  name: string;
  surname: string;
  dni: string;
  nationality: string;
}

export interface Publisher {
  _id: string;
  name: string;
  address: string;
  cuit: string;
}

export interface Book {
  _id: string;
  authors: Author[];
  publisher: Publisher;
  title: string;
  category: string;
  price: number;
  releaseDate: Date;
  description: string;
}
