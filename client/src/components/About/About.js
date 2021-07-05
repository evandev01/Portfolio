import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Col, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Photo from './assets/black_tie_smile.jpeg'
import Logo from './assets/reactImg.png'
import NavTabs from '../NavTabs'
import HeaderAbout from '../HeaderAbout'
import 'animate.css'
import './style.css'

const About = () => {
  return (
    <div className='about-body'>
      <HeaderAbout />
      <NavTabs />
      <Container>
        <Jumbotron id='about-jumbo'>
          <Container>
            <Row className='justify-content-md-center'>
              <Col />
              <Col>
                <Image id='logo' src={Logo}></Image>
              </Col>

              <Col>
                <Image id='logo' src={Logo}></Image>
              </Col>

              <Col>
                <Image id='logo' src={Logo}></Image>
              </Col>

              <Col>
                <Image id='logo' src={Logo}></Image>
              </Col>
              <Col />
            </Row>
            <br />
            <Row>
              <Container>
                <Col>
                  <h1
                    className='animate__animated animate__fadeInDown'
                    id='welcome'
                  >
                    Welcome to the evanDev Portfolio
                  </h1>
                  <br />
                  <p className='animate__animated animate__fadeIn' id='para1'>
                    I am a full-stack developer and a graphic designer with a
                    background in multimedia production.
                    <br />
                    <br />
                    I am passionate about building modern, intuitive and dynamic
                    applications that are appealing to both casual users and
                    professional clients.
                    <br />
                    <br />
                    My top skills include...
                    <br />
                    <br />
                    Front-end:
                    <br />
                    React.js, JavaScript, Redux, Node.js, HTML, CSS, Bootstrap
                    libraries, and Graphic Design.
                    <br />
                    <br />
                    Back-end:
                    <br />
                    Express, Node.js, Sequelize, MySQL, MongoDB
                    <br />
                    <br />
                    I have experience with client/server integration, and I
                    enjoy working independently and in collaboration as part of
                    a development team in an agile environment.
                    <br />
                    <br />
                    Please check out some of my applications on my portfolio
                    page with many more to come and feel free to message me via
                    the contact page or through
                    <a href='https://www.linkedin.com/in/evan-bero-692b69123/'>
                      {' '}
                      LinkedIn{' '}
                    </a>
                    if you have any questions.
                    <br />
                    <br />
                    Thanks for stopping by and have a great day!
                    <br />
                    <br />
                    -Evan Bero
                  </p>
                </Col>
              </Container>
            </Row>
            <Row className='justify-content-md-center'>
              <Image
                className='justify-content-md-center'
                id='photo'
                src={Photo}
                alt='Photo of Evan Bero'
              />
            </Row>
            <Row className='justify-content-md-center py-3'>
              <a href={`mailto:evanbero@evandev.com`}>Contact</a>
            </Row>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  )
}

export default About
