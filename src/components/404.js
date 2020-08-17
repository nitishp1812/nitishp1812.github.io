import React from 'react';
import { isMobile } from 'react-device-detect';

import './404.less';
import { Link } from 'react-router-dom';

export default function Projects({ setNotFound }) {
  setNotFound();

  const size = isMobile ? '6vh' : '8vh';

  return (
    <div className='not-found-wrapper'>
      <h1 className='code' style={{fontSize: size}}>404</h1>
      <h1 className='not-found' style={{fontSize: size}}>Page Not Found</h1>
      <p>Sorry! This page does not exist.</p>
      <Link to='/' style={{fontSize: 'large'}}>Back to Home</Link>
    </div>
  );
}
