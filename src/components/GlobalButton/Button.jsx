import React from 'react';
import './style.button.css';
import { Link } from 'react-router-dom';

const Button = ({ text, link }) => {
  return (
    <Link to={link}>
      <button className="button">
        {text}
      </button>
    </Link>
  );
};

export default Button;