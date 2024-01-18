import React from 'react';
import NavMenu from '../atoms/NavMenu';
import { Fade } from "react-slideshow-image";


function Gallery() {
  // const fadeImages = [
  //   require("../static/Oyster.png"),
  //   require("../static/oysterphoto.jpg"),
  //   require("../static/Junebluecrystal.jpg"),
  //   require("../static/junebluecrystalcanva.jpg")
  // ];
  

  return (
    <><div>
      <NavMenu />
      <h1 className="text-center">Gallery</h1>
      <div className="container">
        <div className="slide-container" style={{ maxWidth: '100%', maxHeight: '100%' }}>
          {/* <Fade>
            {fadeImages.map((image, index) => <div key={index} className="each-fade" style={{ position: 'absolute', zIndex: fadeImages.length - index }}>
              <div className="image-container">
                <img src={image} alt="" tyle={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            )}
          </Fade> */}
        </div>
      </div>
    </div></>
    
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