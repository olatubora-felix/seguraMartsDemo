import React from 'react';
import Container from '@mui/material/Container'
import styled from 'styled-components';
import {mobile} from '../../responsive';
import { Grid } from '@mui/material';

const ContactMessage = () => {
  return (
      <ContactMessageContainer>
          <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6}>
                    <ContactMessageContent>
                        <ContactMessageTitle>LOCATION</ContactMessageTitle>
                        <ContactMessageText>We are located at;</ContactMessageText>
                        <ContactMessagePara>
                            7b Ondo Street, Osborne Foreshore Estate, Ikoyi, Lagos State. 
                            07017808188
                        </ContactMessagePara>
                    </ContactMessageContent>
                    <ContactMessageImgContainer>
                        <Img 
                            src='https://res.cloudinary.com/mobinet/image/upload/v1643980661/questionmark2_dmkl6s.svg'
                            direction="hidden"
                        />
                        <Img
                            src='https://res.cloudinary.com/mobinet/image/upload/v1643980661/questionmark1_v6ms8r.svg'
                            direction="resize"
                        />
                          <Img 
                            src='https://res.cloudinary.com/mobinet/image/upload/v1643980661/questionmark2_dmkl6s.svg'
                            direction="hidden"
                        />
                    </ContactMessageImgContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <ContactMessageContent>
                        <ContactMessageText text="text">Send us a message</ContactMessageText>
                        <ContactMessageSubTitle>We are happy to help!</ContactMessageSubTitle>
                        <Input placeholder='Full Name'/>
                        <Input placeholder='Email Address'/>
                        <Input placeholder='Phone Number'/>
                        <InputArea placeholder='Write your Message' cols="50" rows="4"/>
                        <Button>Send Message</Button>
                    </ContactMessageContent>
                </Grid>
            </Grid>
          </Container>
      </ContactMessageContainer>
  )
};

const ContactMessageContainer = styled.div`
    padding: 60px 0px;
    background: #fff;
`;


const ContactMessageContent = styled.div`
    
`;

const ContactMessageTitle = styled.h4`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #3785F7;
    margin: 10px 0px;
    ${mobile({ fontSize: "24px", textAlign: "center"})}
`;


const ContactMessageText = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #121212;
    padding-top: ${(props) => props.text === "text" ? "30px" : ""};
    ${mobile({ fontSize: "20px", textAlign: "center"})}
`;

const ContactMessagePara = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #141414;
    margin: 10px 0px;
    height: 108px;
    width: 187px;
    ${mobile({ fontSize: "16px", textAlign: "center", height: "100%", width: "100%"})}
`;

const ContactMessageImgContainer = styled.div`
    display: flex;
    padding: 30px 0px;
`;

const Img = styled.img`
    align-self: ${ (props) => props.direction === "hidden" ? "flex-end" : ""};
    width: ${ (props) => props.direction === "hidden" ? "141px" : "285.46px"};
    height: ${ (props) => props.direction === "hidden" ? "205.28px" : "415.59px"};
    ${mobile({
       display:  (props) => props.direction === "hidden" ? "none" : "",
       width:  (props) => props.direction === "resize" ? "100%" : "",
       height:  (props) => props.direction === "resize" ? "205px" : ""
    })}
`;

const ContactMessageSubTitle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    align-items: center;
    color: #141414;
    margin: 4px 0px;
    ${mobile({ fontSize: "16px", textAlign: "center", height: "100%", width: "100%"})}
`;

const Input = styled.input`
    display: block;
    margin: 25px 0px;
    border: 1px solid #141414;
    border-radius: 5px;
    padding: 0px 21px;
    width: 409px;
    height: 48px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #141414;
    opacity: 0.5;
    outline: none;
    ${mobile({width: "100%"})}
`;

const InputArea = styled.textarea`
    display: block;
    margin:10px 0px;
    border: 1px solid #141414;
    border-radius: 5px;
    padding: 16px 21px;
    width: 409px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #141414;
    opacity: 0.5;
    outline: none;
    ${mobile({width: "100%"})}
`;

const Button = styled.button`
    padding: 11px 20px;
    width: 149px;
    height: 53px;
    background: #256EE4;
    border-radius: 5px;
    margin: 10px 0px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    border: 0;
    outline: none;
    ${mobile({width: "100%"})}
`;



export default ContactMessage;
