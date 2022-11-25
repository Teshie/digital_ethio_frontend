import logo from "./logo.svg";
import "./App.css";
import Login from "./auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./auth/Signup";
import CEO from "./pages/CEO";
import Departments from "./pages/Departments";
import SubDepartments from "./pages/SubDepartments";
import ClientPage from "./pages/ClientPage";
import Navbar from "./components/NavBar/NavBar";
import Ceo from "./components/ClientUser/Ceo";
import CreateDepartment from "./components/ClientUser/CreateDepartment";
import CreateSubDepartment from "./components/ClientUser/CreateSubDepartment";
function App() {
  return (
    <div className="row">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/mydepartment" element={<CreateDepartment />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/subdepartments" element={<CreateSubDepartment />} />
        <Route path="/client_admin" element={<Ceo />} />
        <Route path="/ceopage" element={<CEO />} />
      </Routes>
    </div>
  );
}

export default App;
