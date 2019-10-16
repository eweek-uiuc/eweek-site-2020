import React, { Component } from 'react';

import Logo from '../components/Logo';

import Ameren from '../../../assets/sponsors/ameren.png';
import EdwardJones from '../../../assets/sponsors/edward-jones.png';
import Goldman from '../../../assets/sponsors/goldman.png';
import Nielsen from '../../../assets/sponsors/nielsen.png';
import Synchrony from '../../../assets/sponsors/synchrony.png';


class Sponsors extends Component {
    render() {
        return (
            <div className="sponsors-wrapper">
                <h1>OUR SPONSORS</h1>
                <p>
                    E-Week 2020 is proudly sponsored by Ameren, Edward Jones, Goldman-Sachs, Nielsen, and Synchrony.
                    Their support is integral to the success of this event and our committee's goals.
                </p>
                <p>
                    If you company is interested in sponsoring E-Week at Illinois, 
                    please contact our Co-Corporate Chairs at <u>eweek.corporate@gmail.com</u>
                </p>
                <div className="container sponsor-logos" >
                    <div className="logos1">
                        <Logo href="https://www.ameren.com" src={Ameren} alt="ameren" />
                        <Logo href="https://www.edwardjones.com/index.html" src={EdwardJones} alt="ej" />
                    </div>
                    <div className="logos2">
                        <Logo href="https://www.goldmansachs.com" src={Goldman} alt="goldman" />
                        <Logo href="https://www.nielsen.com" src={Nielsen} alt="nielsen" />
                    </div>
                    <div className="logos3">
                        <Logo href="https://www.synchrony.com" src={Synchrony} alt="synchrony" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsors;