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
    <div className="container home-page">
      <div className="text-zone">
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
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="tech-stack">
        <p>My tech stack:</p>
        <div className="icons-container">
          <div className="icons-first-row">
            <span>
              <FaReact /> React.js
            </span>
            <span>
              <SiRedux /> Redux
            </span>
            <span>
              <SiTypescript /> TypeScript
            </span>
            <span>
              <FaCss3Alt /> CSS
            </span>
          </div>
          <div className="icons-second-row">
            <span>
              <FaNodeJs /> Node.js
            </span>
            <span>
              <SiExpress /> Express.js
            </span>
            <span>
              <SiMysql /> MySQL
            </span>
            <span>
              <FaPhp /> PHP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
