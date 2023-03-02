import { useState, useEffect, createContext } from "react";
import GetGifs from "../../services/getGifs";

export const GifContext = createContext();

export function GifContextProvider(props) {
  const [keyW, setkeyW] = useState("");
  const [gif, setgif] = useState([]);

  useEffect(() => {
    GetGifs({ keyword: keyW }).then((gif) => setgif(gif));
  }, [keyW]);

  return (
    <GifContext.Provider value={{ setkeyW, gif }}>
      {props.children}
    </GifContext.Provider>
  );
}
