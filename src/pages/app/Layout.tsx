import type { ReactNode } from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";

interface AppLayoutProps {
  children: ReactNode;
}
const AppLayout = ({ children }: AppLayoutProps) => {
  return <>
  <Header/>
  {children}
  <NavBar/>
  </>;
};

export default AppLayout;
