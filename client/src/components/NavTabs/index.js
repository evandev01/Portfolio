import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import './style.css';

function NavTabs(props) {
    return (
        <div>
            <Container>
                <Nav id='frosted' justify variant="tabs">
                    <Nav.Item>
                        <Nav.Link id='link' href="/">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='link' href='/portfolio'>Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='link' href='/contact'>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    )
};

export default NavTabs;



















{/* <Nav id='navDiv'>
<Navbar>
    <Nav.Item>
        <Nav.Link id='link' href='/' >Portfolio</Nav.Link>
    </Nav.Item>
</Navbar>
<Navbar expand='lg'>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='justify-content-end'>
            <Nav.Item>
                <Nav.Link id='link' href='about'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id='link' href='contact' >Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar.Collapse>
</Navbar>
</Nav> */}