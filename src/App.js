import logo from "./logo.svg";
import "./App.css";
import { ReactBingmaps } from "react-bingmaps";

function App() {
  return (
    <div className="App">
      <ReactBingmaps
        bingmapKey="AngZHmF1U7M21dm6VsNBBhRZMIDvB7TxbHJ4btAMLg9UXBzhexz7DjhQ66k2rZWe"
        center={[13.0827, 80.2707]}
      ></ReactBingmaps>
    </div>
  );
}

export default App;
