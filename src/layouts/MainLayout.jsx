import React from "react";
import { Footer } from "../container";
import Navbar from "./../components/Navbar/Navbar";

const MainLayout = (children) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
