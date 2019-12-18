import React, {Component} from 'react';

import Ameren from '../../../assets/sponsors/ameren.png';
import EdwardJones from '../../../assets/sponsors/edward-jones.png';
import Goldman from '../../../assets/sponsors/goldman.png';
import Nielsen from '../../../assets/sponsors/nielsen.png';
import Synchrony from '../../../assets/sponsors/synchrony.png';


class Sponsors extends Component {
    render() {
        return (
            <div className="sponsors description">
                <span className="title">OUR SPONSORS</span>
                <div>
                    <p>
                        E-Week 2020 is proudly sponsored by Ameren, Edward Jones, Goldman-Sachs, Nielsen, and Synchrony.
                        Their support is integral to the success of this event and our committee's goals.
                    </p>
                    <p>
                        If you company is interested in sponsoring E-Week at Illinois,
                        please contact our Co-Corporate Chairs at <u>eweek.corporate@gmail.com</u>
                    </p>
                    <ul className="sponsor-list">
                        <a href="https://www.ameren.com"><img src={Ameren} alt="a"/></a>
                        <a href="https://www.edwardjones.com/index.html"><img src={EdwardJones} alt="ej"/></a>
                        <a href="https://www.goldmansachs.com"><img src={Goldman} alt="g"/></a>
                        <a href="https://www.nielsen.com"><img src={Nielsen} alt="n"/></a>
                        <a href="https://www.synchrony.com"><img src={Synchrony} alt="s"/></a>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sponsors;