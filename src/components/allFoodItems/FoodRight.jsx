import { Grid} from '@mui/material';
import axios from 'axios';
import React, { useState,  useEffect} from 'react';
import styled from 'styled-components';
import Grids from '../ItemsComponent/Grids';
import List from '../ItemsComponent/List';

const FoodRight = ({cat}) => {
  const [foodProducts, setFoodProducts] = useState({});
  const [show, setShow] = useState("grid")
  const  toggle = (value) => {
    setShow(value);
    console.log(value)
  }

  useEffect(() =>{
    const getFoodProducts = async () => {
        try {
            const res = await axios.get( cat 
                ? `http://localhost:8000/foods/${cat}`

                :  null
            );
            setFoodProducts(res.data);
        } catch (err) {
            
        }
    }
    getFoodProducts();
}, [cat]);

  return (
    <FoodContainer>
        <FoodHeader>
          <FoodTitle text="title">{foodProducts.name}</FoodTitle>
            <SwitchContainer>
              <FoodTitle>Switch view:</FoodTitle>
              <FoodImgIcon 
                src='https://res.cloudinary.com/mobinet/image/upload/v1644327542/Group_11949_veig5g.svg'
                style={{ marginRight: "5px" }}
                onClick={() => toggle("grid")}
              />
              <FoodImgIcon 
                src='https://res.cloudinary.com/mobinet/image/upload/v1644327655/format-list-bulleted_xdpk5v.svg'
                onClick={() => toggle("list")}
              />
            </SwitchContainer>
        </FoodHeader>
          <ItemContainer>
              {
                show === "grid" &&
                 <Grid container spacing={3} >
                    {
                      foodProducts.groceries?.map((grocery, index) => (
                          <Grids key={index} item={grocery}/>
                        ))
                    }
                </Grid>
              }
             
              {
                show === "list" && 
                <ListItems>
                  {
                    foodProducts.groceries?.map((grocery, index) => (
                      <List key={index} item={grocery}/>
                    ))
                  }
                </ListItems>
              }
          </ItemContainer>
    </FoodContainer>
  );
};

const FoodContainer = styled.div`
  
`;

const FoodHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  border-radius: 5px;
  padding: 10px 0px;
`;
const FoodTitle = styled.h4`
  font-style: normal;
  font-weight: ${props => props.text === "title" ? "600" : "normal"};
  font-size: ${props => props.text === "title" ? "24px" : "14px"};
  line-height: 24px;
  color: #141414;
  letter-spacing: 0.02em;
  margin: ${props => props.text === "title" ? "16px" : "5px"}
`;
const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

const FoodImgIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ItemContainer = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 30px 20px;
    margin-top: 10px;
`;
const ListItems = styled.div`
    
`;




export default FoodRight;
