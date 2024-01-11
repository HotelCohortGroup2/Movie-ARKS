import React, { useState, useEffect } from "react";
import Mockdata from "./components/Mockdata";
import { Route, Routes } from "react-router-dom";
import Signup from './pages/Signup'
import Aboutus from './pages/Aboutus'
import Login from './pages/Login'
import Movie from './pages/Movies'
import Notfound from './pages/Notfound'
import Home from "./pages/Home";
import Review from './pages/Review'
import Adrian from "./pages/Adrian";
import Ron from './pages/Ron'
import Kevin from './pages/Kevin'
import Sam from './pages/Sam'


const App = (props) => {
  const [currentMovie, setCurrentMovie] = useState([]);

  useEffect(() => {
    readMovie();
  }, []);

  const url = "http://localhost:3000/";
  const readMovie = () => {
    fetch(`${url}movies`)
      .then((response) => response.json())
      .then((payload) => setCurrentMovie(payload))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Adrian" element={<Adrian />} />
        <Route path="/Ron" element={<Ron />} />
        <Route path="/Kevin" element={<Kevin />} />
        <Route path="/Sam" element={<Sam />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;