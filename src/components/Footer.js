import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EmptyComponent from 'react-component-empty';
import Button from './Button';
import Container from './Container';

const FooterSection = styled.div`
  width: 100%;
  display: flex;
  direction: ltr;
  
  @media (max-width: 576px) {
    display: block;
  }
`;

const FooterGreetingCard = styled.div`
  margin-top: 120px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: right;
  background-color: #333055;
  border-bottom-left-radius: 70px;
  
  @media (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  
  @media (min-width: 1200px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

const FooterGreetingCardContainer = styled(Container)`
  display: flex;
  
  @media (max-width: 576px) {
    display: block;
  }
`;

const FooterGreetingTextSection = styled.div`
  margin: 0 auto 0 0;
  max-width: 695px;
  
  @media (max-width: 576px) {
  max-width: 540px;
  }
`;

const FooterGreetingText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  text-align: left;
  font-size: 32px;
  color: #fff;
  line-height: 52px;
`;

const FooterGreetingButtonSection = styled.div`
  margin: auto 0 auto auto;
  min-width: 195px;
  
  @media (max-width: 576px) {
    margin-top: 15px;
  }
`;

const Copyright = styled.p`
  margin: 15px auto 5px 66px;
  font-size: 14px;
  line-height: 26px;
  
  @media (max-width: 768px) {
    line-height: 26px;
    margin-left: auto;
    max-width: 522px;
  }
  
  @media (max-width: 576px) {
    text-align: center;
  }
`;

const SocialMedia = styled.div`
  margin: 5px 0 5px auto;
  
  @media (max-width: 780px) {
    margin-left: auto;
    text-align: right;
  }
  
  @media (max-width: 576px) {
    margin-left: auto;
    text-align: center;
  }
`;

const SocialImage = styled.img`
  margin: 5px;
`;

function SocialIcon(props) {
  return (
    <a href={props.href} title={props.title} target="_blank">
      <SocialImage src={props.src} alt={props.title} />
    </a>
  );
}

SocialIcon.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
};

function Footer(props) {
  const greeting = props.greeting ? (
    <FooterGreetingCard>
      <FooterGreetingCardContainer>
        <FooterGreetingTextSection>
          <FooterGreetingText>{props.greeting.text}</FooterGreetingText>
        </FooterGreetingTextSection>
        <FooterGreetingButtonSection>
          <Button href={props.greeting.href}>{props.greeting.button_text}</Button>
        </FooterGreetingButtonSection>
      </FooterGreetingCardContainer>
    </FooterGreetingCard>
  ) : (
    <EmptyComponent />
  );

  const socialItems = props.socials.map(social => {
    console.log(social.icon_src);
    return (
      <SocialIcon
        href={social.href}
        title={social.title}
        src={social.icon_src}
      />
    )
  });

  const socialMedia = socialItems.length? (
      <SocialMedia>
        {socialItems}
      </SocialMedia>
    ) : (
      <EmptyComponent />
    );

  return (
    <div>
      {greeting}
      <Container>
        <FooterSection>
          <Copyright>{props.copyright}</Copyright>
          {socialMedia}
        </FooterSection>
      </Container>
    </div>
  );
}

Footer.propTypes = {
  greeting: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
    button_text: PropTypes.string,
  }),
  copyright: PropTypes.string.isRequired,
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      icon_src: PropTypes.string,
    }),
  ),
};

export default Footer;
