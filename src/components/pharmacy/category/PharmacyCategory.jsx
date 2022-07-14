import { Breadcrumbs, Container, Grid, Stack } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Items from '../../food/Items';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FoodBanner from '../../food/FoodBanner';

const PharmacyItem = () => {
    const [products, setproductss] = useState([]);

    useEffect(() =>{
        const getproducts = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/pharmacys`);
               
                setproductss(res.data);
                  //  console.log(res.data)
            } catch (err) {
          }
        }
        getproducts();
    }, []);

    const breadcrumbs = [
      <StyledLink key="1" to="/">Home</StyledLink>,
      <StyledLink key="2" to="/pharmacy" text="active" >Pharmacy & Drugs</StyledLink>,
    ];

    const name = "Tablets";
    const img = "https://res.cloudinary.com/mobinet/image/upload/v1645257957/Frame_43695_l5csse.svg";
  return (
        <FoodContainer>
            <Container>
            <Stack spacing={1}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
            <FoodBanner img={img}/>
                {
                    products.map((product, index)=> (
                    <Fragment key={index}>
                    {
                        product.name === name ?
                        <Fragment key={product.id}>
                            <FoodContent>
                                <FoodText text="black">{product.name}</FoodText>
                                <FoodText text="blue">
                                    <StyledLink text="active" to={`/pharmacy/${product.id}`}>
                                      See All
                                      <ArrowRightAltIcon size="small"/>
                                    </StyledLink>
                                </FoodText>
                            </FoodContent>
                        <Grid container spacing={3} >
                            { 
                                product.drugs.slice(0, 4).map((item, index) => <Items item={item} key={index} id={product.id} />)
                            }
                        </Grid>
                                </Fragment>
                        : null  }
                    </Fragment>
                ))}
            </Container>
        </FoodContainer>
  );
};

const FoodContainer = styled.div`
    background: #FAFAFA;
    padding: 30px 0px;
`

const FoodContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding:30px 0px 18px 0px;
`;
const FoodText = styled.span`
    font-style: normal;
    font-weight: ${(props) => props.text === "black" ? "600" : "normal"};
    font-size: ${(props) => props.text === "black" ? "24px" : "16px"};
    line-height: ${(props) => props.text === "black" ? "29px" : "19px"};
    color: ${(props) => props.text === "black" ? "#141414" : "#256EE4"};
    padding: 20px 0px;
`;

const StyledLink = styled(Link)`
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.text === "active" ? "#256EE4" : "#B8B8B8"};
    text-decoration: none;
    display: flex;
    align-items: center;
`;


export default PharmacyItem;
