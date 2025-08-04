import { useEffect, useState } from 'react';
import './index.scss';

const About = () => {
  return (
    <>
      <div className="about-me-container">
        <div className="about-me-text-zone">
          <h1>About me</h1>
          <p>
            Hi, I'm Liavon — a Junior Fullstack Developer with hands-on
            experience in building web applications using React.js, Redux,
            TypeScript, Node.js, Express, and MySQL. I specialize in creating
            dynamic, responsive, and scalable applications. On the frontend, I
            use React and TypeScript to build component-based UIs, with Redux
            for state management. On the backend, I develop RESTful APIs using
            Express.js and connect them to relational databases like MySQL. I
            enjoy working across the full stack and constantly improving my
            skills by building real-world projects, diving into new tools, and
            following clean code principles. Currently, I'm looking for
            opportunities to join a team where I can grow as a developer,
            contribute to meaningful projects, and keep pushing my knowledge
            forward.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
