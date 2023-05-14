import "./App.css";
import LoginPage from "./Pages/Login/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile/Profile";
import TablePage from "./Pages/TablePage/TablePage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUpPage from "./Pages/SignUp/SignUpPage";
import ProtectedRoutes from "./ProtectedRoutes";
import AppContext from "./context/AppContext.js";

function App() {
  return (
    <BrowserRouter>
    <AppContext>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />}/>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Profile />}  path="/profile"/>
          <Route element={<TablePage/>}  path="/table_data" />
        </Route>
      </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
