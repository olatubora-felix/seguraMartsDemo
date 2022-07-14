import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Transaction = () => {
  return (
      <TransactionContainer>
          <Container>
                <TransactionContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={6}>
                            <TransactionText>TRANSACTIONS</TransactionText> 
                            <TransactionTitle>Send Money, Pay bills and Settle invoice with ease.</TransactionTitle>
                            <TransactionPara>
                                You can send money to over 32 African countries on our secured platform and you won't have to wait for days for the fulfilment. Securely make payments to family, friends, staff and other billers into their accounts in any bank at anytime without stress.
                                </TransactionPara>
                            <TransactionPara>
                                Settle current and outstanding invoices with a click of the button. We offer you ease of access to easily settle invoices sent in by family and loved ones.
                            </TransactionPara>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Paper style={{ boxShadow: "none", background: "none" }}>
                                <Img 
                                src='https://res.cloudinary.com/mobinet/image/upload/v1643888505/Rectangle_4440_3x_npgbmz.png' 
                                width="100%"
                                alt='Transaction'
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </TransactionContent>
          </Container>
      </TransactionContainer>
  )
};


const TransactionContainer = styled.div`
    padding: 30px 0px;
    ${mobile({padding: "20px 0px"})}
    background-color: #fff;
`;

const TransactionContent = styled.div`
    padding: 40px 0px;
    ${mobile({padding: "20px 0px"})}
`;

const TransactionText = styled.h3`
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #3785F7;
    margin: 18px 0;
    ${mobile({fontSize: "18px", textAlign: "center", margin: "10px 0px"})}

`;
const TransactionTitle = styled.h3`
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
    color: #121212;
    margin: 24px 0px;
    ${mobile({fontSize: "16px", textAlign: "center", margin: "10px 0px"})}
`;

const TransactionPara = styled.h3`
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
    color: #121212;
    margin: 18px 0px;
    ${mobile({fontSize: "16px", margin: "10px 0px"})}

`;

const Img = styled.img`
    border-radius: 5px;
`;

export default Transaction;
