import "./App.scss";
import City from "./components/city";
import NameCall from "./components/nameCall";
import { LetterOne, Two } from "./letter/one";

function App() {
  const somewhere = [
    { id: 1, city: "Kyiv" },
    { id: 2, city: "Warsaw" },
    { id: 3, city: "湖州" },
  ];
  const nackName = ["小白", "比丢", "旺仔"];

  return (
    <div className="App">
      <img
        src="https://kpi.ua/files/logo.png"
        alt="badges"
        className="badges"
      ></img>
      <header className="App-header"></header>
      <City somewhere={somewhere} />
      <NameCall nackName={nackName} />
      <LetterOne />
      <Two />
    </div>
  );
}

export default App;
