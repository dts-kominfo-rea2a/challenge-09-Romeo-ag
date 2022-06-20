// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import "./header.css";
import parse from 'html-react-parser'

const createLine = (times)=>{
    const dot = '&#x2B29';
    return dot.repeat(times)
}

const Header = () => {
    return (
        
        <div className='header'>
            <div className='title'>Call a Friend</div>
            <div className='subtitle'>Your friendly contact app </div>
            <div className='line'>{parse(createLine(80))}</div>
        </div>
        
    )
}

export default Header;