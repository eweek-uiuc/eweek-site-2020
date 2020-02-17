import React from 'react';

import awards from './awards.js';
import '../../styles/awards.scss';

const Award = (props) => {
    const { name, image } = props;
    return (
        <div className="member">
            <div className="content" style={{ backgroundImage: `url(${image})` }}>
                <div className="award-info">
                <h3>{ name }</h3>
                </div>
            </div>
        </div>
    );
};

class Awards extends React.Component {
    render() {
        return (
            <div className="about">
                <h1>SUPERLATIVES</h1>
                <div className="text-container awards-description">
                    <p>Nominate people for E-Week superlatives <a href="https://forms.gle/Da8GxdhpzgP7Ejp47" target="_blank" rel="noopener noreferrer">here</a> by Wednesday 11:59 PM!</p>
                    {/* <p>Vote for E-Week superlative winners here by Friday 11:59PM! Winners will be announced at semi-formal.</p> */}
                </div>
                <div className="container">
                    <div className="committee">
                    { awards.map(c => <Award {...c} key={c.name} />) }
                    </div>
                </div>

                <h1>VIDEO COMPETITION</h1>
                <div className="text-container awards-description">
                    <p>Videos are due Wednesday 2/19 at 5 PM. We will add them here to be voted on throughout the week.</p>
                    {/* <p>Vote for the best video here by Friday 11:59PM!</p> */}
                </div>
            </div>
        );
    }
}
  
export default Awards;