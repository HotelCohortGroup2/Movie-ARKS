import React from "react";
import Movieslider from "../components/Movieslider";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = (props) => {
  return (
    <div>
        <Header />
      <h1 className="Home-Title">Welcome to Movie Arks</h1>
      <Movieslider />
      <Footer />
    </div>
  );
};

export default Home;