import { useState } from "react";
// Components
import BackDrop from "./BackDrop";
import SideDrawer from "./SideDrawer";
import Nav from "./Nav";

function Navbar() {
  const [state, setstate] = useState(false);

  const drawerToggleClickHnadler = () => {
    setstate(!state);
  };
  const backDropHandler = () => {
    setstate(false);
  };

  return (
    <>
      <div>
        <Nav drawerToggleClickHnadler={drawerToggleClickHnadler} />
        <SideDrawer show={state} clear={drawerToggleClickHnadler} />
        <BackDrop click={backDropHandler} drawer={state} />
      </div>
    </>
  );
}

export default Navbar;
