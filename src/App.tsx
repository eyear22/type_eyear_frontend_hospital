import { GlobalStyles } from "./style/GlobalStyles";
import SideMenu from "./components/common/SideMenu";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const Layout = () => (
  <div>
    <SideMenu />
    <Outlet />
  </div>
);

function App() {
  const user = true;
  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <>
            {user && (
              <Route element={<Layout />}>
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
