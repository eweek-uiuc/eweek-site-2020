import React from 'react';

import committee from './committee.js';

const Member = (props) => {
    const { name, position, major, year, image } = props;
    return (
        <div className="member">
            <div className="content" style={{ backgroundImage: `url(${image})` }}>
                <div className="info">
                <h3>{ name }</h3>
                <h5>{ position }</h5>
                <p>{ major }</p>
                <p>{ year }</p>
                </div>
            </div>
        </div>
    );
};

const About = () => (
    <div className="about">
      <div className="text-container">
        <h1>E-WEEK COMMITTEE</h1>
        <p>This program is organized and run by members of <a href="http://www.ec.illinois.edu" target="_blank" rel="noopener noreferrer">Engineering Council</a>
          , a student-run umbrella organization of Illinois' engineering societies. We spend the Fall semester putting together
          this week-long, themed event.
        </p>
        <p>Our mission is to honor the creative and practical spirit of engineering.
          We aim to emphasize the importance of math, science, and teamwork toward transforming
          the impossible into the probable.
        </p>
      </div>
      <div className="container">
        <div className="committee">
          { committee.map(c => <Member {...c} key={c.name} />) }
        </div>
      </div>
    </div>
);
  
export default About;