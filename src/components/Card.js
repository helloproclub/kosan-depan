import React from 'react';
import styled from 'styled-components';

const TopLabel = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-size: 12px;
    letter-spacing: 1px;
    opacity: 0.54;
`;

const Title = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-size: 18px;
`;

const Description = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    line-height: 26px;
    font-size: 14px;
    width: 250px;
`;

const MoreLink = styled.div`
    margin-top: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 14px;
    color: #F86339;
`;


function AchievementCard(props) {
    return (
        <div>
            <img 
                src="http://studentstelkomuniversity.com/wp-content/uploads/2016/07/proclub2.jpg"
                heigth="200px"
                width="250px"
            ></img>
            <TopLabel>1st Place</TopLabel>
            <Title>Image Cup Final</Title>
            <Description> Lorem Ipsum Dolor ti amet consectut corrupti</Description>
            <MoreLink href="#">View More</MoreLink>
        </div>
    )
}
function PostCard(props) {
    return (
        <div>
            <img></img>
        </div>
    )
}

export {AchievementCard};
