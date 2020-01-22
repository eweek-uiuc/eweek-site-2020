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
        {/*<div className="dates">*/}
        {/*    { events.map(c => <div className='date'>{c.date}</div>) }*/}
        {/*</div>*/}
        <div className="list">
            { events.map(c => <Date {...c} key={c.name} />) }
        </div>
    </div>
);

export default Events;
