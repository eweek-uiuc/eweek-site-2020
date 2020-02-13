import React, {Component} from 'react';
import arrow from '../../../assets/icons/left.svg';

class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true,
        };

        this.toggle = this.toggle.bind(this);
        this.contentRef = React.createRef();
    }

    componentDidMount() {
    }

    toggle(e) {
        if (e.target.tagName.toLowerCase() !== 'a') {
            this.setState(prevState => ({
                collapsed: !prevState.collapsed,
            }));
        }
    }

    render() {
        const {image, name, date, time, location, points} = this.props;
        const {collapsed} = this.state;

        const infoStyles = {
            height: collapsed ? 'min-content' : '20vh',
            display: collapsed ? 'none' : 'flex',
        };

        return (
            <div className='event' onClick={this.toggle}>
                <div className="details">
                    <div className="title">
                        <div className="icon"><img src={image} alt=''/></div>
                        <div className='name'>{name}</div>
                    </div>

                    <div className="info" ref={this.contentRef} style={infoStyles}>
                        <div className='date'>{date}</div>
                        <div className='time'>{time}</div>
                        <div className='location'>{location}</div>
                        <div className='points'>{points}</div>
                    </div>
                </div>
                <div className={`arrow ${collapsed ? 'down' : 'up'}`}><img src={arrow} alt=''/></div>
            </div>
        );
    }
}

export default Info;