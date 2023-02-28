import { api as Data } from "../DataApi";
import GifCard from "./GifCard";

const gifs = Data?.data;
function ListOfGifs() {
  return (
    <main className="bg-platinum rounded-lg mx-auto p-4  mt-3 max-w-2xl max-[680px]:w-96 max-[395px]:w-80 max-[337px]:w-60 max-[260px]:w-40 ">
      <h1 className="text-red my-4  inline-block font-bold">
        LOS GIFS ENCONTRADOS ....
      </h1>
      {gifs.slice(0, 5).map((element) => {
        return <GifCard data={element} />;
      })}
    </main>
  );
}
export default ListOfGifs;
