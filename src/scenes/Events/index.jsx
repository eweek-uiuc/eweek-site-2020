import React from 'react';
import events from './event';

const Date = (props) => {
    const { name, events } = props;
    return (
        <div className="day">
            <h3>{ name }</h3>
            {events.map(e => <div className='event'>
                <img src={e.image} alt=''/>
                <div className="info">
                    <div className='name'>{ e.name }</div>
                    <div className='time'>{ e.time }</div>
                    <div className='location'>{ e.location }</div>
                </div>
            </div>)}
        </div>
    );
};

const Events = () => (
    <div className="events">
        <div className='sidebar'>
            <div className="links">
                <a href="https://forms.gle/HCrGQfJcaDHUMtNT9">Register</a>
                <a href="https://docs.google.com/document/d/1pjhlVNDJpfb0KZObH8u5VE4wj7Fwvr_i5hlG8mP2DUg/edit?usp=sharing">Captain's Packet</a>
                <a>Event Rules Packet</a>
                <a>Co-Host Sign-ups</a>
            </div>
            <div className="dates">
                { events.map(c => <div className='date'>{c.date}</div>) }
            </div>
        </div>
        <div className="list">
            { events.map(c => <Date {...c} key={c.name} />) }
        </div>
    </div>
);

export default Events;
