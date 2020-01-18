import React from 'react';

import awardtypes from './awardtypes.js';

const Awardmember = (props) => {
    const { name, major, year, image } = props;
    return (
        <div className="awardmember">
            <div className="content" style={{ backgroundImage: `url(${image})` }}>
                <div className="info">
                <h3>{ name }</h3>
                <p>{ major }</p>
                <p>{ year }</p>
                </div>
            </div>
        </div>
    );
};

const Awards = () => (
    <div className="awards">
      <div className="text-container">
        <h1>E-WEEK AWARDS</h1>
        <div>&nbsp;&nbsp;&nbsp;Vote for your friends for EWEEK Awards!
        </div>
      </div>
      <div className="container">
        <div className="awardtypes">
          { awardtypes.map(c => <Awardmember {...c} key={c.name} />) }
        </div>
      </div>
    </div>
);
  
export default Awards;
