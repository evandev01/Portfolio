import React from 'react';
import { Image, Container } from 'react-bootstrap';
import './style.css';
import 'animate.css';
import headerImage from './assets/edev01.jpg';

function HeaderHome() {
    return (
        <div>
            <Container>
                <Image className='animate__animated animate__fadeIn' id='header' src={headerImage} />
            </Container>
        </div>
    )
};

export default HeaderHome;