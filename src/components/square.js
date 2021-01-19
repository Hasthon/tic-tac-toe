import React from 'react';

export function  Square ({onClick,value, highlightWinner}) {
    const className="square" +(highlightWinner ? "highlight" : "");
    return <button 
    className={className} onClick={onClick}
    
    >{value}</button>
    
}

