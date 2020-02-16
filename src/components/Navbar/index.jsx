import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo_secondary.png';
import menuIcon from '../../assets/icons/menu_icon.svg';
import close from '../../assets/icons/left.svg';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      top: true,
      open: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('scroll', this.handleScroll);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    const { open } = this.state;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && open) {
      this.setState({
        open: false,
      });
    }
  }

  handleScroll = () => {
    if (window.scrollY === 0) {
      this.setState({ top: true });
    } else {
      this.setState({ top: false });
    }
  }

  toggleMenu() {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }

  render() {
    const { open, top } = this.state;

    return (
      <nav id="site-nav" className={top ? 'clear' : 'filled'}>
        <Link className="logo" to="/">
          <img src={Logo} alt="EWEEK Logo" />
        </Link>

        <img className="menu-icon" src={menuIcon} alt="Menu Button" onClick={this.toggleMenu}/>

        <nav ref={this.setWrapperRef} className={`nav-links ${open ? 'open' : 'closed'}`}>
          <img className="close" src={close} alt="close pane" onClick={this.toggleMenu} />
          <img src={Logo} alt="EWEEK Logo" />
          <Link onClick={this.toggleMenu} to="/">Home</Link>
          <a href="https://forms.gle/8GjPLTpyf5qh2edTA" target="_blank" rel="noopener noreferrer">Register</a>
          <Link onClick={this.toggleMenu} to="/events">Events</Link>
          <a href="https://docs.google.com/spreadsheets/d/1YE6h1A3jwMWX97aLxMH2j-Eobd7uolbgxkipIHND4bs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Leaderboard</a>
          <Link onClick={this.toggleMenu} to="/awards">Awards</Link>
          {/*<a href="https://docs.google.com/forms/d/e/1FAIpQLSfvEYiQcS8Xek2DA2lunKUebSFpOr1s4AHhQhbt82-DoSqPEA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Order of the Engineer</a>*/}
          <Link onClick={this.toggleMenu} to="/about">About</Link>
        </nav>
      </nav>
    );
  }
}

export default Nav;
