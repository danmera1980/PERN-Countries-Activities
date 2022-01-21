import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';


function Landing(){
    return (
        <div>
            <section>
                <Link to='/home'>
                    <div className="earth">
                        {/* <h1>World Activities</h1>
                        <h1>Enter</h1> */}
                        <div className="scene">
                            <div className="banner">
                                <div className="panel"></div>
                                <div className="panel"></div>
                                <div className="panel"></div>
                                <div className="panel"></div>
                                <div className="panel"></div>
                                <div className="panel"></div>
                                <div className="panel"></div>
                                <div className="panel"></div>
                                <div className="panel"></div>
                                <div className="panel"></div>
                            </div>
                            <div className="screen"></div>
                        </div>
                    </div>
                </Link>
            </section>
            <button>
            </button>
        </div>
    );
};

export default Landing;