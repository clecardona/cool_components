import { useState } from "react";
import "./MagicMenu.sass";
import MagicMenuItem from "./MagicMenuItem";

const MagicMenu = () => {
  const [active, setActive] = useState("contact");
  const menuItems = ["contact", "home", "chat", "settings"];

  const Items = menuItems.map((item) => (
    <MagicMenuItem
      item={item}
      key={item}
      setActive={setActive}
      active={active}
    />
  ));

  return (
    <div className="magic-menu">
      <ul>
        {Items}
        <span className={`menu-selector ${active}`} />
      </ul>
    </div>
  );
};

export default MagicMenu;
