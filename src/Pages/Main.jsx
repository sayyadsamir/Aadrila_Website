import React from "react";
// import Hero from "../Components/Hero";
import Industries from "./Industries/Industries";
import Products from "./Product/Product";
import Blogs from "./Blogs/Blog";
import Home from "./Home";
import Contact from "./Contacts/Contact";

const Main = () => {
  return (
    <>
       <Home/>
      <Industries />
      <Products />
      <Blogs />
      <Contact />
    </>
  );
};

export default Main;
