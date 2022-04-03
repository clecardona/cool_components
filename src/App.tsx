import MagicMenu from "./components/MagicMenu";
import "./App.sass";
import "./styles/base.sass";
import Sayan from "components/Battles/Sayan/Sayan";
import Apple from "components/Battles/Apple/Apple";
import Pirate from "components/Battles/Pirate/Pirate";
import IceCream from "components/Battles/IceCream/IceCream";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Some cool <b>components</b>
        </h1>
      </header>
      <main>
        <MagicMenu />

        <div className="content-battle">
          <h2 className="float">
            CSS <b>Battles</b>
          </h2>
          <div className="battle-grid">
            <Sayan />
            <Apple />
            <Pirate />
            <IceCream />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
