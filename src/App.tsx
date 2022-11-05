import { GlobalStyles } from "./style/GlobalStyles";
import SideMenu from "./components/common/SideMenu";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PatientPage from "./pages/PatientPage";
import RoomPage from "./pages/RoomPage";
import ManagePage from "./pages/ManagePage";

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
                <Route path="/room" element={<RoomPage />} />
                <Route path="/patient" element={<PatientPage />} />
                <Route path="/reservation" element={<PatientPage />} />
                <Route path="/manage" element={<ManagePage />} />
              </Route>
            )}
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
