import Navigator from "./components/Navigator";
import ListOfGifs from "./components/ListOfGifs";
import "./index.css";
function App() {
  return (
    <div className="bg-blue w-full h-full text-center pt-4">
      <Navigator
        btn="CAMBIAR"
        title="Dar click para cambiar tema de los Gifs"
      />
      <ListOfGifs />
    </div>
  );
}

export default App;
