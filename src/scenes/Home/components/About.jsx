import React from 'react';

import Slogan from '../../../assets/slogan.png';

const About = () => (
    <div className="about">
        <img className="about__title" src={Slogan} alt="slogan"/>
        <p>
            E-Week is a week-long celebration highlighting the contributions to society that engineers make.
            Started in 1951 by the National Society of Professional Engineers, this particular week
            in February is observed by a plethora of professional and academic societies as well
            as corporations and government agencies.
        </p>
        <p>
            For students here at Illinois, there are community and competitive events, guest speakers, and food.
            Register an account for a 5 or 10 man team to participate in the festivities and competitions.
            Awards, prizes, and bragging rights await!
        </p>
    </div>
);

export default About;
  