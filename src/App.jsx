import Navigator from "./components/Navigator";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  return (
    <div className="bg-blue w-full min-h-screen text-center pt-4 absolute">
      <Navigator title="API GIFS" />
      <ListOfGifs />
    </div>
  );
}

export default App;
