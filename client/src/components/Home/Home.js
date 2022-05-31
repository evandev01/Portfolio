import React, { useState } from 'react'
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Button,
  Card,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
// TODO: IMPORT IMAGES FROM ASSETS FOLDER IN SRC ROOT
import Redeemer from './assets/icons/redeemer_icon.jpg'
import Rustic from '../../assets/icons/rustic_logo.png'
import GNL from './assets/icons/great_news.jpg'
import EvansBest from '../../assets/icons/evans_best_icon.jpg'
import RusticModal from '../Modal/RusticModal'
import RedeemerModal from '../Modal/RedeemerModal'
import P5Modal from '../Modal/P5Modal'
import EvansBestModal from '../Modal/EvansBestModal'
import NavTabs from '../NavTabs'
import HeaderHome from '../HeaderHome'
import './style.css'
import 'animate.css'

const Home = () => {
  const [rusticState, setRusticState] = useState(false)
  const [redeemerState, setRedeemerState] = useState(false)
  const [p5State, setP5State] = useState(false)
  const [evansBestState, setEvansBestState] = useState(false)

  return (
    <Container id='home-body'>
      <HeaderHome />
      <NavTabs />
      <Jumbotron id='home-jumbo'>
        <Container
          style={{
            display: 'block',
            flexWrap: 'wrap',
          }}
        >
          <Row className='justify-content-md-center'>
            <Col
              xs={12}
              md={4}
              lg={4}
              xl={3}
              className='text-center mt-2'
              id='column'
            >
              <Card className='text-center' id='card'>
                <OverlayTrigger
                  placement='top'
                  delay={{ show: 100, hide: 150 }}
                  overlay={<Tooltip>Click To View</Tooltip>}
                >
                  <a href='https://www.rusticliving.design/'>
                    <Card.Img
                      className='animate__animated animate__flipInX'
                      id='icon'
                      alt='Rustic Living application'
                      src={Rustic}
                    />
                  </a>
                </OverlayTrigger>
                <Card.Body className='white-para'>
                  <Card.Text id='text'>Rustic Living</Card.Text>
                  <Button id='detail-btn' onClick={() => setRusticState(true)}>
                    Details
                  </Button>
                  <RusticModal
                    show={rusticState}
                    onHide={() => setRusticState(false)}
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col
              xs={12}
              md={4}
              lg={4}
              xl={3}
              className='text-center mt-2'
              id='column'
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
                  <Card.Text id='text'>Redeemer Church</Card.Text>
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
              xs={12}
              md={4}
              lg={4}
              xl={3}
              className='text-center mt-2'
              id='column'
            >
              <Card className='text-center' id='card'>
                <OverlayTrigger
                  placement='top'
                  delay={{ show: 100, hide: 150 }}
                  overlay={<Tooltip>Click To View</Tooltip>}
                >
                  <a href='https://www.evansbest.com/'>
                    <Card.Img
                      className='animate__animated animate__flipInX'
                      id='icon'
                      alt='Rustic Living application'
                      src={EvansBest}
                    />
                  </a>
                </OverlayTrigger>
                <Card.Body className='white-para'>
                  <Card.Text id='text'>Evan's Best</Card.Text>
                  <Button
                    id='detail-btn'
                    onClick={() => setEvansBestState(true)}
                  >
                    Details
                  </Button>
                  <EvansBestModal
                    show={evansBestState}
                    onHide={() => setEvansBestState(false)}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              md={4}
              lg={4}
              xl={3}
              className='text-center mt-2'
              id='column'
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
                  <Card.Text id='text'>GreatNews.life</Card.Text>
                  <Button id='detail-btn' onClick={() => setP5State(true)}>
                    Details
                  </Button>
                  <P5Modal show={p5State} onHide={() => setP5State(false)} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Container>
  )
}

export default Home
