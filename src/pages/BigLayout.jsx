import { Outlet } from "react-router-dom";
import Home from "./Home";
import Header from "../components/Reusables/Header";

function BigLayout() {
  return (
    <>
      <Header/>
      <main>
        <Home />
        {/* <Outlet /> */}
      </main>
    </>
  );
}

export default BigLayout;