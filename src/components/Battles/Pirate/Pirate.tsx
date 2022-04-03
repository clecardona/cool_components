import "./Pirate.sass";

const Pirate = () => {
  return (
    <div className="container" style={{ background: "#000" }}>
      <div id="pirate">
        <div id="h" />
        <div id="e1" />
        <div id="e2" />

        <div className="bone">
          <span id="s" />
          <span id="ci" />
        </div>
        <div className="bone tl">
          <span id="s" />
          <span id="ci" />
        </div>
        <div className="bone bl">
          <span id="s" />
          <span id="ci" />
        </div>
        <div className="bone br">
          <span id="s" />
          <span id="ci" />
        </div>

        <div id="t" />
      </div>
    </div>
  );
};

export default Pirate;
