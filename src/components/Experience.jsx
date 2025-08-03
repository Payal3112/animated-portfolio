import React from 'react';

const Experience = () => {
  return (
    <div id="experience" className="section glass p-8 rounded-2xl shadow-lg mb-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Experience</h2>
      <ul className="space-y-6 text-gray-800">
        <li>
          <strong>
            <a
              href="https://gdg.community.dev/events/details/google-gdg-delhi-presents-arvr-cohort-gdg-igdtuw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Mentee - GDG IGDTUW (AR/VR Cohort)
            </a>
          </strong><br />
          Led AR/VR projects using Lens Studio, Unity, Blender. <strong>1st rank</strong> in tech cohort.
        </li>

        <li>
          <strong>
            <a
              href="https://www.linkedin.com/posts/payal-payal_enactova-hackathon2024-kheto-activity-abcdef123456/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Enactova Hackathon
            </a>
          </strong><br />
          Top 45 from 1600+ teams. Prototyped <em>‘Kheto’</em> – an AI farming assistant.
        </li>

        <li>
          <strong>
            <a
              href="https://github.com/yourusername/igdtuw-ai-internship-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              AI Full Stack Intern - IGDTUW
            </a>
          </strong><br />
          Built React apps with integrated ML models and REST APIs.
        </li>
      </ul>
    </div>
  );
};

export default Experience;
