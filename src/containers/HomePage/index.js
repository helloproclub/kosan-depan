import React, { Component } from 'react';
import styled from 'styled-components';
import HallOfFame from '../HallOfFame';

const SectionDesc = styled.p`
    width: 470pt;
`;

class HomePage extends Component {
  render() {
      return (
          <div>
            <div></div> 
            <div>
                <h1>Hall of Fame</h1>
                <SectionDesc>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque</SectionDesc>
                <HallOfFame year="2017"/>
            </div> 
          </div>
      )
  }
}

export default HomePage;
