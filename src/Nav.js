import React, { Component } from 'react';
import './Nav.css'

function Nav() {
    return (
        <div>
            <a href='./Home.js' className='links'>Home</a>
            <a href='#' className='links'>registration</a>
            <a href='#' className='links'>conatct</a>
        </div>
    );
}

export default Nav;