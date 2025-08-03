import React from 'react';
import '../App.css'; // Assuming styles are still there

const GrizzyAnimation = () => {
  return (
    <div className="global-animation-wrapper">
      <img
        src="/assets/grizzy.gif"
        alt="Grizzy"
        className="character grizzy"
      />
      <img
        src="/assets/lemming.gif"
        alt="Lemming"
        className="character lemming"
      />
    </div>
  );
};

export default GrizzyAnimation;
