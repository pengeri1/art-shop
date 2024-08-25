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
import './home.css';

function Home() {
    return (
        <>
            <div className="image-gallery">
                <img src={am} alt="AM" />
                <img src={bluetunnel} alt="Blue Tunnel" />
                <img src={borntodie} alt="Born to Die" />
                <img src={doomsday} alt="Doomsday" />
                <img src={graduation} alt="Graduation" />
                <img src={melodrama} alt="Melodrama" />
                <img src={natgeo} alt="Nat Geo" />
                <img src={northernlights} alt="Northern Lights" />
                <img src={sale} alt="Sale" />
            </div>
        </>
    );
}

export default Home;