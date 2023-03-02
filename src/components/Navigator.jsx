import ButtonSearch from "./ButtonSearch";
import { useState } from "react";

function Navigator({ btn = "", title = "" }) {
  const [word, setWord] = useState("");
  const className =
    "bg-red text-white  mx-auto px-2 py-1 rounded-r-lg mt-4 hover:text-blue-dark transition all 0.3s ease-in-out";
  return (
    <nav className="bg-khaki rounded-lg mx-auto p-4   max-w-2xl max-[680px]:w-96 max-[395px]:w-80 max-[337px]:w-60 max-[260px]:w-40">
      <h1 className="  font-bold text-white my-2 text-2xl">{title}</h1>
      <input
        placeholder="Buscar en Gifealo"
        onChange={(e) => {
          setWord(e.target.value);
        }}
        className="bg-slate-200 p-1 rounded-l-lg mb-2 max-[337px]:w-36 max-[280px]:w-26 "
      ></input>
      <ButtonSearch btn={btn} className={className} word={word} />
    </nav>
  );
}

export default Navigator;
