import React, { useState } from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Movieslider from "./components/Movieslider"
import Mockdata from './components/Mockdata'

const App = (props) => {

  const [ showData, setShowData ] = useState(Mockdata)
  console.log(showData)
  
  

  
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
