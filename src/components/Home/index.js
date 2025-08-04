import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaPhp } from 'react-icons/fa';
import { SiRedux, SiTypescript, SiExpress, SiMysql } from 'react-icons/si';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [
    'L',
    'i',
    'a',
    's',
    'h',
    'c',
    'h',
    'y',
    'n',
    's',
    'k',
    'i',
    ' ',
    'L',
    'i',
    'a',
    'v',
    'o',
    'n',
  ];
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  return (
    <div className="home-page">
      <div className="home-page-text-zone">
        <h1>
          <span className={`${letterClass} _11`}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _13`}>,</span>
          <span className={`${letterClass} _14`}> </span>
          <br />
          <span className={`${letterClass} _15`}>I</span>
          <span className={`${letterClass} _16`}>'</span>
          <span className={`${letterClass} _17`}>m</span>
          <span className={`${letterClass} _18`}> </span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={18}
          />
          <br />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={34}
          />
        </h1>
        <p className="description">
          I build fullstack web applications using technologies like React.js,
          Redux, and TypeScript on the frontend, combined with Node.js,
          Express.js, and MySQL on the backend. I also have experience with CSS
          for styling and PHP for server-side scripting. I'm focused on writing
          clean, maintainable code and delivering fast, responsive user
          experiences from start to finish.
        </p>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="tech-stack">
        <h1 className="my-tech-stack">My tech stack</h1>
        <div className="icons-container">
          <div className="icons-first-row">
            <span className="react-icon">
              <FaReact /> React.js
            </span>
            <span className="redux-icon">
              <SiRedux /> Redux
            </span>
            <span className="typescript-icon">
              <SiTypescript /> TypeScript
            </span>
            <span className="css-icon">
              <FaCss3Alt /> CSS
            </span>
          </div>
          <div className="icons-second-row">
            <span className="node-icon">
              <FaNodeJs /> Node.js
            </span>
            <span className="express-icon">
              <SiExpress /> Express.js
            </span>
            <span className="mysql-icon">
              <SiMysql /> MySQL
            </span>
            <span className="php-icon">
              <FaPhp /> PHP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
