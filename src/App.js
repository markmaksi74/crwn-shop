import React from "react";
import Home from "./routes/Home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation.component";

const Shop = () => {
  return <h1>Shop</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
