import { useEffect, useState } from "react";

type Props = {
  Battles: JSX.Element[];
  width: number;
};

const Carousel = ({ Battles, width }: Props) => {
  const [canScrollRight, setcanScrollRight] = useState(true);
  const [canScrollLeft, setcanScrollLeft] = useState(false);
  const [scrollY, setscrollY] = useState(0);
  const [current, setcurrent] = useState(-99);

  function scrollRight() {
    const fullWidth = document.getElementById("box")?.offsetWidth;
    if (fullWidth) {
      if (scrollY + width >= fullWidth) return;
      else return setscrollY(scrollY + width);
    }
  }

  function scrollLeft() {
    if (scrollY <= 0) return;
    else return setscrollY(scrollY - width);
  }

  useEffect(() => {
    const fullWidth = document.getElementById("box")?.offsetWidth;
    if (scrollY === 0) {
      setcanScrollLeft(false);
      setcanScrollRight(true);
    }
    if (scrollY >= width) {
      setcanScrollLeft(true);
      setcanScrollRight(true);
    }
    if (fullWidth) {
      if (scrollY + width >= fullWidth) {
        setcanScrollLeft(true);
        setcanScrollRight(false);
      }
    }
  }, [scrollY, width]);

  const ListOfBattles = Battles.map((Comp, index) => {
    return (
      <a
        key={index}
        onMouseOver={() => setcurrent(index)}
        onMouseOut={() => setcurrent(-99)}
        href="https://cssbattle.dev/"
        target="#"
        className={
          index === current
            ? "current"
            : index === current - 1 || index === current + 1
            ? "adjacent"
            : "standard"
        }
      >
        {Comp}
      </a>
    );
  });

  return (
    <div className="carousel" style={{ width: width }}>
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
        {ListOfBattles}
      </div>
    </div>
  );
};

export default Carousel;
