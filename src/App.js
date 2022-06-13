import React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "./components";
import { About, Footer, Header, Skills } from "./container";
import "./App.scss";
import BacktoTop from "./components/BacktoTop/BacktoTop";
const App = () => {
  return (
    <div className="app">
      <Helmet>
        <title>AmirFalakian</title>
      </Helmet>
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
