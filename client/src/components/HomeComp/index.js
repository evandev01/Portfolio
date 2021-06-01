import React from 'react';
import { Container, Jumbotron, Row, Col, Button, Card, Accordion, Overlay, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Burger from './assets/icons/burger_icon.jpg';
import Fit from './assets/icons/fit-track-img.jpg';
import EDB from './assets/icons/icon_eDB.jpg';
import Port from './assets/icons/port-icon.jpg';
import './style.css';
import 'animate.css';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function HomeComp(props) {
    const renderTooltip = () => (
        <Tooltip id="button-tooltip">
            Simple tooltip
        </Tooltip>
    );
    return (
        <div >
            <Container >
                <Jumbotron className='jumbotron'>
                    <Row>
                        <Col>
                            <Image className='animate__animated animate__flipInX' id='icon' alt='Portfolio application' src={Port} />
                            <Accordion eventKey='1'>
                                <Card id='card'>
                                    <Card.Header>
                                        <Accordion.Toggle className='detail-btn' as={Button} variant='link' eventKey='0'>Details</Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey='0'>
                                        <Card.Body className='white-para'>
                                            <Card.Title>Portfolio</Card.Title>
                                            <Card.Text>
                                                React portfolio highlighting projects with bio and contact form that sends messages to my email inbox upon submission.
                                                <br /><br />
                                                Responsibilities:
                                                <br />
                                                Independent Application
                                                <br /><br />
                                                Technologies:
                                                <br />
                                                React, Javascript, Node, Express, Nodemailer, Mailtrap, React-bootstrap, CSS
                                                <br /><br />
                                                <Card.Link a id='github' href='https://github.com/evandev01/portfolio'>GitHub Repo</Card.Link>
                                            </Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>

                        <Col>
                            <a href='https://secret-citadel-74541.herokuapp.com/'>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 100, hide: 150 }}
                                    overlay={<Tooltip>Click To View</Tooltip>}>
                                    <Image className='animate__animated animate__flipInX' id='icon' alt='Edatebook application' src={EDB} />
                                </OverlayTrigger>
                            </a>
                            <Accordion defaultActiveKey='1'>
                                <Card id='card'>
                                    <Card.Header>
                                        <Accordion.Toggle className='detail-btn' as={Button} variant='link' eventKey='0'>Details</Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey='0'>
                                        <Card.Body className='white-para'>
                                            <Card.Title>eDatebook</Card.Title>
                                            <Card.Text>
                                                React application designed to allow user to allow user to create, save, store and delete calendar events and addresses.
                                                <br /><br />
                                                Responsibilities:
                                                <br />
                                                100% front-end / 50% back-end
                                                <br /><br />
                                                Technologies:
                                                <br />
                                                React.js, Javascript, CSS, Graphic Design
                                                <br />
                                                REST API, MySQL
                                                <br /><br />
                                                *Project is currently under construction.
                                                <Card.Link id='github' href='https://github.com/evandev01/edatebook'>GitHub Repo</Card.Link>
                                            </Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>

                        <Col>
                            <a href='https://evandev01.github.io/fitness-tracker/'>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 100, hide: 150 }}
                                    overlay={<Tooltip>Click To View</Tooltip>}>
                                    <Image className='animate__animated animate__flipInX' id='icon' alt='Fitness Tracker application' src={Fit} />
                                </OverlayTrigger>
                            </a>
                            <Accordion eventKey='1'>
                                <Card id='card'>
                                    <Card.Header>
                                        <Accordion.Toggle className='detail-btn' as={Button} variant='link' eventKey='0'>Details</Accordion.Toggle>
                                    </Card.Header>

                                    <Accordion.Collapse eventKey='0'>
                                        <div className='white-para'>
                                            <Card.Body >
                                                <Card.Title>Fitness Tracker</Card.Title>
                                                <Card.Text>
                                                    Application for setting and tracking fitness goals.
                                                    <br /><br />
                                                    Responsibilities:
                                                    <br />
                                                    UI/UX design and Javascript functionality
                                                    <br /><br />
                                                    Technologies:
                                                    <br />
                                                    Javascript, HTML, CSS, Bootstrap, Graphic Design
                                                    <br /><br />
                                                    <Card.Link id='github' href='https://github.com/evandev01/fitness-tracker'>GitHub Repo</Card.Link>
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                    </Accordion.Collapse>

                                </Card>
                            </Accordion>
                        </Col>
                        <Col>
                            <a href='https://desolate-island-65416.herokuapp.com/'>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 100, hide: 150 }}
                                    overlay={<Tooltip>Click To View</Tooltip>}>
                                    <Image className='animate__animated animate__flipInX' id='icon' alt='Eat Da Burger application' src={Burger} />
                                </OverlayTrigger>
                            </a>
                            <Accordion eventKey='1'>
                                <Card id='card'>
                                    <Card.Header>
                                        <Accordion.Toggle className='detail-btn' as={Button} variant='link' eventKey='0'>Details</Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey='0'>
                                        <Card.Body className='white-para'>
                                            <Card.Title>Eat Da Burger</Card.Title>
                                            <Card.Text>
                                                Fun application that allows the user to create a burger, devour it, eat it again or delete it.
                                                    <br /><br />
                                                    Responsibilities:
                                                    <br />
                                                    Solo Application
                                                    <br /><br />
                                                    Technologies:
                                                    <br />
                                                    Javascript, Express, MVC, MySQL, Handlebars
                                                    <br /><br />
                                                <Card.Link a id='github' href='https://github.com/evandev01/burger_express_handlebars'>GitHub Repo</Card.Link>
                                            </Card.Text>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        </div>
    )
};

export default HomeComp;