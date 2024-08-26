import React from 'react';
import './about.css';
import profilePicture from '../Components/Images/about.JPG';

function About() {
    return (
        <div className="about-container">
            <div className="about-image">
                <img src={profilePicture} alt="Eric Peng" />
            </div>
            <div className="about-text">
                <h1>About Me</h1>
                <p className="about-description">
                    Hi! I'm Eric Peng, a software developer with a passion for creating innovative solutions.
                    I enjoy the creativity that development entails, but outside of tech, I love architecture, art, and music.
                </p>
                <p className="about-description">
                    Throughout grade school, painting was always a creative outlet for me.
                    However, the demands of university kept me from it. It wasn't until my final year, when life slowed down,
                    that I was able to return to one of my favorite hobbies. I rekindled my love for painting by creating decorations for my room,
                    starting with my favorite music albums.
                </p>
                <p className="about-description">
                    Word spread, and I began doing custom paintings for friends. I decided to create this page
                    to offer both my past pieces and custom art paintings for those looking to add a personal touch to their spaces, just like I did.
                </p>
            </div>
        </div>
    );
}

export default About;
