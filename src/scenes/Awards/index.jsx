import React from 'react';
import YouTube from 'react-youtube';

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
        const opts = {
            height: '300',
            width: '550',
        };

        return (
            <div className="about">
                <h1>SUPERLATIVES</h1>
                <div className="text-container awards-description">
                    <p>Nominate people for E-Week superlatives <a href="https://forms.gle/Da8GxdhpzgP7Ejp47" target="_blank" rel="noopener noreferrer">here</a> by Friday 11:59 PM!</p>
                </div>
                <div className="container">
                    <div className="committee">
                    { awards.map(c => <Award {...c} key={c.name} />) }
                    </div>
                </div>

                <h1>VIDEO COMPETITION</h1>
                <div className="text-container awards-description">
                    <p>Vote for the best video <a href="https://forms.gle/HRDPd1JNdA5Km48D6" target="_blank" rel="noopener noreferrer">here</a> by Friday 11:59PM!</p>
                    <div className="video-container">
                        <YouTube className="video" opts={opts} videoId="u8bUYtVNwzg"/>
                        <YouTube className="video" opts={opts} videoId="YKDw81HxZh0"/>
                        <YouTube className="video" opts={opts} videoId="tp2kLjscVV0"/>
                        <YouTube className="video" opts={opts} videoId="IZmThgNh_w8"/>
                        <YouTube className="video" opts={opts} videoId="aGfrEYGPN-M"/>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Awards;
