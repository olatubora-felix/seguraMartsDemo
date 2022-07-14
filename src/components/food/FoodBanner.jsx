import { Container, Paper } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const FoodBanner = ({img}) => {
  return (
      <FoodContainer>
          <Container>
          <Paper style={{ margin: "20px 0px", background: "none", boxShadow: "none" }}>
                <FoodImg src={img}
                style={{ width: "100%" }} />
            </Paper>
          </Container>
      </FoodContainer>
  );
};

const FoodContainer = styled.div`
    background: #FAFAFA;
    padding: 30px 0px
`;
const FoodImg = styled.img`
    padding: 0px;
`;

export default FoodBanner;
