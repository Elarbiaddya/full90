import { Outlet } from "react-router-dom";
import Header from "../components/Reusables/Header";

function BigLayout() {
  return (
    <>
      <Header/>
      <main>
        { <Outlet /> }
      </main>
    </>
  );
}

export default BigLayout;