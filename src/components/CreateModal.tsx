import { useState } from "react";
import { Author } from "../interfaces/entity";
import { useCreateData } from "../hooks/useCreateData";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateModal = ({ setShowModal }: Props) => {
  const [author, setAuthor] = useState<Author>({
    dni: "",
    name: "",
    nationality: "",
    surname: "",
  });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createAuthor();
    setShowModal(false);
  };
  const { createAuthor } = useCreateData(author);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAuthor((prevAuthor) => ({ ...prevAuthor, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
      <form
        className="bg-white rounded-md p-4"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <h1 className="bg-white font-bold pb-4">Crear un Autor</h1>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Nombre
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Nombre"
          name="name"
          value={author.name}
          onChange={handleInputChange}
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="surname"
        >
          Apellido
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="surname"
          type="text"
          placeholder="Apellido"
          name="surname"
          value={author.surname}
          onChange={handleInputChange}
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="dni"
        >
          DNI
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="dni"
          type="text"
          placeholder="DNI"
          name="dni"
          value={author.dni}
          onChange={handleInputChange}
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nationality"
        >
          Nacionalidad
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          id="nationality"
          type="text"
          placeholder="Nacionalidad"
          name="nationality"
          value={author.nationality}
          onChange={handleInputChange}
        />
        <button
          className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          Crear
        </button>
      </form>
    </div>
  );
};
