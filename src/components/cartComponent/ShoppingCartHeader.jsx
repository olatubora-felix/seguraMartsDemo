import { Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components'

const ShoppingCartHeader = () => {
  return (
    <div>
          <CartContent>
          <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={9} lg={9}>
                  <ProductDetails>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6}>  
                            <ProductDetailsText>PRODUCT DETAILS</ProductDetailsText>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>  
                            <ProductDetailsContent>
                              <ProductDetailsText>UNIT PRICE</ProductDetailsText>
                              <ProductDetailsText>QUANTITY</ProductDetailsText>
                              <ProductDetailsText>SUB-TOTAL</ProductDetailsText>
                            </ProductDetailsContent>
                        </Grid>
                        </Grid>
                  </ProductDetails>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                <OrderSummery>
                    <OrderSummeryHeader>
                      <OrderSummeryTitle>ORDER SUMMARY </OrderSummeryTitle>
                    </OrderSummeryHeader>
                  </OrderSummery>
                </Grid>
          </Grid>
        </CartContent>
    </div>
  )
}

const CartContent = styled.div`
  
`;

const ProductDetails = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 16px;
    margin: 30px 10px 10px 0px;

`;


const ProductDetailsText = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #141414;
  padding: 0px 10px;
`;

const ProductDetailsContent = styled.div`
    display:flex;
    align-items: center;
`;

const OrderSummery = styled.div`
   background: #FFFFFF;
   /* background: red; */
    border-radius: 5px;
    padding: 16px;
    margin: 20px 0px;
    width: 395px;
`;
const OrderSummeryHeader = styled.div`
   
`;
const OrderSummeryTitle = styled.h3`
   font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #141414;
  text-align:center;
`;

export default ShoppingCartHeader