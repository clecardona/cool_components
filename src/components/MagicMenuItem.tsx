import { BiChat, BiCog, BiUser, BiHomeAlt } from "react-icons/bi";

type Props = {
  item: any;
  active: string;
  setActive: any;
};

function getIcon(key: string) {
  const size = { size: "30" };
  switch (key) {
    case "contact":
      return <BiUser {...size} />;
    case "home":
      return <BiHomeAlt {...size} />;
    case "chat":
      return <BiChat {...size} />;
    case "settings":
      return <BiCog {...size} />;

    default:
      return <BiCog {...size} />;
  }
}

const MagicMenuItem = ({ item, setActive, active }: Props) => {
  return (
    <li className="menu-item">
      <a
        href={`#${item}`}
        className={item === active ? "active" : ""}
        onClick={() => {
          setActive(item);
        }}
      >
        <span className="menu-icon">{getIcon(item)}</span>
        <span className="menu-text">{item}</span>
      </a>
    </li>
  );
};

export default MagicMenuItem;
