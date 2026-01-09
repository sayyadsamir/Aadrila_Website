import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";

import Home from "./Pages/Home";
import Industries from "./Pages/Industries/Industries";
import Products from "./Pages/Product/Product";
import Blogs from "./Pages/Blogs/Blog";
import Contact from "./Pages/Contacts/Contact";
import Main from "./Pages/Main"
import About from "./Pages/Abouts/About";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
