import { Link, NavLink } from "react-router-dom";
import type { ReactElement } from "react";
import {
  GoogleDocs,
  Keyframe,
  PlusCircle,
  StatsUpSquare,
  Wallet,
} from "iconoir-react";

const iconStyle = "";

interface NavBarElement {
  id: string;
  name: string;
  path: string;
  icon: ReactElement;
}

const Navbar_Elements: NavBarElement[] = [
  {
    id: "1",
    name: "Records",
    path: "/home",
    icon: <GoogleDocs className={iconStyle} />,
  },
  {
    id: "2",
    name: "Analysis",
    path: "/analysis",
    icon: <StatsUpSquare className={iconStyle} />,
  },
  {
    id: "3",
    name: "Create",
    path: "/create",
    icon: <PlusCircle className={iconStyle} />,
  },
  {
    id: "4",
    name: "Accounts",
    path: "/accounts",
    icon: <Wallet className={iconStyle} />,
  },
  {
    id: "5",
    name: "Categories",
    path: "/categories",
    icon: <Keyframe className={iconStyle} />,
  },
];

const renderNavBarElements = (elements: NavBarElement[]) => {
  return elements.map((element) => (
    <NavLink
      key={element.id}
      to={element.path}
      className={({ isActive }) => (isActive ? "font-bold text-xl" : "font-normal")}
    >
      <div className="flex flex-col p-2 my-auto">
        <div className="w-fit mx-auto">{element.icon}</div>
        <div className="text-xs">{element.name}</div>
      </div>
    </NavLink>
  ));
};

const NavBar = () => {
  return (
    <nav className="bottom-0 fixed w-full flex justify-around bg-gray-700 text-indigo-200 px-3 py-1">
      {renderNavBarElements(Navbar_Elements)}
    </nav>
  );
};

export default NavBar;
