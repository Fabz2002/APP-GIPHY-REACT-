import { useState, useEffect, createContext } from "react";
import GetGifs from "../../services/getGifs";
import GetRandomGif from "../../services/GetRandomGif";
export const GifContext = createContext();

export function GifContextProvider(props) {
  const [keyW, setKeyW] = useState("");
  const [gifs, setGifs] = useState([]);
  const [random, setRandom] = useState(false);
  const [buttonRandomToggle, setButtonRandomToggle] = useState(false);

  useEffect(() => {
    if (random) fetchRandomGif();
    if (!random) {
      fetchGifsByKeyword();
      setKeyW("");
    }
  }, [buttonRandomToggle, keyW]);

  async function fetchRandomGif() {
    const randomGif = await GetRandomGif();
    setGifs([randomGif]);
    setRandom(false);
  }
  async function fetchGifsByKeyword() {
    const gifs = await GetGifs({ keyword: keyW });
    setGifs(gifs);
  }
  return (
    <GifContext.Provider
      value={{
        setRandom,
        setKeyW,
        gifs,
        setButtonRandomToggle,
        buttonRandomToggle,
        random,
      }}
    >
      {props.children}
    </GifContext.Provider>
  );
}
