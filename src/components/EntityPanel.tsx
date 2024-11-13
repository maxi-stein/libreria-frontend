import { useState } from "react";
import { useHomePanel } from "../hooks/useHomePanel";
import { EntityName, Entity } from "../interfaces/entity";
import { CreateModal } from "./CreateModal";

interface Props {
  entityArray: Entity[];
  entityName: EntityName;
}

export const EntityPanel = ({ entityArray, entityName }: Props) => {
  const { getPanelContent, getTitleByName } = useHomePanel();

  const [showModal, setShowModal] = useState(false);
  const handleCreateEntity = () => {
    setShowModal(true);
  };

  return (
    <div className="m-4 p-4 border-indigo-600 rounded-lg border-2 ">
      <h2 className="text-2xl bg-gradient-to-tl from-blue-100 to-indigo-200 rounded-md font-medium px-5 py-1 grid grid-cols-[3fr,1fr] items-baseline">
        {getTitleByName(entityName)}
        <button
          className="bg-white border-4 border-indigo-600 rounded-full w-fit px-2 my-2 transition-colors duration-500
        hover:bg-indigo-600 hover:text-white hover:border-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
          disabled={entityName !== "authors"}
          onClick={() => handleCreateEntity()}
        >
          Crear
        </button>
      </h2>
      {showModal && <CreateModal setShowModal={setShowModal} />}
      <div className="grid grid-cols-2 ">
        {getPanelContent(entityName, entityArray)}
      </div>
    </div>
  );
};
