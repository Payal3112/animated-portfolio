import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="section glass">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Pokémon Card – AR VR Project</strong><br />
          Implemented AR triggers to detect cards and overlay 3D Pokémon models with animations and voice playback.
        </li>
        <li>
          <strong>HerGuide – GenAI Assistant for Women</strong><br />
          A voice-enabled Streamlit app offering scam alerts, schemes, and NGO support using Gemini API.
        </li>
      </ul>
    </div>
  );
};

export default Projects;
