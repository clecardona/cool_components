import MagicMenu from "./components/MagicMenu";
import "./App.sass";
import "./styles/base.sass";

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
      </main>
    </div>
  );
}

export default App;
