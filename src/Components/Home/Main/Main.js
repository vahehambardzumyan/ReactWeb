import React from 'react';
import './Main.css'
import './audio/jarvis_morning.mp3'
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

const Main = () => {
    return (
        <div className='Main'>
            <div className="jarvis">
                <img src="https://images.squarespace-cdn.com/content/v1/563cc987e4b05a2939898c49/1506210816573-OY3PBRXTVKXSQU0U23FP/ke17ZwdGBToddI8pDm48kPnsf5mMwK3KDy1tisBlUmRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzo4SI7WUt2Kh3mJ9yIXE1J2LwB1WS8XsjNPjOfnyfL5aVyG4ZMghpx64iX7JBzitc/ihealth-AI.gif" />
            </div>
            <Link to='cards'>
                <p>Main</p>
            </Link>
            <Link to='auth'>
                <p>Sign up</p>
            </Link>
            <h1> For the next Tony Stark , <br/> I trust you</h1>

            <ReactAudioPlayer
                src="require(./audio/jarvis_morning.mp3)"
                autoPlay
                controls
            />



        </div>
    );
}

export default Main;