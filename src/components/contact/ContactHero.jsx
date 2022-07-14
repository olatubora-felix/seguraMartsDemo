import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const ContactHero = () => {
  return (
      <ContactContainer>
        <Container>
            <ContactContent>
              <ContactTitle>Contact Us</ContactTitle>
              <ContactText>We look forward to hearing from you.</ContactText>
            </ContactContent>
        </Container>
      </ContactContainer>
  )
};

const ContactContainer = styled.div`
  background: linear-gradient(rgba(229, 239, 255, .1), rgba(229, 239, 255, .1)), url("https://res.cloudinary.com/mobinet/image/upload/v1643977899/Hero_Image_n8jgrj.svg");
  padding: 60px 0px;
  ${mobile({padding: "30px 0px"})}
`;

const ContactContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ContactTitle = styled.h4`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #3785F7;
    ${mobile({fontSize: "20px" })}
`;

const ContactText = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #141414;
  margin: 10px 0px;
  height: 90px;
  width: 445px;
  text-align: center;
  ${mobile({fontSize: "24px", width: "100%",
  height: "100%" })}
`;

export default ContactHero;
