import MagicMenu from "./components/MagicMenu";
import "./App.sass";
import "components/Battles/Carousel.sass";
import "components/Battles/Carousel_expand.sass";
import "./styles/base.sass";
import Sayan from "components/Battles/Sayan/Sayan";
import Apple from "components/Battles/Apple/Apple";
import Pirate from "components/Battles/Pirate/Pirate";
import IceCream from "components/Battles/IceCream/IceCream";
import Sceptre from "components/Battles/Sceptre/Sceptre";
import Carousel from "components/Carousel";
import GQL from "components/GQL";

function App() {
  const battles = [
    <Sayan />,
    <Apple />,
    <Pirate />,
    <IceCream />,
    <Sceptre />,
    <Pirate />,
    <IceCream />,
    <Sceptre />,
  ];
  const BOX_WIDTH = 800;
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
            <b>Galeries</b> (CSS Battles)
          </h2>
          <Carousel Battles={battles} width={BOX_WIDTH} type={1} />
          <Carousel Battles={battles} type={2} />
        </div>
        <div className="content-gql">
          <h2 className="float">
            Graph<b>QL</b>
          </h2>
          <GQL />
        </div>
      </main>
    </div>
  );
}

export default App;
