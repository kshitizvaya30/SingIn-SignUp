import "./App.css";
import LoginPage from "./Pages/Login/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile/Profile";
import TablePage from "./Pages/TablePage/TablePage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SignUpPage from "./Pages/SignUp/SignUpPage";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={LoginPage} />
        <Route path='/sign-up' Component={SignUpPage} />
        <Route path='/profile' Component={Profile} />
        <Route path='/data' Component={TablePage} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
