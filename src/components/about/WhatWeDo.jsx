import { Container, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const WhatWeDo = () => {
  return (
      <WhatWeDoContainer>
          <Container>
                <WhatWeDoContent>
                    <Grid container spacing={{ xs: 2, md: 4}}>
                        <Grid item xs={12} sm={12} md={6}>
                            <WhatWeDoText>WHAT WE DO</WhatWeDoText> 
                            <WhatWeDoTitle>Financial Service with a difference</WhatWeDoTitle>
                            <WhatWeDoPara>
                                Our local prepaid Visa & Mastercard product distribution agreement will allow discretionary spending options for the remaining 5%.
                                </WhatWeDoPara>
                            <WhatWeDoPara>
                                What does the unbanked population do with the cash they receive from traditional remittance? They primarily pay bills and then purchase basic consumer staple products locally. 
                            </WhatWeDoPara>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <ImgContainer>
                                    <SmallImg src='https://res.cloudinary.com/mobinet/image/upload/v1643883211/unsplash_eveI7MOcSmw_3x_loopvx.png' alt="What we do " />

                                    <Img src="https://res.cloudinary.com/mobinet/image/upload/v1643883239/unsplash_z-upQITw4fY_3x_qigk6m.png" alt="What we do "/>
                            </ImgContainer>
                        </Grid>
                    </Grid>
                </WhatWeDoContent>
          </Container>
      </WhatWeDoContainer>
  )
};


const WhatWeDoContainer = styled.div`
    padding: 30px 0px;
    ${mobile({padding: "20px 0px"})}
    background-color: #fff;
`;

const WhatWeDoContent = styled.div`
    padding: 40px 0px;
    ${mobile({ padding: "20px 0px"})}
`;

const WhatWeDoText = styled.h3`
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #3785F7;
    margin: 18px 0;
    ${mobile({fontSize: "24px", textAlign: "center", margin: "10px 0px"})}

`;
const WhatWeDoTitle = styled.h3`
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 29px;
    color: #121212;
    margin: 24px 0px;
    ${mobile({fontSize: "20px", textAlign: "center", margin: "10px 0px"})}
`;

const WhatWeDoPara = styled.h3`
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    align-items: center;
    color: #121212;
    margin: 18px 0px;
    ${mobile({fontSize: "16px", textAlign: "justify", margin: "10px 0px"})}

`;

const ImgContainer = styled.div`
    display: flex;
`;

const SmallImg = styled.img`
    height: 349px;
    width: 275px;
    /* border-radius: 5px; */
    box-shadow: 0px 5px 20px 0px rgba(141, 184, 243, 0.1);
    ${mobile({width: "100%", })}
`;


const Img = styled.img`
    height: 446px;
    width: 313px;
    border-radius: 5px;
    box-shadow: 0px 5px 20px 0px rgba(141, 184, 243, 0.1);
    ${mobile({display: "none"})}
`;

export default WhatWeDo;
