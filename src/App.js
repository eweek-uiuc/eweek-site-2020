import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './scenes/Home'
import Events from './scenes/Events';
import About from './scenes/About';
import Awards from './scenes/Awards';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/events" exact component={Events} />
                        <Route path="/awards" exact component={Awards} />
                        <Route path="/about" exact component={About} />
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
