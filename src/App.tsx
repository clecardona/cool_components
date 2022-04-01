import MagicMenu from "./components/MagicMenu";
import "./App.sass";
import "./styles/base.sass";
import Sayan from "components/Battles/Sayan";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Some cool <b>components</b>
        </h1>
      </header>
      <main>
        <h2>
          Magic <b>Menu</b>
        </h2>
        <MagicMenu />
        <h2>
          CSS <b>Battles</b>
        </h2>
        <div className="content-battle">
          <div className="battle-grid">
            <Sayan />
            <Sayan />
            <Sayan />
            <Sayan />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
