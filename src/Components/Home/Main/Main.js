import React from 'react';
import './Main.css'
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className='Main'>
            <div className="jarvis">

                <img alt="G" className="jarv" src="https://images.squarespace-cdn.com/content/v1/563cc987e4b05a2939898c49/1506210816573-OY3PBRXTVKXSQU0U23FP/ke17ZwdGBToddI8pDm48kPnsf5mMwK3KDy1tisBlUmRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzo4SI7WUt2Kh3mJ9yIXE1J2LwB1WS8XsjNPjOfnyfL5aVyG4ZMghpx64iX7JBzitc/ihealth-AI.gif" />
            </div>
            <div className="menu">
                <Link to='cards'>
                    <button
                        className="but">
                        <p > Choose suit </p>
                    </button>
                </Link>
                <Link to='auth'>
                    <button
                        className="but">
                        <p > Login </p>
                    </button>
                </Link>
                <Link to='myprofile'>
                    <button
                        className="but">
                        <p > My Profile </p>
                    </button>
                </Link>
            </div>

            {/* <h1> For the next Tony Stark , <br /> I trust you</h1> */}





        </div>
    );
}

export default Main;