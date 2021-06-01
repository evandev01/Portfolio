import React from 'react';
import { Image, Container } from 'react-bootstrap';
import './style.css';
import 'animate.css';
import headerImage from './assets/edev03.jpg';

function HeaderAbout() {
    return (
        <div>
            <Container>
                <Image id='header' src={headerImage} />
            </Container>
        </div>
    )
};

export default HeaderAbout;
