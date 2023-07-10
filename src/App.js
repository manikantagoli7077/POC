import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Timexreconcilation from "./pages/timexreconcilation/Timexreconcilation";
import DataForm from "./components/timexcomponents/dataform/DataForm";
import PreviousReconcilations from "./pages/timexreconcilation/PreviousReconcilations";
import Employee from "./roles/Employee";
import Emptimex from "./pages/timexreconcilation/Emptimex";
import Manager from "./roles/Manager";
import Managertimex from "./pages/timexreconcilation/Managertimex";
import MEmployeerequests from "./pages/timexreconcilation/MEmployeerequests";
import WfoPage from "./pages/wfo/WfoPage";
import MWfoPage from "./pages/wfo/MWfoPage";
import LoginScreen from "./pages/login/Login2";
import RequestsPage from "./components/wfo/Request";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginScreen />} />
            <Route path="login" element={<LoginScreen />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="timexreconcilation">
              <Route index element={<Timexreconcilation/>}/>
              <Route path="dataform" element={<DataForm/>}/>
              <Route path="previousreconcilations" element={<PreviousReconcilations/>}/>
            </Route>
              <Route path="emptimex" element={<Emptimex/>}/>
              <Route path="emptimex/dataform" element={<DataForm/>}/>
              <Route path="emptimex/previousreconcilations" element={<PreviousReconcilations/>}/>
              <Route path="wfo" element={<WfoPage/>}/>
              <Route path="requests" element={<RequestsPage/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
