import { Link } from "react-router-dom";
import { TiDocumentText } from "react-icons/ti";
import { CiWallet } from "react-icons/ci";
import { GrAnalytics } from "react-icons/gr";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import type { ReactElement } from "react";

const iconStyle = "text-3xl";

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
    icon: <TiDocumentText className={iconStyle} />,
  },
  {
    id: "2",
    name: "Analysis",
    path: "/analysis",
    icon: <GrAnalytics className={iconStyle} />,
  },
  {
    id: "3",
    name: "Create",
    path: "/create",
    icon: <IoAddCircleOutline className={iconStyle} />,
  },
  {
    id: "4",
    name: "Accounts",
    path: "/accounts",
    icon: <CiWallet className={iconStyle} />,
  },
  {
    id: "5",
    name: "Categories",
    path: "/categories",
    icon: <IoPricetagsOutline className={iconStyle} />,
  },
];

const renderNavBarElements = (elements: NavBarElement[]) => {
  return elements.map((element) => (
    <Link key={element.id} to={element.path}>
      <div className="flex flex-col p-2">

        <div className="w-fit mx-auto">{element.icon}</div>
        <div className="text-xs">
            {element.name}
        </div>
      </div>
    </Link>
  ));
};

const NavBar = () => {
  return (
    <nav className="border bottom-0 fixed w-full h-[7%] flex justify-around bg-gray-700 text-indigo-200 ">
      {renderNavBarElements(Navbar_Elements)}
    </nav>
  );
};

export default NavBar;
