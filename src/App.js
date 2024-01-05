import React from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Movieslider from "./components/Movieslider"

const App = (props) => {
  return (
    <div>
      <Navbar />
      <h1 className="Home-Title">Welcome to Movie Arks</h1>
      <Movieslider />
      <Footer />
    </div>
  )
}

export default App
