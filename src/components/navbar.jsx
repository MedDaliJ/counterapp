import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {

    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
            Counters
                <span className="badge badge-pill badge-secondary m-2">
                    {totalCounters}
                </span>
            </a>
        </nav>

      );
};
 
export default NavBar;