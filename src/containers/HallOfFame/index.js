import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../components/Image.js';

const ProfileContainer = styled.div`
    display: flex;

    div {
        margin-right: 50px;
    }
`;

const YearDisplay = styled.div`
    position: absolute;
    right: 200px; 
    font-family: 'Poppins';
    font-size: 241px;
    line-height: 362px;
    font-weight: 700;
    color: #FC8412;
    opacity: 0.21;
    transform: translateY(-60%);
`;

const HOFContainer = styled.div`
    padding: 150px 0;
    
`;

class HallOfFame extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HOFContainer>
                <YearDisplay>{this.props.year}</YearDisplay>
                <ProfileContainer>
                    <ProfileImage 
                        src="https://i.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg"/>
                    <ProfileImage 
                        src="https://i.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg"/>
                    <ProfileImage 
                        src="https://i.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg"/>
                </ProfileContainer>
            </HOFContainer>
        )
    }

}

export default HallOfFame;
