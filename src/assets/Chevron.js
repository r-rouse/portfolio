import React from 'react';
import '../styles/button.css';

const Button = (props) => (
  <button onClick={props.onClick} className="chevron-button">
    <span className="chevron-icon">&#8249;</span>
    {props.text}
  </button>
);

export default Button;
