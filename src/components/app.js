import React, { Component } from 'react';
import moment from 'moment';

import PortfolioContainer from "./portfolio/portfolio-container";
export default class App extends Component {
 
  render() {
    return (
      <div className='app'>
        <h1>Mi Portfolio</h1>
        <h2>Cata Lobo</h2>
        <div>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <PortfolioContainer />
      </div>
      
    );
  }
}
