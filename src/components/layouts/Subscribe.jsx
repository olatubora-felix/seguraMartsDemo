import { Box, Container, Paper } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Subscribe = () => {
  return (
      <SubscribeContainer>
          <Container>
              <Paper style={{ background: "#124391", 
                     display: "flex", 
                     justifyContent: "center", 
                     flexDirection: "column",
                     alignItems: "center",
                     padding: "30px 0px"
                    }}
                     >
                    <Title>Stay Connected!</Title>
                    <SubTitle>Join our mailing list to recieve first hand information on our updates Information.</SubTitle>
                    <Box paddingY={3}>
                        <Input placeholder='Email Address'/>
                        <Button>Subscribe</Button>
                    </Box>
              </Paper>
          </Container>
      </SubscribeContainer>
  )
};

const SubscribeContainer = styled.div`
   ${mobile({background: "#124391"})}
`;


const Title = styled.h2`
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 29px;
    color: #FFFFFF;
    margin: 30px 0;
    ${mobile({fontSize: "28px"})}

`;

const SubTitle = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 30px;
    ${mobile({fontSize: "16px", marginBottom: "0px"})}
`;

const Input = styled.input`
    width: 296px;
    height: 53px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 0px 20px;
    padding-left: 11px;
     ${mobile({paddingLeft: "5px", marginBottom: "20px"})}
    outline: none;
    border: none;
`;

const Button = styled.button`
    padding: 11px 34px;
    background: #256EE4;
    border-radius: 5px;
    margin: 0px 20px;
    color: #fff;
    width: 149px;
    max-width: 296px;
    ${mobile({width: "100%", padding: "0px 0px 0px 5px"})}
    height: 53px;
    border: none;
`

export default Subscribe;
