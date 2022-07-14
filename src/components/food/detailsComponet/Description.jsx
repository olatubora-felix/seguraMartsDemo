import React from 'react'
import { Fragment } from 'react';
import styled from 'styled-components';

const Description = () => {
  return (
    <Fragment>
        <ItemContainer >
      <DescriptionContent>
          <ItemText>
          Semolina is coarse flour made from durum wheat, a hard type of wheat. When ground into a flour, durum wheat is known as semolina and used all over the world in bread, pasta, and porridge. This flour is darker and more golden in color than all purpose flour. It has a mild, earthy aroma. Along with its culinary uses, semolina also benefits weight management, heart health, and your digestive system.
          </ItemText> 
          <ItemText>Semolina is high in protein and fiber, both of which slow digestion and increase feelings of fullness between meals. Its also high in B vitamins like thiamine and folate, which have many important roles in your body, including helping convert food into energy.
          </ItemText> 
      </DescriptionContent>
    </ItemContainer>
    </Fragment>
  )
}

const ItemContainer = styled.div`
    border: 0.7px solid #CECECE;
    box-sizing: border-box;
`;

const DescriptionContent = styled.div`
      padding: 20px 30px;
`;
const ItemText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #151515;
    text-align: justify;
    margin: 10px auto;

`;

export default Description