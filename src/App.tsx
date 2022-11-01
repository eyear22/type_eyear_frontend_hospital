import { GlobalStyles } from "./style/GlobalStyles";
import SideMenu from "./components/common/SideMenu";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const [open, setOpen] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const user = true;
  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <>
            {user && (
              <Route
                element={
                  <SideMenu
                    open={open}
                    setOpen={setOpen}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                }
              >
                <Route path="/" element={<HomePage />} />
              </Route>
            )}
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
