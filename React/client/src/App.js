import React from "react";
import Navbar from "./atoms/navbar"
// import About from "./pages/About"
// import Gallery from "./pages/Gallery"
import Enter from "./pages/Enter";
import VideoBackground from "./organisms/VideoBackground";
import "./App.css"


function App() {
    return (
      <><div>
        <Navbar />
        {/* <About /> */}
        <VideoBackground />
        <Enter />
      </div></>
    )

}

export default App