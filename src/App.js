import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <Weather />
      <footer>
        Open-source code by Ariel Lee{" "}
        <a
          href="https://github.com/ariel-land/weather-react"
          target="_blank"
        ></a>{" "}
      </footer>
    </div>
  );
}

export default App;
