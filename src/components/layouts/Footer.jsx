import { Box, Container, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import styled from 'styled-components';

import React from 'react';
import { mobile } from '../../responsive';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <>
      <FooterContainer>
          <Container>
              <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box>
                            <Img src="https://res.cloudinary.com/mobinet/image/upload/v1643026475/logo_l5obhs.svg" alt="logo" />
                            <Address>7b Ondo Street, Osborne Foreshore Estate, Ikoyi, Lagos State. 07017808188</Address>
                        </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box>
                           <Item>
                               <ListItem header="header">Quick Links</ListItem>
                               <ListItem>
                                   <Link to="/contact" style={{ textDecoration: "none", color: "#141414" }}>Send Money</Link>
                               </ListItem>
                               <ListItem>
                                   <Link to="/contact" style={{ textDecoration: "none", color: "#141414" }}>Pay Bills</Link>
                               </ListItem>
                               <ListItem>
                                   <Link to="/food" style={{ textDecoration: "none", color: "#141414" }}>Shopping</Link>
                               </ListItem>
                               <ListItem>
                                   <Link to="/contact" style={{ textDecoration: "none", color: "#141414" }}>Invoice Settlement</Link>
                               </ListItem>
                               <ListItem>
                                   <Link to="/contact" style={{ textDecoration: "none", color: "#141414" }}>Download the App</Link>
                               </ListItem>
                           </Item>
                        </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={3}>
                         <Box>
                           <Item>
                               <ListItem header="header">Support</ListItem>
                               <ListItem>
                                   <Link to="/contact" style={{ textDecoration: "none", color: "#141414" }}>Order Tracking</Link>
                               </ListItem>
                               <ListItem>
                                   <Link to="/contact" style={{ textDecoration: "none", color: "#141414" }}>Contact Us</Link>
                               </ListItem>
                           </Item>
                        </Box>
                        <Box style={{ marginTop: "36px" }}>
                            <Connected>Stay Connected with us</Connected>
                            <InstagramIcon 
                            style={{
                                color: "#256EE4",
                                borderRadius: "20%", 
                                background:"#fff",
                                marginRight: "10px"
                                   }}/>
                            <TwitterIcon
                                style={{
                                    color: "#256EE4",
                                    borderRadius: "20%", 
                                    background:"#fff",
                                    marginRight: "10px"
                                }} />
                            <FacebookIcon
                                style={{
                                    color: "#256EE4",
                                    borderRadius: "20%", 
                                    background:"#fff",
                                }} />
                        </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box paddingY={2}>
                           <Item>
                               <ListItem header="header">Get Latest Deals</ListItem>
                               <ListItem>
                                   Our best promotions sent to your inbox.
                                </ListItem>
                           </Item>
                        </Box>
                        <SubscribeBox>
                            <Input placeholder='Email Address' />
                            <Button>Subscribe</Button>
                        </SubscribeBox>
                  </Grid>
              </Grid>
          </Container>
      </FooterContainer>
      <FooterDate>
          <Container >
                <FooterText>2022, SeguraMart. All Rights Reserved.</FooterText>
          </Container>
      </FooterDate>
    </>
  )
};

const FooterContainer = styled.div`
    padding: 60px 0px;
    ${mobile({padding: "30px 0px"})}
    background-color: #fff;
    border-bottom: 1px solid #E0E0E0;
`
const Img = styled.img`
    width: 12rem;
    height: 2.438rem;
    margin: 4px 0px;
    ${mobile({width: "10rem"})}
`;

const Address = styled.div`
    width: 187px;
    height: 108px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #141414;
`;

const Item = styled.ul`
    list-style: none;
`;

const ListItem = styled.li`
    font-style: normal;
    font-weight: ${(props) => props.header === "header" ? "bold" : "normal"};
    font-size: ${(props) => props.header === "header" ? "18px" : "16px"};
    line-height: 17px;
    align-items: center;
    color: #141414;
    margin: 15px 0px;
`;

// const Link = styled.a`
//     cursor: pointer;
// `
const Connected = styled.h4`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 17px;
    color: #141414;
    margin: 21px 0px;
`;

const SubscribeBox = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`

const Input = styled.input`
    background: #F2F2F2;
    border: 1px solid #F2F2F2;
    box-sizing: border-box;
    border-radius: 5px 0px 0px 5px;
    height: 47px;
    width: 244px;
    padding: 10px;
    ${mobile({marginBottom: "10px", width: "100%"})}
    outline: none;
`
const Button = styled.button`
    padding: 10px 20px;
    width: 126px;
    background: #256EE4;
    border-radius: 0px 5px 5px 0px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    ${mobile({flex: "1", width: "100%"})}
    border: none;

`;

const FooterDate = styled.div`
    padding: 20px 0px;
`;

const FooterText = styled.div`
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 29px;
    color: rgba(20, 20, 20, 0.7);
`


export default Footer;
