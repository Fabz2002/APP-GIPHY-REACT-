import { useContext } from "react";
import { GifContext } from "../context/GifContext";
function ButtonSearch({ btn, className, word }) {
  const { setKeyW, setRandom } = useContext(GifContext);
  return (
    <button
      type="button"
      onClick={(e) => {
        setKeyW(word);
      }}
      className={className}
    >
      {btn}
    </button>
  );
}

export default ButtonSearch;
