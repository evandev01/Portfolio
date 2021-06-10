import React, { Fragment } from 'react';
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Button,
  Card,
  // Accordion,
  OverlayTrigger,
  Tooltip
  // CardColumns
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Burger from './assets/icons/burger_icon.jpg';
import Fit from './assets/icons/fit-track-img.jpg';
import EDB from './assets/icons/icon_eDB.jpg';
import Port from './assets/icons/port-icon.jpg';
import Redeemer from './assets/icons/redeemer_icon.jpg';
import Background from './assets/background/colorBg4.jpg';
import './style.css';
import 'animate.css';

import NavTabs from '../NavTabs';
import HeaderHome from '../HeaderHome';

const Home = () => {
  const renderTooltip = () => (
    <Tooltip id='button-tooltip'>Simple tooltip</Tooltip>
  );
  return (
    <Container id='home-body'>
      <HeaderHome />
      <NavTabs />
      <Jumbotron id='home-jumbo'>
        <Container
          style={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <Row className='justify-content-center'>
            <Col
              xs={8}
              sm={6}
              md={6}
              lg={4}
              id='column'
              className='text-center'
            >
              {/* <CardColumns className='text-center'> */}
              <Card id='card'>
                <OverlayTrigger
                  placement='top'
                  delay={{ show: 100, hide: 150 }}
                  overlay={<Tooltip>Click To View</Tooltip>}
                >
                  <a href='https://www.redeemerchurch.life/'>
                    <Card.Img
                      className='animate__animated animate__flipInX'
                      id='icon'
                      alt='Redeemer Church application'
                      src={Redeemer}
                    />
                  </a>
                </OverlayTrigger>
                <Card.Body className='white-para'>
                  <Card.Text id='text' className='text-center'>
                    Redeemer Church
                  </Card.Text>
                  <Button id='detail-btn'>Details</Button>

                  {/* <Card.Text>
                Redeemer Church web application
                
                <br />
                Requirements:
                <br />
                <ul>
                  <li>Stream live services</li>
                  <li>Allow user to give tithes and offerings online</li>
                  <li>
                    Provide information about the church, events and staff
                  </li>
                </ul>
                <br />
                <br />
                Technologies:
                <br />
                React.js, JavaScript, Node.js, React-bootstrap, HTML5, CSS3,
                Pixelmator graphics software
                <br />
                <br />
                <Card.Link
                  a
                  id='github'
                  href='https://github.com/evandev01/Redeemer'
                >
                  GitHub Repo
                </Card.Link>
              </Card.Text> */}
                </Card.Body>
              </Card>
            </Col>

            <Col
              xs={8}
              sm={6}
              md={6}
              lg={4}
              id='column'
              className='text-center'
            >
              <Card className='text-center' id='card'>
                <Card.Img
                  className='animate__animated animate__flipInX'
                  id='icon'
                  alt='Portfolio web application'
                  src={Port}
                />
                <Card.Body className='white-para'>
                  <Card.Text id='text'>Portfolio</Card.Text>
                  <Button id='detail-btn'>Details</Button>
                  {/* <Card.Text>
                React portfolio highlighting projects with bio and contact form
                that sends messages to my email inbox upon submission.
                <br />
                <br />
                Requirements:
                <br />
                <ul>
                  <li>Provide access to my applications</li>
                  <li>Provide access to my GitHub repository</li>
                  <li>Provide information about myself</li>
                  <li>Allow user to contact me</li>
                </ul>
                <br />
                <br />
                Technologies:
                <br />
                React.js, JavaScript, Node.js, Express, Nodemailer, SendGrid,
                React-bootstrap, HTML5, CSS3, Pixelmator graphics software
                <br />
                <br />
                <Card.Link
                  a
                  id='github'
                  href='https://github.com/evandev01/portfolio'
                >
                  GitHub Repo
                </Card.Link>
              </Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={8}
              sm={6}
              md={6}
              lg={4}
              id='column'
              className='text-center'
            >
              <Card className='text-center' id='card'>
                <OverlayTrigger
                  placement='top'
                  delay={{ show: 100, hide: 150 }}
                  overlay={<Tooltip>Click To View</Tooltip>}
                >
                  <a href='https://secret-citadel-74541.herokuapp.com/'>
                    <Card.Img
                      className='animate__animated animate__flipInX'
                      id='icon'
                      alt='Edatebook application'
                      src={EDB}
                    />
                  </a>
                </OverlayTrigger>
                <Card.Body className='white-para'>
                  <Card.Text id='text'>eDatebook</Card.Text>
                  <Button id='detail-btn'>Details</Button>

                  {/* <Card.Text>
                School project application designed to allow user to allow user
                to create, save, store and delete calendar events and addresses.
                <br />
                <br />
                Responsibilities:
                <br />
                Full-Stack
                <br />
                <br />
                Technologies:
                <br />
                React.js, JavaScript, Node.js, Express, MySQL, HTML5, CSS3,
                Pixelmator graphics software
                <br />
                <br />
                *Project is currently under construction.
                <Card.Link
                  id='github'
                  href='https://github.com/evandev01/edatebook'
                >
                  GitHub Repo
                </Card.Link>
              </Card.Text> */}
                </Card.Body>
              </Card>
            </Col>

            <Col
              xs={8}
              sm={6}
              md={6}
              lg={4}
              id='column'
              className='text-center'
            >
              <Card className='text-center' id='card'>
                <OverlayTrigger
                  placement='top'
                  delay={{ show: 100, hide: 150 }}
                  overlay={<Tooltip>Click To View</Tooltip>}
                >
                  <a href='https://evandev01.github.io/fitness-tracker/'>
                    <Card.Img
                      className='animate__animated animate__flipInX'
                      id='icon'
                      alt='Fitness Tracker application'
                      src={Fit}
                    />
                  </a>
                </OverlayTrigger>
                <Card.Body className='white-para'>
                  <Card.Text id='text'>Fitness Tracker</Card.Text>
                  <Button id='detail-btn'>Details</Button>

                  {/* <Card.Text>
                Application for setting and tracking fitness goals.
                <br />
                <br />
                Responsibilities:
                <br />
                UI/UX design and Javascript functionality
                <br />
                <br />
                Technologies:
                <br />
                Javascript, HTML5, CSS3, Bootstrap, Pixelmator graphics software
                <br />
                <br />
                <Card.Link
                  id='github'
                  href='https://github.com/evandev01/fitness-tracker'
                >
                  GitHub Repo
                </Card.Link>
              </Card.Text> */}
                </Card.Body>
              </Card>
            </Col>

            <Col
              xs={8}
              sm={6}
              md={6}
              lg={4}
              id='column'
              className='text-center'
            >
              <Card className='text-center' id='card'>
                <OverlayTrigger
                  placement='top'
                  delay={{ show: 100, hide: 150 }}
                  overlay={<Tooltip>Click To View</Tooltip>}
                >
                  <a href='https://desolate-island-65416.herokuapp.com/'>
                    <Card.Img
                      className='animate__animated animate__flipInX'
                      id='icon'
                      alt='Eat Da Burger application'
                      src={Burger}
                    />
                  </a>
                </OverlayTrigger>
                <Card.Body className='white-para'>
                  <Card.Text id='text'>Eat Da Burger</Card.Text>
                  <Button id='detail-btn'>Details</Button>

                  {/* <Card.Text>
                School application that allows the user to create a burger,
                devour it, eat it again or delete it.
                <br />
                <br />
                Responsibilities:
                <br />
                Full-Stack
                <br />
                <br />
                Technologies:
                <br />
                JavaScript, Node.js, Handlebars, Express, MVC, MySQL, HTML5,
                CSS3, Pixelmator graphics software
                <br />
                <br />
                <Card.Link
                  a
                  id='github'
                  href='https://github.com/evandev01/burger_express_handlebars'
                >
                  GitHub Repo
                </Card.Link>
              </Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={8} sm={6} md={6} lg={4} id='column' />
            {/* </CardColumns> */}
          </Row>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default Home;
