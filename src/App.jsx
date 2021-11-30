// Components
import Home from "./components/Home";
// Router DOM
import { Routes, Route } from "react-router-dom";
// Styles
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
