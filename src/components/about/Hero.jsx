import { Box, Container, Grid, Paper} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile, mobileSmall } from '../../responsive';

const Hero = () => {
  return (
      <About>
          <Container>
                <AboutText>WHO WE ARE</AboutText>
                <ParaContainer>
                    <AboutTitle>
                        The next generation of Financial Services will be fundamentally different.
                    </AboutTitle>
                </ParaContainer>
                <AboutContent>
                    <Grid container spacing={{ xs: 2, md: 5 }}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Paper style={{ boxShadow: "none", background: "none" }}>
                            <Img src='https://res.cloudinary.com/mobinet/image/upload/v1643867465/Rectangle_4440_3x_pnpiex.png' width="100%"/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box>
                                <ABoutPara>
                                    By providing the ability for traditional remittance senders to directly pay all bills and facilitate payment of common local products and services on behalf of the receiver, SeguraMart  eliminates the need for cash remittance entirely.
                                </ABoutPara>
                            </Box>
                            <Box display='flex' alignItems="center">
                                <Img 
                                    src='https://res.cloudinary.com/mobinet/image/upload/v1643869452/Frame_8012_imno2g.svg' alt='Icon'
                                    style={{ width: "18.46px", height: "24px"}}/>
                                <Typography>Through Exclusive Parternerships</Typography>
                            </Box>
                            <Box display='flex' alignItems="center">
                                <Img 
                                    src='https://res.cloudinary.com/mobinet/image/upload/v1643869452/Frame_8012_imno2g.svg' 
                                    style={{ width: "18.46px", height: "24px"}}/>
                                <Typography>
                                   Deep technology Integration
                                </Typography>
                            </Box>
                            <Box display='flex' alignItems="center">
                                <Img 
                                    src='https://res.cloudinary.com/mobinet/image/upload/v1643869452/Frame_8012_imno2g.svg' 
                                    style={{ width: "18.46px", height: "24px"}}/>
                                <Typography>Easy cashload into the Segura Platform</Typography>
                            </Box>
                            <Box display='flex' alignItems="center">
                                <Img 
                                    src='https://res.cloudinary.com/mobinet/image/upload/v1643869452/Frame_8012_imno2g.svg' 
                                    style={{ width: "18.46px", height: "24px"}}/>
                                <Typography>Invoice settlement ( School fees, house rent, hospital bills)</Typography>
                            </Box>
                            <Box>
                                <ABoutPara>
                                    SeguraMart has built an advanced merchant aggregation and orchestration platform that connects our comprehensive local merchant catalog to our customers. This catlog represents 95% of the cash spending of traditional remittance recipients.
                                </ABoutPara>
                            </Box>
                        </Grid>
                    </Grid>
                </AboutContent>
          </Container>
      </About>
  )
};

const About = styled.div`
    padding: 30px 0;
    ${mobile({padding: "20px 0px"})}
    background: rgba(229, 239, 255, 1);
`

const AboutText = styled.h3`
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #3785F7;
    text-align: center;
    margin: 18px 0;
    ${mobile({margin: "10px 0px"})}

`;

const ParaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const AboutContent = styled.div`
    padding: 40px 0px;
    ${mobile({padding: "20px 0px"})}
`


const AboutTitle = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #121212;
    height: 85px;
    width: 666px;
    ${mobile({fontSize: "18px", width: "100%", lineHeight: "35px"})}
    ${mobileSmall({fontSize: "18px", width: "100%", lineHeight: "35px"})}
`;

const Img = styled.img`
    border-radius: 5px;
`;

const ABoutPara = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
    color: #121212;
    margin: 10px 0;
    ${mobile({ fontSize: "16px",
    lineHeight: "22px"})}
`;

const Typography  = styled.span`
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    align-items: center;
    color: #121212;
    margin: 10px 5px;
    ${mobile({fontSize: "16px", margin: "5px"})}

`

export default Hero;
