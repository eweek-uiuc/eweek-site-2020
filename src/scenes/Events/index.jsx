import React from 'react';
import Info from './components/Info';
import events from './components/events';

const Date = (props) => {
    const {name, events} = props;
    return (
        <div className="day">
            <h3>{name}</h3>
            {events.map(e => <Info image ={e.image} name={e.name} date={e.date} time={e.time} location={e.location} points={e.points} host={e.host}/>)}
        </div>
    );
};

const Events = () => (
    <div className="events">
        <div className='sidebar'>
            <div className="links">
                <a href="https://docs.google.com/document/d/1pjhlVNDJpfb0KZObH8u5VE4wj7Fwvr_i5hlG8mP2DUg/edit?usp=sharing"
                   target="_blank" rel="noopener noreferrer">Captain's Packet</a>
                <a href='https://docs.google.com/document/d/1iuW0FC6YjSS1Rmj30V0z7NMVewUHLslWEgQ4geVcql8/edit?usp=sharing'
                   target="_blank" rel="noopener noreferrer">Event Rules</a>
                <a href='https://docs.google.com/spreadsheets/d/1vs0VFAaVYvXsjeIggXeu57TD6w1eKUntD8NJrMewcUk/edit?usp=sharing'
                   target="_blank" rel="noopener noreferrer">Photo Scavenger Hunt</a>
                <a href='https://forms.gle/XbAHhZSicpWfMEay5'
                   target="_blank" rel="noopener noreferrer">Team Name Competition</a>
                <a href='https://forms.gle/3KeJt2oB4VJ8iGxf6' target="_blank" rel="noopener noreferrer">Co-Host
                    Sign-ups</a>
            </div>
        </div>
        <div className="list">
            {events.map(c => <Date {...c} key={c.name}/>)}
        </div>
    </div>
);

export default Events;
