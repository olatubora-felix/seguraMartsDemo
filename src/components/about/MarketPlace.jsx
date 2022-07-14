import { Box, Container, Grid, Paper} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { mobile } from '../../responsive';

const MarketPlace = () => {
  return (
      <MarketPlaceContainer>
          <Container>
          <Box paddingY={5}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Paper style={{ boxShadow: "none", background: "none" }}>
                            <Img src='https://res.cloudinary.com/mobinet/image/upload/v1643886088/Rectangle_4440_3x_imwh3n.png' width="100%"/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box paddingY={3}>
                                <MarketPlaceText>MARKETPLACE</MarketPlaceText>
                                <MarketPlaceTitle>Take your good and services to a wider audience</MarketPlaceTitle>
                                <MarketPlacePara>
                                    Create an online presence and provide your goods and services to a wider target of customers and prospects. SeguraMart ofers your business the flexiblity and exposure it needs to scale across the continent.
                                </MarketPlacePara>
                                <Box display="flex" alignItems="center" style={{ cursor: "pointer" }}>
                                    <MarketPlaceSubtitle>Become a seller</MarketPlaceSubtitle>
                                    <ArrowForwardIcon style={{color:'#256EE4'}}/>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
          </Container>
      </MarketPlaceContainer>
  )
};

const MarketPlaceContainer = styled.div`
    padding: 28px 0px;
    ${mobile({padding: "28px 0px"})}
`;

const Img = styled.img`
    border-radius: 5px;
`;

const MarketPlaceText = styled.h3`
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #3785F7;
    margin: 10px 0px;
    ${mobile({fontSize: "24px", textAlign: "center"})}
`;

const MarketPlaceTitle = styled.h3`
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
    color: #121212;
    margin: 4px 0px;
    ${mobile({fontSize: "20px", textAlign: "center", lineHeight: "35px"})}
`;

const MarketPlacePara = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
    color: #121212;
    margin: 18px 0px;
    height: 72px;
    width: 588px;
    ${mobile({fontSize: "16px", width: "100%", height: "100%"})}
`;

const MarketPlaceSubtitle = styled.span`
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #256EE4;
    margin: 0px 10px;
`;

export default MarketPlace;
