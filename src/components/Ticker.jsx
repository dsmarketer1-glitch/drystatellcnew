import React from 'react';

const Ticker = () => {
  const text = "FAST EMERGENCY RESTORATION • 60 MINUTE ARRIVAL GUARANTEE • 24/7 DISPATCH READY • CALL NOW (214) 785-1130 • ";
  
  return (
    <div className="ticker-wrapper">
      <div className="ticker-content">
        <div className="ticker-item">{text}</div>
        <div className="ticker-item">{text}</div>
        <div className="ticker-item">{text}</div>
        <div className="ticker-item">{text}</div>
      </div>
    </div>
  );
};

export default Ticker;
