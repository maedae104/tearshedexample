import React from "react";
import NavMenu from "./atoms/NavMenu"
// import About from "./pages/About"
// import Gallery from "./pages/Gallery"
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import Enter from "./pages/Enter";
import VideoBackground from "./organisms/VideoBackground";
import "./App.css"


function App() {
    return (
      <><div>
        <NavMenu />
        {/* <About /> */}
        
  
        <VideoBackground />
        <Enter />
      </div></>
    )

}

export default App