import React, { Component } from 'react';

class Logo extends Component {
    render() {
        const { src, alt, href } = this.props;
        
        return (
            <div className="logo">
                <a href={href}>
                    <img src={src} alt={alt} />
                </a>
            </div>
        );
    }
}

export default Logo;