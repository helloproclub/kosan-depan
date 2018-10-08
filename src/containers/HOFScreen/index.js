import React, { Component } from 'react';
import HallOfFame from '../HallOfFame';
import styled from 'styled-components';

const Description = styled.p`
    width: 500px;
    word-wrap: break-word;
`;

class HOFScreen extends Component {
    render() {
        return  (
            <div>
                <div>
                    <h1>Hall of Fame</h1>
                    <Description>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</Description>
                </div>
                <HallOfFame year="2017"></HallOfFame>
                <HallOfFame year="2016"></HallOfFame>
                <HallOfFame year="2015"></HallOfFame>
                <HallOfFame year="2014"></HallOfFame>
            </div>
        )
    }
}


export default HOFScreen;
