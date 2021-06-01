import React, { useState } from 'react';
import HomeComp from '../components/HomeComp';
import NavTabs from '../components/NavTabs';
import HeaderHome from '../components/HeaderHome';

function Home() {
    return (
        <div id='home-body'>
            <HeaderHome />
            <NavTabs />
            <HomeComp
            />
        </div>
    )
};

export default Home;