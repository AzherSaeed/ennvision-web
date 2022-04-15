import UserTable from "./Layout/UserTable/Index";
import "./App.css";
import { IndexMain } from "./Layout/CreateUser/style";
import CreateUser from "./Layout/CreateUser/Index";
import Login from "./Layout/Login/Index";
import LastConfirmation from "./Layout/ConfirmationScreen/LastConfirmation";
import ConfirmationScreen from "./Layout/ConfirmationScreen/Index";
import UserDetail from './Layout/UserDetail/Index';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="UserTable" element={<UserTable />} />
        <Route path="createuser" element={<CreateUser />} />
        <Route path="confirmation" element={<LastConfirmation />} />
        <Route path="userDetail" element={<UserDetail />} />
      </Routes>
    </>
  );
}

export default App;
