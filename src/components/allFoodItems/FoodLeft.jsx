import * as React from 'react';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import { useState,  useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function valuetext(value) {
  return `${value}°C`;
}

const FoodLeft = () => {

  const [value, setValue] = useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    const getCategory = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/foods`);
            setCategories(res.data);
            // console.log(res.data)
        } catch (err) {
            
        }
    }
    getCategory();
}, []);



  return (
    <FoodLeftContainer>
         <FoodLeftTitle text="category">CATEGORY</FoodLeftTitle>
              <Box text="border">
             {categories.map((cat, index) => (
                 <CategoryText key={index}>
                    <StyledLink to={`/food/${cat.id}`} text="active">{cat.name}</StyledLink>
                  </CategoryText>
              ))}
              </Box>
              <Box text="border">
                <PriceContainer>
                  <PriceText text="style">Price</PriceText>
                  <PriceText>Apply</PriceText>
                </PriceContainer>
                <SliderContainer>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </SliderContainer>
                <PriceContent>
                    <FormPrice text="input">
                      <PriceMin>Min</PriceMin>
                      <Input placeholder='0'/>
                    </FormPrice>
                    <FormPrice>
                      <PriceMin>Min</PriceMin>
                      <Input placeholder='0.00'/>
                    </FormPrice>
                </PriceContent>
              </Box>
              <Box text="border">
                  <FoodLeftTitle text="subcategory">SUB-CATEGORY</FoodLeftTitle>
                  <FormGroup style={{ margin: "0px 20px" }}>
                    <FormControlLabel control={<Checkbox />} label="Rice" />
                    <FormControlLabel control={<Checkbox />} label="Beans" />
                    <FormControlLabel control={<Checkbox />} label="Garri" />
                    <FormControlLabel control={<Checkbox />} label="Semolina" />
                    <FormControlLabel control={<Checkbox />} label="Poundo Yam" />
                    <FormControlLabel control={<Checkbox />} label="Wheat" />
                    <FormControlLabel control={<Checkbox />} label="Oats" />
                </FormGroup>
              </Box>
              <Box>
                  <FoodLeftTitle text="subcategory">Rating</FoodLeftTitle>
                  <RatingContainer>
                    <Checkbox {...label} />
                    <Rating name="read-only" value={5} readOnly size='small' />
                  </RatingContainer>
                  <RatingContainer>
                    <Checkbox {...label} />
                    <Rating name="read-only" value={4.5} readOnly size='small' />
                  </RatingContainer>
                  <RatingContainer>
                    <Checkbox {...label} />
                    <Rating name="read-only" value={4.0} readOnly size='small' />
                  </RatingContainer>
                  <RatingContainer>
                    <Checkbox {...label} />
                    <Rating name="read-only" value={3.0} readOnly size='small' />
                  </RatingContainer>
                  <RatingContainer>
                    <Checkbox {...label} />
                    <Rating name="read-only" value={1.0} readOnly size='small' />
                  </RatingContainer>
              </Box>
    </FoodLeftContainer>
  )
};

const FoodLeftContainer = styled.div`
    padding: 30px 0px;
`;

const FoodLeftTitle = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.text === "category" ? "18px": "16px"};
    line-height: 22px;
    color: #151515;
    margin: 0px 20px;
    text-transform: uppercase;
`;

const Box = styled.div`
    border-bottom: ${props => props.text === "border" ? "0.5px solid #B8B8B8" : ""};
    padding: 18px 0px;
    margin: opx 20px;
`;


const CategoryText = styled.h5`
    font-style: normal;
    font-weight: ${props => props.text === "active" ? "600" : "normal"};
    font-size: 16px;
    line-height: 22px;
    margin: 16px 20px;
`;

const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PriceText = styled.h5`
font-style: normal;
font-weight: ${props => props.text === "style" ? "bold" : "normal"};
font-size: 16px;
line-height: 22px;
color: ${props => props.text === "style" ? "#141414" : "#256EE4"};
margin: 16px 20px;
`;


const SliderContainer = styled.div`
  margin: 16px 20px;
`;

const PriceContent = styled.div`
  margin: 16px 20px;
  display: flex;
`;

const FormPrice = styled.div`
  margin-right: ${props => props.text === "input" ? "16px" : ""}
`;

const PriceMin = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #141414;
  margin: 16px 0px;
`;

const Input = styled.input`
  background: #F9F9F9;
  border-radius: 5px;
  height: 38px;
  width: 100px;
  border: 0;
  outline: none;
  padding-left: 5px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`

export default FoodLeft;
