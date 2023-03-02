import { useContext } from "react";
import { GifContext } from "../context/GifContext";
function ButtonSearch({ btn, className, word }) {
  const { setkeyW } = useContext(GifContext);
  return (
    <button
      type="button"
      onClick={(e) => {
        setkeyW(word);
      }}
      className={className}
    >
      {btn}
    </button>
  );
}

export default ButtonSearch;
