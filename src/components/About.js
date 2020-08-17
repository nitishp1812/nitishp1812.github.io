import React from 'react';

import './About.less';
import { isMobile } from 'react-device-detect';
import { Row, Col, Card, Button } from 'antd';
import { CaretRightFilled, GithubFilled, GlobalOutlined } from '@ant-design/icons';

const { Meta } = Card;

function DisplayCard({ org, position, link, children }) {
  const cardTitleSize = isMobile ? '2.3vh' : '2.8vh';
  const cardPositionSize = isMobile ? '2vh' : '2.5vh';
  const cardDescriptionSize = isMobile ? '2vh' : '2.2vh';

  return (
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Card
        hoverable
        size='small'
        bordered={false}
        style={{background: 'rgb(26, 46, 78)' }}>
        <Meta 
          title={
          <>
            <span className='card-heading-location'
              style={{fontSize: cardTitleSize }}>
              {org}
            </span>
            {position &&
            <>
              <br /><span className='card-heading-position' style={{fontSize: cardPositionSize}}>{position}</span>
            </>}
          </>}
          description={
            <>
              <div className='card-description' style={{fontSize: cardDescriptionSize}}>{children}</div>
              <a href={link} target='_blank'>
                <Button className='link-button'>{(position) ? <GlobalOutlined /> : <GithubFilled />}</Button>
              </a>
            </>
          } />
      </Card>
    </Col>
  )
}

export default function About({ setAbout }) {
  setAbout();
  
  const headingSize = isMobile ? '4vh' : '5vh';
  const aboutTextSize = isMobile ? '2.5vh' : '3vh';

  return (
    <div className='about-wrapper'>
      <div className='about-section'>
        <h1 style={{fontSize: headingSize}}>About Me</h1>
        <p style={{fontSize: aboutTextSize}}>
          Hey! I'm Nitish Poddar, a junior at the University of Illinois at Urbana-Champaign
          majoring in Computer Science with a minor in Economics.
          Through internships, research and projects, I've gained significant experience in developing
          web apps, designing and implementing machine learning models and cloud-based software development.
        </p>
        <p style={{fontSize: aboutTextSize}}>
          Aside from this, I love watching and playing soccer and am a die-hard fan of Arsenal F.C.
        </p>
      </div>
      <div className='exp-wrapper'>
        <h1 style={{fontSize: headingSize}}>Experience</h1>
        <Row gutter={[32, 32]} align='middle' justify='start'>
          <DisplayCard org='Panasonic' position='Software Development Intern' link='https://www.panasonicfa.com/'>
            <p><CaretRightFilled style={{color: '#ffd666'}} /> Worked as part of an Illinois Business Consulting team for Panasonic North America</p>
            <p><CaretRightFilled style={{color: '#ffd666'}} /> Developed a chatbot to understand and answer questions using information extracted from PDFs</p>
            <p><CaretRightFilled style={{color: '#ffd666'}} /> Designed a real-time data processing pipeline and dashboard and deployed it in a production setting</p>
          </DisplayCard>
          <DisplayCard org='Koyejo Lab' position='Research Assistant' link='https://sanmi.cs.illinois.edu/group.html'>
            <p><CaretRightFilled style={{color: '#ffd666'}} /> Creating an intelligent agent to automatically generate proofs for mathematical theorems</p>
            <p><CaretRightFilled style={{color: '#ffd666'}} /> Designing and implementing advanced neural networks to allow the agent to learn complex mathematical logic and concepts</p>
            <p><CaretRightFilled style={{color: '#ffd666'}} /> Generating a large dataset to train the agent on using language parsers and programming language compilers</p>
          </DisplayCard>
          <DisplayCard org='Forward Data Lab' position='Research Assistant' link='http://www.forwarddatalab.org/'>
            <p><CaretRightFilled style={{color: '#ffd666'}} /> Collaborating on <a href='http://listen.online/' target='_blank'>ListenOnline</a>, an app which allows users to query data from different online data soucres</p>
            <p><CaretRightFilled style={{color: '#ffd666'}} /> Creating a tool to generate GraphQL schemas for data sources using <a href='https://swagger.io/' target='_blank'>Swagger</a> descriptions of their APIs</p>
            <p><CaretRightFilled style={{color: '#ffd666'}} /> Developing a web-based file manager as an internal tool to be used for generating API schemas</p>
          </DisplayCard>
          <DisplayCard org='TIMAN Group' position='Research Assistant' link='http://sifaka.cs.uiuc.edu/ir/'>
            <p><CaretRightFilled style={{color: '#ffd666'}} /> Redesigned <a href='http://sifaka.cs.uiuc.edu/ir/proj/ucair/' target='_blank'>UCAIR</a>, a personalized search engine that recognizes user tastes and adjusts for them</p>
            <p><CaretRightFilled style={{color: '#ffd666'}} /> Refocused the engine to the literature search domain for academia, using concepts of information retrieval and natural language processing</p>
          </DisplayCard>
          <DisplayCard org='Supertron Infotech' position='Software Development Intern' link='http://www.supertroninfotech.in/'>
            <p><CaretRightFilled style={{color: '#ffd666'}} /> Developed an interactive bot used by 5000+ students to ease and streamline access to data for a local university</p>
            <p><CaretRightFilled style={{color: '#ffd666'}} /> Web scraped data and incorporated it into different conversational flows to buid a production-grade bot</p>
          </DisplayCard>
        </Row>
      </div>
      <div className='proj-wrapper'>
        <h1 style={{fontSize: headingSize}}>Projects</h1>
        <Row gutter={[32, 32]} align='middle' justify='center'>
          <DisplayCard org='Data Compression CLI' link='https://github.com/nitishp1812/data-compression'>
            <p>
              A command-line tool which allows users to compress and decompress text files using various 
              algorithms like Huffman coding and arithmetic coding.
            </p>
          </DisplayCard>
          <DisplayCard org='Gesture Recognition App' link='https://github.com/nitishp1812/gesture-recognition'>
            <p>
              This app allows can recognize American Sign Language (ASL) gestures made by the user on a webcam
              and display their correspondong meanings.
            </p>
          </DisplayCard>
          <DisplayCard org='NCalculator' link='https://github.com/nitishp1812/NCalculator'>
            <p>
              NCalculator is an Android app for a scientific calculator with functions for matrix operations,
              graph plotting and calculus among other general scientific functions. 
            </p>
          </DisplayCard>
        </Row>
      </div>
    </div>
  );
}
