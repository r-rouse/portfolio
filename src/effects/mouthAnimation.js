import React, { useEffect, useState } from 'react';
import "../styles/effects.css"

const MouthAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Trigger animation on component mount
  }, []);

  return (
    <div className={`mouth ${isOpen ? 'open' : ''}`}>
      <div className="bubble">
        <span>Hello!</span>
      </div>
    </div>
  );
};

export default MouthAnimation;
