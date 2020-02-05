import React, {Component} from 'react';

import Harting from '../../../assets/sponsors/harting.png';
import SBB from '../../../assets/sponsors/sbb.png';
import Goldman from '../../../assets/sponsors/goldman.png';
import Synchrony from '../../../assets/sponsors/synchrony.png';


class Sponsors extends Component {
    render() {
        return (
            <div className="sponsors">
                <span className="sponsors__title">OUR SPONSORS</span>
                <p>
                    E-Week 2020 is proudly sponsored by Harting, SBB Research Group, Goldman-Sachs, and Synchrony.
                    Their support is integral to the success of this event and our committee's goals.
                </p>
                <p>
                    If you company is interested in sponsoring E-Week at Illinois,
                    please contact our Co-Corporate Chairs at <u>eweek.corporate@gmail.com</u>
                </p>
                <ul className="sponsors__list">
                    <a className="sponsors__logo" href="https://www.harting.com/" target="_blank" rel="noopener noreferrer"><img src={Harting} alt="a"/></a>
                    <a className="sponsors__logo" href="https://www.sbbrg.com" target="_blank" rel="noopener noreferrer"><img src={SBB} alt="ej"/></a>
                    <a className="sponsors__logo" href="https://www.goldmansachs.com" target="_blank" rel="noopener noreferrer"><img src={Goldman} alt="g"/></a>
                    <a className="sponsors__logo" href="https://www.synchrony.com" target="_blank" rel="noopener noreferrer"><img src={Synchrony} alt="s"/></a>
                </ul>
            </div>
        );
    }
}

export default Sponsors;