import React, {Component} from 'react';

import About from './components/About.jsx';
import Sponsors from './components/Sponsors.jsx';
import Logo from '../../assets/logo_main.png';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <img className="logo" src={Logo} alt="logo"/>
                <About/>
                <Sponsors/>
            </div>
        );
    }
}

export default Home;