
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Analytics from "./pages/Analytics";

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/students" element={<Students />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  </Router>
  );
}

export default App;
