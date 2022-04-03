import { useState } from "react";
import "./MagicMenu.sass";
import MagicMenuItem from "./MagicMenuItem";

const MagicMenu = () => {
  const [active, setActive] = useState("contact");
  const menuItems = ["contact", "home", "chat", "settings"];

  function getImage(key: string) {
    switch (key) {
      case "contact":
        return "https://cdn.dribbble.com/users/175166/screenshots/8836826/media/899da365504fdd0530fdf93f57105b9a.jpg?compress=1&resize=600x450&vertical=top";
      case "settings":
        return "https://cdn.dribbble.com/users/427368/screenshots/11084511/media/5a65b94c20e2d295f6694bf1ff04d3a4.jpg?compress=1&resize=600x450&vertical=top";
      case "home":
        return "https://cdn.dribbble.com/users/3320958/screenshots/15212021/media/b273f408f8c1ad3d535fc34166256b18.png?compress=1&resize=600x450&vertical=top";
      case "chat":
        return "https://cdn.dribbble.com/users/6024852/screenshots/15551230/media/6ac95e7ba69f9b3a130c8f8dd9c8d692.jpg?compress=1&resize=600x450&vertical=top";
      default:
        return "";
    }
  }

  const Items = menuItems.map((item) => (
    <MagicMenuItem
      item={item}
      key={item}
      setActive={setActive}
      active={active}
    />
  ));

  return (
    <div className="content">
      <h2 className="float">
        Magic <b>Menu</b>
      </h2>
      <div className="img-container">
        <img src={getImage(active)} alt="" />
      </div>
      <div className="magic-menu">
        <ul>
          {Items}
          <span className={`menu-selector ${active}`} />
        </ul>
      </div>
    </div>
  );
};

export default MagicMenu;
