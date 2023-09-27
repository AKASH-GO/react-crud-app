import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
            <Route path="/add" element={<AddEdit></AddEdit>} />
            <Route path="/update/:id" element={<AddEdit></AddEdit>} />
            <Route path="/view/:id" element={<View></View>} />
            <Route path="/about" element={<About></About>} /> 
        </Routes>
    </div>
     </BrowserRouter>
  );
}

export default App;
