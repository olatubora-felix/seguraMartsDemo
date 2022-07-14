import {  Container, Grid,Box, Paper, Typography} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
// import { mobile } from '../../responsive';
import ContentImg1 from '../../images/unsplash_8RaUEd8zD-U.svg'
import ContentImg2 from '../../images/unsplash_S1v7hVUiCg0.svg'
import { useNavigate } from 'react-router-dom';


const ProductBanner = () => {
  const navigate = useNavigate();
  return (
    <ProductBannerContainer>
        <Container>
            <Paper elevation={0} style={{ maxHeight: "345px", background: "none" }}>
                <img 
                src="https://res.cloudinary.com/mobinet/image/upload/v1643710383/Flier_zo520n.svg" alt="banner" 
                    width="100%"
                   style={{ height: "100%" }}
                />
            </Paper>
            <Box paddingY={5}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Content>
                            <Box padding={5}>
                                <Typography variant="subtitle1" color="#fff" component='span'>FOOD</Typography>
                                <Typography variant="h2" color="#fff" component='h2'>
                                    Groceries at the cheapest Rates
                                </Typography>
                                <Button variant='contained' onClick={() => navigate('/food')}>Shop Now</Button>
                            </Box>
                        </Content>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Content2>
                            <Box padding={5}>
                                <Typography variant="subtitle1" color="#fff" component='span'>PHARMACY & DRUGS</Typography>
                                <Typography variant="h3" color="#fff" component='h2'>
                                     Medical & Health Care
                                </Typography>
                                <Button variant='contained' onClick={() => navigate('/pharmacy')}>Shop Now</Button>
                            </Box>
                        </Content2>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </ProductBannerContainer>
  )
};

const ProductBannerContainer = styled.div`
    background-color: rgba(229, 229, 229, 0.9);
    padding: 30px 0;
`

const Content = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 58.56%),  url(${ContentImg1});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 263px;
`
const Content2 = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 58.56%),  url(${ContentImg2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 263px;
`

const Button = styled.button`
    width: 170px;
    height: 39px;
    left: 0px;
    top: 127px;
    background: #FFFFFF;
    border-radius: 5.60932px;
    margin: 18px 0px;
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 34px;
    text-align: center;
    color: #256EE4;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: #256EE4;
        color: #fff;
        transition: all .5ms ease-in-out;
    }
`


export default ProductBanner;
