import React from 'react';
import events from './event';

const Date = (props) => {
    const { name, events } = props;
    return (
        <div className="day">
            <h3>{ name }</h3>
            {events.map(e => <div className='event'>
                <div className="icon">
                <img src={e.image} alt=''/>
                </div>
                <div className="info">
                    <div className='name'>{ e.name }</div>
                    <div className='when'>
                        <div className='date'>{ e.date }</div>
                        <div className='time'>{ e.time }</div>
                    </div>
                    <div className='details'>
                        <div className='location'>{ e.location }</div>
                        <div className='points'>{ e.points }</div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

const Events = () => (
    <div className="events">
        <div className='sidebar'>
            <div className="links">
                <a href="https://docs.google.com/document/d/1pjhlVNDJpfb0KZObH8u5VE4wj7Fwvr_i5hlG8mP2DUg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Captain's Packet</a>
                <a href='https://docs.google.com/document/d/1iuW0FC6YjSS1Rmj30V0z7NMVewUHLslWEgQ4geVcql8/edit?usp=sharing' target="_blank" rel="noopener noreferrer">Event Rules</a>
                <a href='https://docs.google.com/spreadsheets/d/1vs0VFAaVYvXsjeIggXeu57TD6w1eKUntD8NJrMewcUk/edit?usp=sharing' target="_blank" rel="noopener noreferrer">Photo Scavenger Hunt</a>
                <a href='https://forms.gle/3KeJt2oB4VJ8iGxf6' target="_blank" rel="noopener noreferrer">Co-Host Sign-ups</a>
            </div>
            {/*<div className="dates">*/}
            {/*    { events.map(c => <div className='date'>{c.date}</div>) }*/}
            {/*</div>*/}
        </div>
        <div className="list">
            { events.map(c => <Date {...c} key={c.name} />) }
        </div>
    </div>
);

export default Events;
