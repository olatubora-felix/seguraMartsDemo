import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Question = () => {
  return (
      <QuestionContainer>
          <Container>
              <QuestionContent>
                  <QuestionTitle>Still got Questions?</QuestionTitle>
                  <QuestionPara>Get in touch with our team and we would respond as soon as possible</QuestionPara>
                  <Button>Ask a question</Button>
              </QuestionContent>
          </Container>
      </QuestionContainer>
  )
};

const QuestionContainer = styled.div`
    padding: 30px 0px;
`;

const QuestionContent = styled.div`
    background: #124391;
    border-radius: 10px;
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
`;

const QuestionTitle = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 29px;
    align-items: center;
    color: #FFFFFF;
    margin: 10px 0px;
    ${mobile({fontSize: "20px", margin: "0px"})}
`;

const QuestionPara = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    color: #F1F1F1;
    margin: 10px 0px;
    ${mobile({fontSize: "16px", margin: "5px 0px"})}
`;

const Button = styled.button`
    width: 175px;
    height: 53px;
    background: #256EE4;
    border-radius: 5px;
    margin: 10px 0px;
    color: #FFFFFF;
    border: 0;
    text-align: center;
    cursor: pointer;
    &:hover{
        background: #21B3E8;
        transition: all 3ms ease-in-out;
    }
    ${mobile({ width: "150px", fontSize: "14px", lineHeight: "24px", margin: "5px 0px"})}
`;

export default Question;
