import ButtonSearch from "./ButtonSearch";
import ButtonRandom from "./ButtonRandom";
import { useState } from "react";

function Navigator({
  btn = "Buscar",
  btn2 = "Random",
  title = "Busqueda de Gifs",
}) {
  const [word, setWord] = useState("");
  return (
    <nav className="bg-khaki rounded-lg mx-auto p-4   max-w-2xl max-[680px]:w-96 max-[395px]:w-80 max-[337px]:w-60 max-[260px]:w-40">
      <h1 className="  font-bold text-white my-2 text-2xl">{title}</h1>
      <input
        placeholder="Buscar en Gifealo"
        onChange={(e) => {
          setWord(e.target.value);
        }}
        className="bg-slate-200 p-1 rounded-l-lg mb-2 max-[337px]:w-36 max-[260px]:w-16 "
      ></input>
      <ButtonSearch
        btn={btn}
        className={
          "bg-red text-white  mx-auto px-2 py-1 rounded-r-lg mt-4 hover:text-blue-dark transition all 0.3s ease-in-out"
        }
        word={word}
      />
      <ButtonRandom
        btn={btn2}
        className={
          "bg-blue text-white  ml-2 px-2 py-1 rounded-md mt-4 hover:scale-110 transition all 0.3s ease-in-out"
        }
      />
    </nav>
  );
}

export default Navigator;
