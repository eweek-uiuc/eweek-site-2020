import React, { Component } from 'react';

import MainView from './scenes/MainView.jsx';
import About from './scenes/About.jsx';
import Sponsors from './scenes/Sponsors.jsx';
import './styles.scss';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <MainView />
                <About />
                <Sponsors />
            </div>
        );
    }
}

export default Home;