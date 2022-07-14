import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const HeroComponent = () => {
  return (
      <SupportContainer>
        <Container>
            <SupportContent>
              <SupportTitle>SUPPORT</SupportTitle>
              <SupportText>SeguraMart Support Center</SupportText>
            </SupportContent>
        </Container>
      </SupportContainer>
  )
};

const SupportContainer = styled.div`
  background: linear-gradient(rgba(229, 239, 255, .1), rgba(229, 239, 255, .1)), url("https://res.cloudinary.com/mobinet/image/upload/v1643977899/Hero_Image_n8jgrj.svg");
  padding: 60px 0px;
`;

const SupportContent = styled.div`
    
`;

const SupportTitle = styled.h4`
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #3785F7;
    text-align: center;
`;

const SupportText = styled.h2`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  color: #141414;
  margin: 10px 0px;
  ${mobile({fontSize: "28px" })}
`;

export default HeroComponent;
