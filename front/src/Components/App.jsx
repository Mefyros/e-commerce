import React from 'react';

import { css }  from 'emotion';
import { SpaceTop, SpaceBottom, footer, mainContainer } from './style';

import './index.css';
import Routes from './Routes/Routes';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer'


export default class App extends React.Component {

  render() {
    return (
      <div className={css(mainContainer)}>
        <Navbar />
        <SpaceTop />
        <Routes />
        <SpaceBottom />
        <div className={css(footer)}>
          <Footer/>
        </div>
      </div>
    );
  }
}