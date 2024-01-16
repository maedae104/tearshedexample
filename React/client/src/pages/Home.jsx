import React from "react";
import NavMenu from "../atoms/NavMenu";
import Enter from "./Enter";
import VideoBackground from "../organisms/VideoBackground";
import "../App.css"

function Home() {
    return (
    <><div>
        <NavMenu />
        <VideoBackground />
        <Enter />
    </div></>
    )
}

export default Home