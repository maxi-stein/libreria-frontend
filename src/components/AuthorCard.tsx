import { MdCancel } from "react-icons/md";
import { useDeleteData } from "../hooks/useDeleteData";

interface Props {
  id: string;
  name: string;
  dni: string;
  nationality: string;
}

export const AuthorCard = ({ id, name, dni, nationality }: Props) => {
  const { deleteAuthor } = useDeleteData(id, "authors");
  const handleDelete = () => {
    deleteAuthor();
  };

  return (
    <div
      className="grid grid-cols-[4fr,1fr] text-black py-3 border-lime-500 border m-3 pl-3 rounded-lg hover:border-lime-200 hover:bg-slate-50 hover:shadow-md transition-all duration-300"
      id={id}
    >
      <div>
        <div className="font-bold">Nombre: </div> {name}
        <br />
        <div className="font-bold">DNI: </div>
        {dni}
        <br />
        <div className="font-bold">Nacionalidad: </div>
        {nationality}{" "}
      </div>

      <div className="flex justify-center">
        <MdCancel
          style={{ color: "red", fontSize: "1.7rem", cursor: "pointer" }}
          onClick={() => handleDelete()}
        />
      </div>
    </div>
  );
};
