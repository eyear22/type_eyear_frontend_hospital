import { GlobalStyles } from "./style/GlobalStyles";
import SideMenu from "./components/common/SideMenu";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PatientPage from "./pages/PatientPage";
import RoomPage from "./pages/RoomPage";
import ManagePage from "./pages/ManagePage";
import ReservationPage from "./pages/ReservationPage";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk.withExtraArgument({}), logger))
);
const persistor = persistStore(store);

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
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <>
                {user && (
                  <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/room" element={<RoomPage />} />
                    <Route path="/patient" element={<PatientPage />} />
                    <Route path="/reservation" element={<ReservationPage />} />
                    <Route path="/manage" element={<ManagePage />} />
                  </Route>
                )}
              </>
            </Routes>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
