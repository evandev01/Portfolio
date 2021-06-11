import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import './style.css';

const NavTabs = () => {
  return (
    <div>
      <Container>
        <Nav id='frosted' justify variant='tabs'>
          <Nav.Item>
            <Nav.Link id='link' href='/'>
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id='link' href='/portfolio'>
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id='link' href='/contact'>
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
};

export default NavTabs;
