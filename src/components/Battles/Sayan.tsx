import "./Sayan.css";

type Props = {};

const Sayan = (props: Props) => {
  return (
    <div className="container">
      <div id="head">
        <span id="hairback-right"></span> <span id="hairback-left"></span>{" "}
        <span id="face-left"></span> <span id="face-right"></span>{" "}
        <span id="mouth"></span>{" "}
        <div id="hair-front" className="flip">
          {" "}
          <div id="hair1-container">
            {" "}
            <span id="hair1"></span>{" "}
          </div>{" "}
          <div id="hair2-container">
            {" "}
            <span id="hair2"></span>{" "}
          </div>{" "}
          <span id="hair3"></span>{" "}
        </div>{" "}
        <div id="hair-front">
          {" "}
          <div id="hair1-container">
            {" "}
            <span id="hair1"></span>{" "}
          </div>{" "}
          <div id="hair2-container">
            {" "}
            <span id="hair2"></span>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Sayan;
