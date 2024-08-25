import React from 'react';
import { Image } from 'antd';
import am from '../Components/Images/AM.jpeg';
import bluetunnel from '../Components/Images/bluetunnel.jpeg';
import borntodie from '../Components/Images/borntodie.jpeg';
import doomsday from '../Components/Images/doomsday.jpeg';
import graduation from '../Components/Images/graduation.jpeg';
import melodrama from '../Components/Images/melodrama.jpeg';
import natgeo from '../Components/Images/natgeo.jpeg';
import northernlights from '../Components/Images/northernlights.jpeg';
import sale from '../Components/Images/sale.jpeg';
import suitfrog from '../Components/Images/suitfrog.jpeg';
import gunfrog from '../Components/Images/gunfrog.jpeg';
import './home.css';

function Home() {
    return (
        <div className="image-gallery">
            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                <div className="image-item">
                    <Image width={500} src={graduation} alt="Graduation" />
                    <div className="image-text">Graduation Album Cover (SOLD OUT)</div>
                </div>
                <div className="image-item">
                    <Image width={500} src={borntodie} alt="Born to Die" />
                    <div className="image-text">Born to Die Album Cover (SOLD OUT)</div>
                </div>
                <div className="image-item">
                    <Image width={450} src={bluetunnel} alt="Blue Tunnel" />
                    <div className="image-text">Blue Tunnel</div>
                </div>
                <div className="image-item">
                    <Image width={500} src={doomsday} alt="Doomsday" />
                    <div className="image-text">Operation Doomsday Album Cover (SOLD OUT)</div>
                </div>
                <div className="image-item">
                    <Image width={500} src={northernlights} alt="Northern Lights" />
                    <div className="image-text">Northern Lights (SOLD OUT)</div>
                </div>
                <div className="image-item">
                    <Image width={400} src={gunfrog} alt="Gun Frog" />
                    <div className="image-text">Western Frog (SOLD OUT)</div>
                </div>
                <div className="image-item">
                    <Image width={500} src={melodrama} alt="Melodrama" />
                    <div className="image-text">Melodrama Album Cover</div>
                </div>
                <div className="image-item">
                    <Image width={500} src={natgeo} alt="Nat Geo" />
                    <div className="image-text">National Geographic Magazine Cover</div>
                </div>
                <div className="image-item">
                    <Image width={500} src={am} alt="AM" />
                    <div className="image-text">AM Album Cover</div>
                </div>
                
                <div className="image-item">
                    <Image width={400} src={sale} alt="Sale" />
                    <div className="image-text">Sales LP Album Cover</div>
                </div>
                <div className="image-item">
                    <Image width={400} src={suitfrog} alt="Suit Frog" />
                    <div className="image-text">Frog in a Suit (SOLD OUT)</div>
                </div>
            </Image.PreviewGroup>
        </div>
    );
}

export default Home;