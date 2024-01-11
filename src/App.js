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
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/review" element={<Review />} />
        <Route path="/adrian" element={<Adrian />} />
        <Route path="/ron" element={<Ron />} />
        <Route path="/kevin" element={<Kevin />} />
        <Route path="/sam" element={<Sam />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;