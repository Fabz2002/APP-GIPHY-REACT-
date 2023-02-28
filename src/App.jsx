import Navigator from "./components/Navigator";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  return (
    <div className="bg-blue w-full h-full text-center pt-4 ">
      <Navigator btn="Buscar" title="Dar click para cambiar tema de los Gifs" />
      <ListOfGifs />
    </div>
  );
}

export default App;
