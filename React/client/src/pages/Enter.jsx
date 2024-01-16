import React from 'react';
import { useNavigate } from 'react-router-dom';



function Enter() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the Gallery component when the button is clicked
    console.log('Button clicked!')
    navigate('/gallery')
  };

  return (
    <div>
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: Arial;
            font-size: 17px;
          }

          #myVideo {
            right: 0;
            bottom: 0;
            min-width: 100%;
            min-height: 100%;
          }

          .content {
            position: fixed;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            color: #f1f1f1;
            width: 100%;
            padding: 20px;
          }

          #myBtn {
            width: 200px;
            font-size: 18px;
            padding: 10px;
            border: none;
            background: #000;
            color: #fff;
            cursor: pointer;
          }

          #myBtn:hover {
            background: #ddd;
            color: black;
          }
        `}
      </style>

      <div className="content">
        <h1>The tear shed project.</h1>
        <p>Every tear tells a story</p>
        <button onClick={handleClick}>Enter</button>
      </div>
    </div>
  );
}

export default Enter;
