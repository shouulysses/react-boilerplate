import React from "react";
import { Link } from 'react-router';

const About = () => {
  return (
    <div>
      <h1 className="page-title">Home Page</h1>
      <Link to="/about" className="btn">About page &rarr;</Link>
    </div>
  );
};

export default About;