import React from 'react'
import styled from 'styled-components';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { Rating} from '@mui/material';
import { Link,} from 'react-router-dom';

const List = ({item}) => {
  return (
    <StyledLink to={`/product/details/${item.id}`}>
        <ListContainer>
                <ListContent>
                  <Img src={item.img}/>
                  <ListContentText>
                    <ListContentTitle>{item.title}</ListContentTitle>
                      <ListContentSubtitle text="price">₦ 54,130</ListContentSubtitle>
                      <ListContentSubtitle text="save">₦ 64,130</ListContentSubtitle>
                      <Box>
                        <Rating name="half-rating-read" defaultValue={item.review} precision={item.review} readOnly style={{ marginRight: "8px"}}/>
                        <ListRating style={{ color: "#141414" }}>
                        (4.5)
                        </ListRating>
                      </Box>
                  </ListContentText>
                </ListContent>
                <FavoriteBorderOutlined/>
        </ListContainer>
    </StyledLink>
  )
}

const ListContainer = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 30px;
`;

const ListContent = styled.div`
   display: flex;
`;
const Img = styled.img`
   
`;
const ListContentText = styled.div`
  margin: 0px 50px;
`;

const ListContentTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  align-items: center;
  color: #141414;
`;
const ListContentSubtitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  align-items: center;
  letter-spacing: 0.0162em;
  color:  ${props => props.text === "price" ? "#256EE4" : "#ccc"};
  margin-left: ${props => props.text === "save" ? "16px" : ""};
  text-decoration: ${props => props.text === "save" ? "line-through" : ""};
`;
const Box = styled.div`
  display: flex;
  align-items: center;
`;

const ListRating = styled.span`
  
`;

const StyledLink = styled(Link)`
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.text === "active" ? "#256EE4" : "#B8B8B8"};
    text-decoration: none;
`;

export default List