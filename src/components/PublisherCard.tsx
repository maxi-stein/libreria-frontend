interface Props {
  id: string;
  name: string;
  address: string;
  cuit: string;
}

export const PublisherCard = ({ id, name, address, cuit }: Props) => {
  return (
    <div
      className="text-black py-3 border-lime-500 border m-3 pl-3 rounded-lg hover:border-lime-200 hover:bg-slate-50 hover:shadow-md transition-all duration-300"
      id={id}
    >
      <div className="font-bold">Nombre: </div>
      {name}
      <br />
      <div className="font-bold">Direccón: </div>
      {address}
      <br />
      <div className="font-bold">CUIT: </div>
      {cuit}
    </div>
  );
};
