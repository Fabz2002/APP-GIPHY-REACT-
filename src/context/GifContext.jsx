import { useState, useEffect, createContext } from "react";
import GetGifs from "../../services/getGifs";

export const GifContext = createContext();

export function GifContextProvider(props) {
  const [keyW, setkeyW] = useState("");
  const [gif, setgif] = useState([]);

  function updateGif(kw) {
    setkeyW(kw);
  }
  useEffect(
    function () {
      GetGifs({ keyword: keyW }).then((gif) => setgif(gif));
    },
    [keyW]
  );

  return (
    <GifContext.Provider value={{ updateGif, gif }}>
      {props.children}
    </GifContext.Provider>
  );
}
