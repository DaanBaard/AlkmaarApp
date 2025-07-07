
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Place from "./pages/Place";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:tag" element={<Category />} />
      <Route path="/place/:id" element={<Place />} />
    </Routes>
  );
}

export default App;
