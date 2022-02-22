import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Hello from "./Components/Hello";
import Home from "./Components/Home";

function App() {
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);

  
  return (
    <div className="App">
      <Routes>
        <Route
        path="/"
        element={<Hello />}/>
        
          <Route path="/home" element={<Home setModal={setModal}/>}/>
      </Routes>
    </div>
  );
}

export default App;
