import logo from "./logo.svg";
import "./App.css";
import Login from "./auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./auth/Signup";
import CEO from "./pages/CEO";
import Departments from "./pages/Departments";
import SubDepartments from "./pages/SubDepartments";
function App() {
  return (
    <div className="row">
      <Routes>
        <Route path="/" element={<CEO />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/subdepartments" element={<SubDepartments />} />
      </Routes>
    </div>
  );
}

export default App;
