import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeout); // czyści timeout przy odmontowaniu komponentu
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
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
