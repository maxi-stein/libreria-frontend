import { Author, Publisher } from "../interfaces/entity";

interface Props {
  id: string;
  authors: Author[];
  publisher: Publisher;
  title: string;
  category: string;
  price: number;
  description: string;
}

export const BookCard = ({
  id,
  authors,
  publisher,
  title,
  category,
  price,
  description,
}: Props) => {
  return (
    <div
      className="text-black py-3 border-lime-500 border m-3 pl-3 rounded-lg hover:border-lime-200 hover:bg-slate-50 hover:shadow-md transition-all duration-300"
      id={id}
    >
      <div className="font-bold">Titulo: </div>
      {title}
      <br />
      <div className="font-bold">Categoría: </div>
      {category}
      <br />
      <div className="font-bold">Descripción: </div>
      {description}
      <br />
      <div className="font-bold">Editorial: </div>
      {publisher.name}
      <br />
      <div className="font-bold">Autores: </div>
      {authors.map((author) => author.name + " " + author.surname).join(", ")}
      <br />
      <div className="font-bold">{`$ ${price}`}</div>
    </div>
  );
};
