import React from 'react';

import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';

import './styles.scss';

const Footer = () => (
    <div className="footer">
        <div className="links">
            <a href="https://www.facebook.com/EWeekUIUC/" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/eweek.uiuc/?hl=en" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
            </a>
        </div>
        <div className="lower-links">
            <a href="mailto:eweek@ec.illinois.edu"><u>eweek@ec.illinois.edu</u></a>
        </div>
    </div>
);

export default Footer;
