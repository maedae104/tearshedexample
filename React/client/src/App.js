import React from "react";
import Navbar from "./atoms/navbar"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Enter from "./pages/Enter";
import "./App.css"


function App() {
    return (
      <><div>
        <Navbar />
        {/* <About /> */}
        <Gallery /> 
        <Enter />
      </div></>
    )

}

export default App