import { Container } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import Description from './Description';
import Review from './Review';
import Specification from './Specification';

const ItemDetails = () => {
  return (
    <DetailsContainer>
        <Container>
            <Item>
                <ItemList>Description</ItemList>
                <ItemList>Specification</ItemList>
                <ItemList>Reviews </ItemList>
            </Item>
            <Description/>
            <Specification/>
            <Review/>
        </Container>
    </DetailsContainer>
  )
}

const DetailsContainer = styled.div`
    background: #FAFAFA;
    padding: 30px 0px;
`;

const Item = styled.ul`
   list-style-type: none;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const ItemList = styled.li`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: justify;
    color: #256EE4;
    margin: 5px 30px;
    cursor:pointer;

`;



export default ItemDetails