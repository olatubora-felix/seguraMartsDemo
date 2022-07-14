import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Showcase = styled.div`
    width: 100%;
    height: 128px;
    ${mobile({
        height: "400px",
        margin: "30px 0px",
    })}
    background: #F2F7FF;
    position: relative;
`;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const DeliveryContainer = styled.div`
    /* background: #333; */
    display: flex;
    justify-content: space-between;
    height: 128px;
    width: 1168px;
    padding: 0px 50px;
    align-items: center;
    position: absolute;
    top: -30%;
    ${mobile({
        flexDirection: "column",
        top: "0%",
        width: "100%",
        position: "sticky",
        padding: "0px",
    })}
`;

const DeliveryContent = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 3px 20px rgba(138, 159, 193, 0.14);
    border-radius: 10px;
    height: 128px;
    border-right: ${(props) => props.borderRight ? "5px solid #E5EFFF" : ""};
    flex: 1;
    ${mobile({
        width: "100%",
        marginBottom: "16px",
        borderRight: "none",
        padding: "10px 20px",
    })}
`;

const DeliveryIcon = styled.img`
    margin: 0px 13px;
    height: 44px;
    width: 44px;

`;

const DeliveryTextContainer = styled.div`
    /* flex: 1; */
`;

const DeliveryTitle = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 34px;
    color: #000000;
    margin: 0px 0px;
`;

const DeliverySubTitle = styled.h6`
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 34px;
    color: #000000;
    margin: 0px 0px;
`;


const TopSellingProduct = () => {
  return (
      <Showcase>
        <Container>
            <DeliveryContainer>
                <DeliveryContent borderRight={'borderRight'}>
                    <DeliveryIcon src='https://res.cloudinary.com/mobinet/image/upload/v1643115799/lorry_ya0s2p.svg'/>
                    <DeliveryTextContainer>
                        <DeliveryTitle>Quick Delivery</DeliveryTitle>
                        <DeliverySubTitle>Fast & Easy</DeliverySubTitle>
                    </DeliveryTextContainer>
                </DeliveryContent>
                <DeliveryContent borderRight={'borderRight'}>
                    <DeliveryIcon  src='https://res.cloudinary.com/mobinet/image/upload/v1643115799/payment_hqin9e.svg'/>
                    <DeliveryTextContainer>
                        <DeliveryTitle>Bill Payment</DeliveryTitle>
                        <DeliverySubTitle>Quick Transfer</DeliverySubTitle>
                    </DeliveryTextContainer>
                </DeliveryContent>
                <DeliveryContent  borderRight={'borderRight'}>
                    <DeliveryIcon src='https://res.cloudinary.com/mobinet/image/upload/v1643115800/transfer_jdhba8.svg'/>
                    <DeliveryTextContainer>
                        <DeliveryTitle>Transfer Funds</DeliveryTitle>
                        <DeliverySubTitle>Send & Recieve</DeliverySubTitle>
                    </DeliveryTextContainer>
                </DeliveryContent>
                <DeliveryContent>
                    <DeliveryIcon src='https://res.cloudinary.com/mobinet/image/upload/v1643115799/paylater_ka7eh6.svg'/>
                    <DeliveryTextContainer>
                        <DeliveryTitle>Pay Later</DeliveryTitle>
                        <DeliverySubTitle>Buy & pay later</DeliverySubTitle>
                    </DeliveryTextContainer>
                </DeliveryContent>
            </DeliveryContainer>
        </Container>
      </Showcase>
  )
};

export default TopSellingProduct;
