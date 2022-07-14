import React, { Fragment } from 'react'
import styled from 'styled-components';

const NavCategory = () => {
  return (
    <Fragment>
        <ItemSubCategoryContainer>
          <ItemSubCategoryText text="style">Dry Food</ItemSubCategoryText>
          <ItemSubCategoryText>Rice</ItemSubCategoryText>
          <ItemSubCategoryText>Beans</ItemSubCategoryText>
          <ItemSubCategoryText>Yam</ItemSubCategoryText>
          <ItemSubCategoryText>Wheat</ItemSubCategoryText>
          <ItemSubCategoryText>Garri</ItemSubCategoryText>
        </ItemSubCategoryContainer> 
        <ItemSubCategoryContainer>
          <ItemSubCategoryText text="style">Dry Food</ItemSubCategoryText>
          <ItemSubCategoryText>Rice</ItemSubCategoryText>
          <ItemSubCategoryText>Beans</ItemSubCategoryText>
          <ItemSubCategoryText>Yam</ItemSubCategoryText>
          <ItemSubCategoryText>Wheat</ItemSubCategoryText>
          <ItemSubCategoryText>Garri</ItemSubCategoryText>
        </ItemSubCategoryContainer> 
        <ItemSubCategoryContainer>
        <ItemSubCategoryText text="style">Dry Food</ItemSubCategoryText>
          <ItemSubCategoryText>Rice</ItemSubCategoryText>
          <ItemSubCategoryText>Beans</ItemSubCategoryText>
          <ItemSubCategoryText>Yam</ItemSubCategoryText>
          <ItemSubCategoryText>Wheat</ItemSubCategoryText>
          <ItemSubCategoryText>Garri</ItemSubCategoryText>
        </ItemSubCategoryContainer> 
        <ItemSubCategoryContainer>
        <ItemSubCategoryText text="style">Dry Food</ItemSubCategoryText>
          <ItemSubCategoryText>Rice</ItemSubCategoryText>
          <ItemSubCategoryText>Beans</ItemSubCategoryText>
          <ItemSubCategoryText>Yam</ItemSubCategoryText>
          <ItemSubCategoryText>Wheat</ItemSubCategoryText>
          <ItemSubCategoryText>Garri</ItemSubCategoryText>
        </ItemSubCategoryContainer> 
        <ItemSubCategoryContainer>
        <ItemSubCategoryText text="style">Dry Food</ItemSubCategoryText>
          <ItemSubCategoryText>Rice</ItemSubCategoryText>
          <ItemSubCategoryText>Beans</ItemSubCategoryText>
          <ItemSubCategoryText>Yam</ItemSubCategoryText>
          <ItemSubCategoryText>Wheat</ItemSubCategoryText>
          <ItemSubCategoryText>Garri</ItemSubCategoryText>
        </ItemSubCategoryContainer> 
    </Fragment>
  )
}

const ItemSubCategoryContainer = styled.div`
    margin-right: 10px;
    padding: 10px;
    margin-bottom: 10px;
`;

const ItemSubCategoryText = styled.h6`
    font-style: normal;
    font-weight: ${props => props.text === "style" ? "600" : "normal"};
    font-size: 16px;
    line-height: 22px;
    color: #151515;
    margin: 10px 0px;
`;

export default NavCategory