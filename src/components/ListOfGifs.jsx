import GifCard from "./GifCard";
import { useContext } from "react";
import { GifContext } from "../context/GifContext";

function ListOfGifs() {
  const { gif } = useContext(GifContext);
  if (gif.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center ">
        No hay gifs aun
      </h1>
    );
  }
  return (
    <main className="bg-platinum rounded-lg mx-auto p-4  mt-3 max-w-2xl max-[680px]:w-96 max-[395px]:w-80 max-[337px]:w-60 max-[260px]:w-40 ">
      <h1 className="text-red my-4  inline-block font-bold">
        LOS GIFS ENCONTRADOS ....
      </h1>
      {gif.slice(0, 5).map((element) => {
        return <GifCard key={element.id} data={element} />;
      })}
    </main>
  );
}
export default ListOfGifs;
