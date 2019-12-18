import React, {Component} from 'react';

import Home from './scenes/Home'
import Footer from './components/Footer';
import Header from "./components/Header";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Home/>
                <Footer/>
            </div>
        );
    }
}

export default App;
