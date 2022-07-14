import React, { useState } from 'react';
import styled from 'styled-components';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@mui/icons-material';
import {sliderItems} from '../../data';
import { mobile } from '../../responsive';

const Heroes = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
    if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
        setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
};    
  return (
    <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow> 
            <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(sliderItem => (
                    <Slide key={sliderItem.id}>
                        <InfoContainer>
                            <Title>
                                Send <TitleSubText>Goods and Services</TitleSubText> <br /> without Stress.
                                <CircleIcon src="https://res.cloudinary.com/mobinet/image/upload/v1643104618/circle1_ivirxk.svg" />
                            </Title>
                            <Desc>{sliderItem.desc}</Desc>
                            <Button>SHOP NOWS</Button>
                        </InfoContainer>
                        <ImgContainer>
                            <Image src={sliderItem.img} />
                        </ImgContainer>
                    </Slide>
            ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow> 
    </Container>
  )
};

const Container = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
     width: 50px;
    height: 50px;
    background-color: #1e9b80;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100 }vw);
    transition: all 1.5s ease;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 500.24px;
    ${mobile({ height: "100%"})}
    background: linear-gradient(#84a8e0e5, rgba(229, 239, 255, .9)), url("");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
`;
const InfoContainer = styled.div`
    flex: 1;
    margin-left: 3rem;
    ${mobile({ marginLeft: "1rem"})}
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 69px;
    margin-left: 50px;
    color: #141414;
    position: relative;
    ${mobile({fontSize: "30px",
     lineHeight: "40px",
    marginLeft: "0",
    textAlign: "center",
    marginTop: "20px"
    })}
`;
const TitleSubText = styled.span`
    font-style: italic;
    font-weight: 700;
    color: #256EE4;
`;
const CircleIcon = styled.img`
    width: 157.99px;
    height: 53.88px;
    position: absolute;
    left: 25%;
    top: 60%;
/* transform: rotate(-17.29deg); */

`;


const Desc = styled.p`
    margin-left: 50px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    /* or 150% */


    color: #141414;

`;

const Button = styled.button`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 34px;
    width: 175px;
    height: 53px;
    margin: 20px 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    border: 0;
    /* Primary 2 */
    background: #256EE4;
    color: #FFFFFF;
    border-radius: 5.60932px;
    cursor: pointer;
`;

const ImgContainer = styled.div`
     flex: 1;
     ${mobile({display: "none"})}
`;

const Image = styled.img`
    width: 839.23px;
    height: 500.24px;
    top: 0;
    position: absolute;
    left: 50%;
    top: 0%;
`;



export default Heroes;
