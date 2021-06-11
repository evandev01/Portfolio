import React, { useState } from 'react';
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Button,
  Card,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import Burger from './assets/icons/burger_icon.jpg';
import Fit from './assets/icons/fit-track-img.jpg';
import EDB from './assets/icons/icon_eDB.jpg';
import Port from './assets/icons/port-icon.jpg';
import Redeemer from './assets/icons/redeemer_icon.jpg';
import GNL from './assets/icons/great_news.jpg';

import BurgerModal from '../Modal/BurgerModal';
import EDateBookModal from '../Modal/EDateBookModal';
import FitnessTrackerModal from '../Modal/FitnessTrackerModal';
import PortfolioModal from '../Modal/PortfolioModal';
import RedeemerModal from '../Modal/RedeemerModal';
import P5Modal from '../Modal/P5Modal';

import './style.css';
import 'animate.css';

import NavTabs from '../NavTabs';
import HeaderHome from '../HeaderHome';

const Home = () => {
  const [burgerState, setBurgerState] = useState(false);
  const [bookState, setBookState] = useState(false);
  const [fitnessState, setFitnessState] = useState(false);
  const [portfolioState, setPortfolioState] = useState(false);
  const [redeemerState, setRedeemerState] = useState(false);
  const [p5State, setP5State] = useState(false);

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
                  <Button
                    id='detail-btn'
                    onClick={() => setRedeemerState(true)}
                  >
                    Details
                  </Button>
                  <RedeemerModal
                    show={redeemerState}
                    onHide={() => setRedeemerState(false)}
                  />
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
                  <a href='https://editor.p5js.org/evandev01/sketches/ZVfVwelyc'>
                    <Card.Img
                      className='animate__animated animate__flipInX'
                      id='icon'
                      alt='GreatNews.life p5.js sketch'
                      src={GNL}
                    />
                  </a>
                </OverlayTrigger>
                <Card.Body className='white-para'>
                  <Card.Text id='text'>Portfolio</Card.Text>
                  <Button id='detail-btn' onClick={() => setP5State(true)}>
                    Details
                  </Button>
                  <P5Modal show={p5State} onHide={() => setP5State(false)} />
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
                  <Button
                    id='detail-btn'
                    onClick={() => setPortfolioState(true)}
                  >
                    Details
                  </Button>
                  <PortfolioModal
                    show={portfolioState}
                    onHide={() => setPortfolioState(false)}
                  />
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
                  <Button id='detail-btn' onClick={() => setBookState(true)}>
                    Details
                  </Button>
                  <EDateBookModal
                    show={bookState}
                    onHide={() => setBookState(false)}
                  />
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
                  <Button id='detail-btn' onClick={() => setFitnessState(true)}>
                    Details
                  </Button>
                  <FitnessTrackerModal
                    show={fitnessState}
                    onHide={() => setFitnessState(false)}
                  />
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
                  <Button id='detail-btn' onClick={() => setBurgerState(true)}>
                    Details
                  </Button>
                  <BurgerModal
                    show={burgerState}
                    onHide={() => setBurgerState(false)}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default Home;
