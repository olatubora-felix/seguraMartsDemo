import * as React from 'react';
import { Typography, Box, Paper, Container, Grid} from '@mui/material';
import {topProducts} from '../../data';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { mobile } from '../../responsive';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const TopProduct = () => {
  // const classes = useStlyes();
  return (
            <TopContainer>
              <Box padding={3}>
                  <Typography 
                  variant='body2' 
                  component='h2'
                  >
                    Top Selling Products
                  </Typography>
              </Box>
             <Wrapper>
             <Arrow direction="left">
                  <ArrowBackIosNewOutlinedIcon fontSize='small'/>
              </Arrow>
              <Arrow direction="right">
                  <ArrowForwardIosOutlinedIcon fontSize='small'/>
              </Arrow>
                <Container>
                    <Grid container spacing={3} >
                      {
                          topProducts.map(topProduct => (

                            <Grid item xs={12} sm={12} md={3} key={topProduct.id}> 
                            <Paper elevation={3} style={{ position: "relative" }}>
                              <ImgContainer>
                                <Img src={topProduct.img} alt='Top product'/>
                              </ImgContainer>
                            <Discount>{topProduct.discount}</Discount>
                            <Box padding={1}>
                                <Typography
                                  variant='body3'
                                  component='h3'
                                >
                                    {topProduct.title}
                                </Typography>
                            </Box>
                            <Box 
                            display="flex"
                            justifyContent='space-between'
                            paddingBottom={3}
                            paddingX={1}
                            >
                                <Box>
                                  <Typography variant='body4' component='span'>{topProduct.price}</Typography>
                                  <Typography
                                  variant='body4' component='span' color="#CCCCCC" style={{ textDecoration: "line-through" }}>{topProduct.promo}</Typography>
                                </Box>
                                <Typography variant='body5' component='h3' color="#256EE4" textAlign='end'>
                                       {topProduct.save}
                                  </Typography>
                            </Box>
                          </Paper>
                      </Grid>
                        ))}
                        
                    </Grid>
                </Container>
             </Wrapper>
          </TopContainer>     
  )
};


const TopContainer = styled.div`
  width: 100%;
  padding: 40px 0px;
  background: #F2F7FF;

`
const Wrapper = styled.div`
  position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f2f2f2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const ImgContainer = styled.div`
   padding: 10px;
`

const Img = styled.img`
  width: 100%;
  ${mobile({ width: "100%", padding: "10px"})}
`

const Discount = styled.span`
display: flex;
justify-content: center;
align-items: center;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #256EE4;
margin: 0px 10px;
bottom: 82.95%;
background: #C9DDFF;
border-radius: 5px;
padding: 5px 8px;
position: absolute;
left: 5%;
top: 10%;

`
export default TopProduct;
