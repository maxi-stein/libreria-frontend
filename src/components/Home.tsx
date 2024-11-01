import { useEntityData } from "../hooks/useEntityData";
import { EntityName } from "../interfaces/entity";
import { EntityPanel } from "./EntityPanel";

export const Home = () => {
  const entityNames: Array<EntityName> = ["authors", "publishers", "books"];
  const { entityData, isLoading } = useEntityData();

  return (
    <main className="flex justify-center bg-gradient-to-tl from-blue-200 via-purple-200 to-indigo-200 h-auto py-14 flex-col items-center font-mono">
      <h1 className="text-3xl bg-indigo-600 rounded-t-xl font-black text-white p-2 text-center h-14 w-7/12 shadow-2xl">
        CRUD DE LIBRERÍA
      </h1>
      <div className="bg-white w-7/12 shadow-2xl">
        {isLoading ? (
          <div>Cargando...</div>
        ) : (
          entityNames.map((name, index) => {
            return (
              <EntityPanel
                entityName={name}
                entityArray={entityData[`${name}`]}
                key={index}
              />
            );
          })
        )}
      </div>
    </main>
  );
};
