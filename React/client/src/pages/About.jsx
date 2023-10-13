import React from 'react';

function About() {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '500px' }}>
          <p className="text-center">
            The Tear Shed Project is an interactive digital art installation. Participants in the project are invited to share and record a story that brings them to tears. The tears are then photographed and filmed under a microscope and displayed in the digital art gallery here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
