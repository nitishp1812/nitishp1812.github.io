import React from 'react';
import { Tooltip } from 'antd';
import { GithubFilled, LinkedinFilled, MailFilled, FileFilled } from '@ant-design/icons';
import { isMobile } from 'react-device-detect';
import './Home.less';

import resume from '../data/Resume.pdf';

export default function Home({ setHome }) {
  setHome();

  const nameSize = isMobile ? '6vh' : '8vh';
  const professionSize = isMobile ? '3vh' : '4vh';
  const iconSize = isMobile ? '4.5vh' : '5vh';
  const topMargin = isMobile ? '12vh' : '8vh';
  const iconMargin = isMobile ? '0 3vw' : '0 2.3vw'

  return (
    <div className='home-wrapper'>  
      <div className='name-wrapper'>
        <h1 className='name' style={{fontSize: nameSize}}>Nitish Poddar</h1>
        <h1 className='profession' style={{fontSize: professionSize}}>Software Engineer</h1>
      </div>
      <div className='links-wrapper' style={{marginTop: topMargin}}>
        <Tooltip title='Email'>
          <a className='icon-wrapper' href='mailto:npoddar2@illinois.edu' target='_blank'>
            <MailFilled className='icon-link' style={{fontSize: iconSize, margin: iconMargin}} />
          </a>
        </Tooltip>
        <Tooltip title='LinkedIn'>
          <a className='icon-wrapper' href='https://linkedin.com/in/nitish-poddar' target='_blank'>
            <LinkedinFilled className='icon-link' style={{fontSize: iconSize, margin: iconMargin}} />
          </a>
        </Tooltip>
        <Tooltip title='GitHub'>
          <a className='icon-wrapper' href='https://github.com/nitishp1812' target='_blank'>
            <GithubFilled className='icon-link' style={{fontSize: iconSize, margin: iconMargin}} />
          </a>
        </Tooltip>
        <Tooltip title='Resume'>
          <a className='icon-wrapper' href={resume} target='_blank'>
            <FileFilled className='icon-link' style={{fontSize: iconSize, margin: iconMargin}} />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
