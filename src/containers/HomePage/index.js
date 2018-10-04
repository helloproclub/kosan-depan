import React, { Component } from 'react';
import styled from 'styled-components';
import HallOfFame from '../HallOfFame';
import { AchievementCard } from '../../components/Card.js';

const SectionDesc = styled.p`
    width: 470pt;
`;

const AchievementSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

class HomePage extends Component {
  render() {
      return (
          <div>
            <div style={{marginBottom: "150px", marginTop: "120px"}}>
                <h1>Achievement</h1>
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque</p>
                <AchievementSection>
                    <AchievementCard></AchievementCard>
                    <AchievementCard></AchievementCard>
                    <AchievementCard></AchievementCard>
                    <AchievementCard></AchievementCard>
                </AchievementSection>
            </div>
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
