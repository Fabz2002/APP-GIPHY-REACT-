import Button from "./Button";
import { useContext } from "react";
import { GifContext } from "../context/GifContext";

function Navigator({ btn = "", title = "" }) {
  const { updateGif } = useContext(GifContext);
  return (
    <nav className="bg-khaki rounded-lg mx-auto p-4   max-w-2xl max-[680px]:w-96 max-[395px]:w-80 max-[337px]:w-60 max-[260px]:w-40">
      <h1 className=" inline-block font-bold text-white my-2 text-2xl">
        {title}
      </h1>
      <input
        placeholder="panda,perros,coscu...."
        onChange={(e) => {
          console.log(e.target.value);
          updateGif(e.target.value);
        }}
        className="bg-slate-200 p-3  mb-2 max-[260px]:w-28 rounded-sm"
      ></input>
      <Button
        btn={btn}
        onChange={(e) => {
          console.log(e.target.value);
          updateGif(e.target.value);
        }}
      />
    </nav>
  );
}

export default Navigator;
