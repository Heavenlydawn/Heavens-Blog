import React from 'react';
import './App.css';

const NavBar = () => {

    return (
        <div className="nav">
            <h2> Heaven</h2>
            <div className="icons">
                <a href="https://github.com/Heavenlydawn?tab=repositories">
                    <i class="fa fa-2x fa-github-alt" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
}

export default NavBar;