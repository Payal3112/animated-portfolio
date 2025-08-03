import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="section glass p-8 rounded-2xl shadow-lg mb-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Projects</h2>
      <ul className="space-y-6 text-gray-800">
        <li>
          <strong>
            <a
              href="https://github.com/yourusername/ar-pokemon-card" // ← replace with real project URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Pokémon Card – AR VR Project
            </a>
          </strong><br />
          Implemented AR triggers to detect cards and overlay 3D Pokémon models with animations and voice playback.
        </li>

        <li>
          <strong>
            <a
              href="https://herguide.streamlit.app/" // ← replace with real deployed Streamlit link
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              HerGuide – GenAI Assistant for Women
            </a>
          </strong><br/ >
          A voice-enabled Streamlit app offering scam alerts, schemes, and NGO support using Gemini API.
        </li>
      </ul>
    </div>
  );
};

export default Projects;
