import React, { Component } from 'react';

import Logo from '../../../assets/main_logo.png';

class MainView extends Component {
    render() {
        return(
            <div className="splash">
                <img id="main_logo" src={Logo} alt='logo' />
            </div>
        );
    }
}

export default MainView;