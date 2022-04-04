import MagicMenu from "./components/MagicMenu";
import "./App.sass";
import "components/Battles/Carousel.sass";
import "./styles/base.sass";
import Sayan from "components/Battles/Sayan/Sayan";
import Apple from "components/Battles/Apple/Apple";
import Pirate from "components/Battles/Pirate/Pirate";
import IceCream from "components/Battles/IceCream/IceCream";
import { useEffect, useState } from "react";

function App() {
  const [scrollY, setscrollY] = useState(0);
  const [canScrollRight, setcanScrollRight] = useState(true);
  const [canScrollLeft, setcanScrollLeft] = useState(false);
  const BOX_WIDTH = 800;

  useEffect(() => {
    const fullWidth = document.getElementById("box")?.offsetWidth;
    if (scrollY === 0) {
      setcanScrollLeft(false);
      setcanScrollRight(true);
    }
    if (scrollY >= BOX_WIDTH) {
      setcanScrollLeft(true);
      setcanScrollRight(true);
    }
    if (fullWidth) {
      if (scrollY + BOX_WIDTH >= fullWidth) {
        setcanScrollLeft(true);
        setcanScrollRight(false);
      }
    }
  }, [scrollY]);

  function scrollRight() {
    const fullWidth = document.getElementById("box")?.offsetWidth;
    if (fullWidth) {
      if (scrollY + BOX_WIDTH >= fullWidth) return;
      else return setscrollY(scrollY + BOX_WIDTH);
    }
  }

  function scrollLeft() {
    if (scrollY <= 0) return;
    else return setscrollY(scrollY - BOX_WIDTH);
  }

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
          {/* <div className="battle-grid"> */}
          <div className="carousel" style={{ width: BOX_WIDTH }}>
            {canScrollRight && (
              <button id="br" onClick={() => scrollRight()}>
                <p>{">"}</p>
              </button>
            )}
            {canScrollLeft && (
              <button id="bl" onClick={() => scrollLeft()}>
                <p>{"<"}</p>
              </button>
            )}

            <div id="box" style={{ left: -scrollY }}>
              <Sayan />
              <Apple />
              <Pirate />
              <IceCream />
              <Apple />
              <IceCream />
              <Sayan />
              <Pirate />
              <Sayan />
              <IceCream />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
