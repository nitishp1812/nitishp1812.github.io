import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import NotFound from './components/404';

import './App.less';
import Scrollbars from 'react-custom-scrollbars';

const { Header, Content } = Layout;

export default function App() {
  const [homeClassName, setHomeClassName] = useState('menu-item selected');
  const [aboutClassName, setAboutClassName] = useState('menu-item');

  const setHome = () => {
    setHomeClassName('menu-item selected');
    setAboutClassName('menu-item')
  }

  const setAbout = () => {
    setHomeClassName('menu-item');
    setAboutClassName('menu-item selected')
  }

  const setNotFound = () => {
    setHomeClassName('menu-item');
    setAboutClassName('menu-item');
  }

  return (
    <Router>
      <Layout style={{height: '100vh'}}>
        <Header className='header-container'>
          <div className='main-menu'>
            <Link to='/' style={{height: 'inherit'}}>
              <Button className={homeClassName} type='link'>Home</Button>
            </Link>
            <Link to='/about' style={{height: 'inherit'}}>
              <Button className={aboutClassName} type='link'>About</Button>
            </Link>
          </div>
        </Header>
        <Content className='main-content'>
          <Scrollbars className='scroll-container' renderThumbVertical={({ style, ...props}) => {
              const thumbStyle = {backgroundColor: 'whitesmoke', width: '2px'};
              return (
                <div style={{...style, ...thumbStyle }} {...props} />
              );
            }}>
            <Switch>
              <Route path='/' exact>
                <Home setHome={setHome} />
              </Route>
              <Route path='/about' exact>
                <About setAbout={setAbout} />
              </Route>
              <Route>
                <NotFound setNotFound={setNotFound} />
              </Route>
            </Switch>
          </Scrollbars>
        </Content>
      </Layout>
    </Router>
  );
}
