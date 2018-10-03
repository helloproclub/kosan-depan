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
    height: 237px;
    width: 237px;
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
        </ProfileContainer>
        );

}

export default ProfileImage;
