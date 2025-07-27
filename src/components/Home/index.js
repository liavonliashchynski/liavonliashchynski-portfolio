import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
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
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _11`}>i, </span>
          <br />
          <span className={`${letterClass} _12`}>I</span>
          <span className={`${letterClass} _13`}>'m</span>
          <span className={`${letterClass} _14`}> </span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
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
    </div>
  );
};

export default Home;
