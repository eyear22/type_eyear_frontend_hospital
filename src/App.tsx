import { GlobalStyles } from "./style/GlobalStyles";
import SideMenu from "./components/common/SideMenu";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <GlobalStyles />
      <SideMenu
        open={open}
        setOpen={setOpen}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </>
  );
}

export default App;
