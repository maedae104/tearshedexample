import React from 'react';
import { Fade } from "react-slideshow-image";
import "../static/stylesheet.css"


function Gallery() {
  const fadeImages = [
    require("../static//Oyster.png"),
    require("../static//oysterphoto.jpg"),
    require("../static/Junebluecrystal.jpg"),
    require("../static/junebluecrystalcanva.jpg")
  ];
  

  return (

    <div>
      <h1 className="text-center">Gallery</h1>
      <div className="container">
        <div className="slide-container" >
          <Fade>
            {fadeImages.map((image, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container">
                  <img src={image} alt="slide" />
                </div>
                <h2>{`Slide ${index + 1}`}</h2>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
    
  );
}

export default Gallery;


// <div>
//       <h1 className="text-center">Gallery</h1>
//       <div className="container">
//       <div className="slide-container">
//         <Fade>
//           <div className="each-fade">
//             <div className="image-container">
//               <img src={fadeImages[0]} alt="slide" />
//             </div>
//             <h2>First Slide</h2>
//           </div>
//           <div className="each-fade">
//             <div className="image-container">
//               <img src={fadeImages[1]} alt="slide" />
//             </div>
//             <h2>Second Slide</h2>
//           </div>
//           <div className="each-fade">
//             <div className="image-container">
//               <img src={fadeImages[2]} alt="slide" />
//             </div>
//             <h2>Third Slide</h2>
//           </div>
//         </Fade>
//       </div>
//     </div>
//     </div>