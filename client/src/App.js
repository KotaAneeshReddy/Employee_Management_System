import { BrowserRouter, Routes, Route } from "react-router-dom";

import Employee from "./Component/Employee/Employee.component";
import "./App.css";
import AddEmployee from "./Component/AddEmployee/AddEmployee.compnent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/employees" element={<Employee />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
