import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

function Nav(){
    return (
        <header>
            <div>Countries and Activities</div>
            <div>
                <ul>
                    <Link to='/home'>
                        <li>Home</li>
                    </Link>
                    <Link to='/activity'>
                        <li>New Activity</li>
                    </Link>
                    {/* <li>About</li> */}
                </ul>
            </div>

        </header>
    );
};

export default Nav;