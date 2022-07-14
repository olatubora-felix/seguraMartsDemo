import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const GrowYourBusiness = () => {
  return (
      <GrowYourBusinessContainer>
          <Container>
              <Grid container spacing={{ xs: 2, md: 4}}>
                    <Grid item xs={12} sm={12} md={6}>
                      <GrowYourBusinessContent>
                          <GrowYourBusinessText>HIGHER GROWTH RATE</GrowYourBusinessText>
                          <GrowYourBusinessTitle>Grow your Business</GrowYourBusinessTitle>
                          <GrowYourBusinessPara>
                              Create an online presence and provide your goods and services to a wider target of customers and prospects. SeguraMart ofers your business the flexiblity and exposure it needs to scale across the continent and the world over.</GrowYourBusinessPara>
                      </GrowYourBusinessContent>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <Paper style={{ boxShadow: "none", background: "none" }}>
                        <Img src='https://res.cloudinary.com/mobinet/image/upload/v1643944196/Rectangle_4441_3x_ltka00.png' width="100%"/>
                    </Paper>
                  </Grid>
              </Grid>
          </Container>
      </GrowYourBusinessContainer>
  )
};

const GrowYourBusinessContainer = styled.div`
    /* padding: 60px 0; */
`;

const GrowYourBusinessContent = styled.div`
    padding: 40px 0px;
    ${mobile({ padding: "10px 0px"})}
`;

const GrowYourBusinessText = styled.h5`
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #3785F7;
    margin: 9px 0px;
    ${mobile({ textAlign: "center"})}
`;

const GrowYourBusinessTitle = styled.h3`
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
    color: #121212;
    margin: 9px 0px;
    ${mobile({ textAlign: "center", fontSize: "24px", margin: "0px", lineHeight: "18px"})}
`;

const GrowYourBusinessPara = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
    color: #121212;
    margin: 9px 0px;
    ${mobile({textAlign: "justify",  fontSize: "16px", margin: "16px 0px"})}
`;

const Img = styled.img`
    
`;

export default GrowYourBusiness;
