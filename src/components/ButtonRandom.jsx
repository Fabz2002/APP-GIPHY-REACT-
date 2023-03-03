import { useContext } from "react";
import { GifContext } from "../context/GifContext";
function ButtonRandom({ className, btn }) {
  const { setRandom, setButtonRandomToggle, buttonRandomToggle } =
    useContext(GifContext);
  return (
    <button
      type="button"
      onClick={(e) => {
        setRandom(true);
        setButtonRandomToggle(!buttonRandomToggle);
      }}
      className={className}
    >
      {btn}
    </button>
  );
}

export default ButtonRandom;
