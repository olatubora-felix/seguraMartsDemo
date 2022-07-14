import React from 'react';
import {Container, Box , Typography, Grid, Paper} from "@mui/material"
import styled from 'styled-components';
import {topCategories} from '../../data';
import { mobile } from '../../responsive';

const TopCategory = () => {
  return (
      <TopCategoryContainer>
          <Container>
               <Box paddingY={5}>
                    <Typography variant="body2" component='h2'>More from SeguraMart</Typography>
               </Box>
               <Grid container spacing={3} >
                      {
                          topCategories.map(topCategories => (

                            <Grid item xs={12} sm={12} md={3} key={topCategories.id}> 
                            <Paper elevation={3}>
                            <ImgContainer>
                                <Img src={topCategories.img} alt='Top Categories'/>
                              </ImgContainer>
                            <Box paddingY={1}>
                                <Typography
                                  variant='body4'
                                  component='h3'
                                  color="#256EE4"
                                >
                                    {topCategories.title}
                                </Typography>
                                <Typography variant='body6' component='h5'>{topCategories.subtitle}</Typography>
                            </Box>
                          </Paper>
                      </Grid>
                        ))}
                        
                    </Grid>
          </Container>
      </TopCategoryContainer>
  );
};

const TopCategoryContainer = styled.div`
    width: 100%;
    /* height: 463px; */
    /* margin: 30px 0; */
    padding: 40px 0;
    background: linear-gradient(rgba(229, 229, 229, 0.9), rgba(229, 229, 229, 0.9)), url("https://res.cloudinary.com/mobinet/image/upload/v1643707636/2_ysmxh3.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const ImgContainer = styled.div`
   padding: 10px;
`


const Img = styled.img`
  width: 100%;
  ${mobile({ width: "100%"})}
`

export default TopCategory;
