import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Banner = () => {
  return (
      <BannerContainer>
          <Container>
              <BannerContent>
                  <BannerText>MARKETPLACE</BannerText>
                  <BannerTitle>Take your good and services to a wider audience</BannerTitle>
                  <Button>Become a Seller</Button>
              </BannerContent>
          </Container>
      </BannerContainer>
  )
};

const BannerContainer = styled.div`
    padding: 40px 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 6.42%, rgba(0, 0, 0, 0.4) 65.87%), url("https://res.cloudinary.com/mobinet/image/upload/v1643942957/Rectangle_4440_2x_qq4qgi.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* filter: drop-shadow(0px 5px 20px rgba(141, 184, 243, 0.34)); */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const BannerContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const BannerText = styled.h4`
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: #FFFFFF;
    margin: 4px 0px;
`;

const BannerTitle = styled.h2`
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 66px;
    text-align: center;
    color: #FFFFFF;
    margin: 4px 0px;
    /* height: 127px; */
    width: 703px;
    ${mobile({fontSize: "18px", width: "100%", lineHeight: "30px", })}


`;

const Button = styled.button`
    height: 53px;
    width: 175px;
    border-radius: 5px;
    background: #256EE4;
    margin: 36px 0px;
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
    border: 0;
    cursor: pointer;
    &:hover{
        background: #21B3E8;
        transition: all 3ms ease-in-out;
    }
    ${mobile({margin: "18px 0px", width: "150px", fontSize: "16px", lineHeight: "24px"})}
`;

export default Banner;
