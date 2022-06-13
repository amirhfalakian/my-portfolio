import React from "react";
import { Navbar } from "./components";
import { About, Footer, Header, Skills } from "./container";
import "./App.scss";
import BacktoTop from "./components/BacktoTop/BacktoTop";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Footer />
      <BacktoTop />
    </div>
  );
};

export default App;
