import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="section glass">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:k.payal3112@gmail.com">k.payal3112@gmail.com</a></p>
      <p>Phone: <a href="tel:+917428322432">+91 7428322432</a></p>
      <p>
        <a
          href="https://github.com/Payal3112"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Payal's GitHub profile"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/payal-b8a5a2323/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Payal's LinkedIn profile"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://leetcode.com/u/payal3112/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Payal's LeetCode profile"
        >
          LeetCode
        </a>
      </p>
    </div>
  );
};

export default Contact;
