import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: absolute;
    transform: translateY(-241px);
    height: 237px;
    width: 237px;
    background: linear-gradient( to bottom, rgba(56,56,95,0.0001) 0%, rgba(56,56,95,1) 100% ), #FC841299;
    border-radius: 0 85px 0 0;
`;

const Image = styled.img`
    border-radius: 0 85px 0 0;
    filter: grayscale(100%) contrast(200%);
`;

const ProfileContainer = styled.div`
    font-family: 'Poppins'
    height: 237px;
    width: 237px;
    color: white;
`; 

const ProfileText = styled.div`
    position: absolute;
    transform: translateY(-110%) translateY(-26px);
    margin-left: 30px;
`;

const ProfileDivision = styled.div`
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
`;

const ProfileName = styled.div`
    font-size: 18px;
    font-weight: 600;
`;

const ProfileAchievement = styled.div`
    font-size: 14px;
    font-weight: 600;
`;

function ProfileImage(props) {

    return (
        <ProfileContainer>
            <Image
                height="237px"
                width="237px"
                src={props.src} alt="">
            </Image>
            <Overlay></Overlay> 
            <ProfileText>
                <ProfileDivision>{props.division}</ProfileDivision> 
                <ProfileName>{props.name}</ProfileName>
                <ProfileAchievement>{props.achievement ? props.achievement+' achievement' : ''}</ProfileAchievement>
            </ProfileText>
        </ProfileContainer>
        );

}

export default ProfileImage;
