import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Sell = () => {
  return (
      <SellContainer>
          <Container>
              <SellContent>
                  <SellTitle>Start Selling on SeguraMart</SellTitle>
                  <SellPara>Join the most reliable platform, Become a seller today!</SellPara>
                  <Button>Become a Seller</Button>
              </SellContent>
          </Container>
      </SellContainer>
  )
};

const SellContainer = styled.div`
    padding: 30px 0px;
`;

const SellContent = styled.div`
    background: #124391;
    border-radius: 10px;
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
`;

const SellTitle = styled.h2`
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 29px;
    align-items: center;
    color: #FFFFFF;
    margin: 10px 0px;
    ${mobile({fontSize: "20px", margin: "0px"})}
`;

const SellPara = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
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

export default Sell;
