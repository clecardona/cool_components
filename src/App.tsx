import MagicMenu from "./components/MagicMenu";
import "./App.sass";
import "./styles/base.sass";

function App() {
  return (
    <div className="App">
      <header>
        <h2>
          Some <b>cool </b> components
        </h2>
      </header>
      <main>
        <MagicMenu />
      </main>
    </div>
  );
}

export default App;
