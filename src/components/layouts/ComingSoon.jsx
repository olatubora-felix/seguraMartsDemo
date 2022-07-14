import React from 'react';
import {Container, Grid, Hidden} from '@mui/material'
// import OverlayImg from '../../images/'
import styled from 'styled-components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { mobile } from '../../responsive';

const ComingSoon = () => {
  return (
      <ComingSoonContainer>
            <Container>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <Title>COMING SOON</Title>
                            <TitleHeader>SeguraMart Mobile App</TitleHeader>
                            <TitlePara>Buy groceries, airtime and data; pay cable TV subscription, track your expences. Also, send money to family and friends on the Mobile App without stress.</TitlePara>
                            <Box>
                                <IconImg 
                                    src='https://res.cloudinary.com/mobinet/image/upload/v1643800332/app_y2e4lt.svg'
                                    direction="left"
                                />
                                <IconImg 
                                    src='https://res.cloudinary.com/mobinet/image/upload/v1643800330/google_wffabk.svg'
                                    direction="right"
                                    />
                            </Box>
                            <Box>
                                <Subtitle>Join the waitlist</Subtitle>
                                <ArrowForwardIcon style={{ color: '#256EE4' }} /> 
                            </Box>
                        </Grid>
                        <Hidden smDown>
                        <Grid item xs="hide" sm="hide" md={6}>
                            <Phone src='https://res.cloudinary.com/mobinet/image/upload/v1643804023/phone_o53qjp.svg' width="100%" height="100%"/>
                        </Grid>
                        </Hidden>
                    </Grid>
            </Container>
      </ComingSoonContainer>
  )
};

const ComingSoonContainer = styled.div`
    background: linear-gradient(rgba(225, 237, 255, .9), rgba(225, 237, 255, .9)), url("https://res.cloudinary.com/mobinet/image/upload/v1643799523/doodle_wgsxmg.svg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    overflow-x: hidden;
`;
const Title = styled.h4`
   font-family: "lato";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #256EE4;
    margin: 17px 0px;
    ${mobile({textAlign: "center"})}
`;

const TitleHeader = styled.h2`
   font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    ${mobile({fontSize: "28px", textAlign: "center"})}
    line-height: 29px;
    color: #121212;
    margin: 17px 0px;
`;

const TitlePara = styled.p`
   font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    ${mobile({fontSize: "16px", textAlign: "center"})}
    line-height: 24px;
    color: #121212;
    margin: 17px 0px;
`;

const IconImg = styled.img`
    margin: ${(props) => props.direction === "right" ? "0px 16px" : "0px 0px"};
`;

const Box = styled.div`
    display: flex;
    margin: 10px 0;
    ${mobile({ justifyContent: "center", alignItems: "center"})}
`

const Subtitle = styled.h6`
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #256EE4;
    margin-right: 10px;
`;

const Phone = styled.img`
    /* margin: 0px 46px; */
`

export default ComingSoon;
