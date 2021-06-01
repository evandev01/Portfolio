import React from 'react';
import AboutComp from '../components/AboutComp';
import NavTabs from '../components/NavTabs';
import HeaderAbout from '../components/HeaderAbout';

function About() {
    return (
        <div className='about-body'>
            <HeaderAbout />
            <NavTabs />
            <AboutComp />
        </div>
    )
};

export default About;