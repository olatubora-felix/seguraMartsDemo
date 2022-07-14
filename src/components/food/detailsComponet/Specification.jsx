import React from 'react'
import styled from 'styled-components';

const Specification = () => {
  return (
    <ItemContainer>
			<SpecificationContainer>
					<SpecificationContent text="specification">
							<SpecificationText>SKU: FA203FS04PRQPNAFAMZ</SpecificationText>
							<SpecificationText>Model: AAAA</SpecificationText>
							<SpecificationText>Production Country: Nigeria</SpecificationText>
							<SpecificationText>Size (L x W x H cm): 30*20*10</SpecificationText>
							<SpecificationText>Weight (kg): 0.8</SpecificationText>
							<SpecificationText>Color: WHITEBLAC</SpecificationText>
					</SpecificationContent>
					<SpecificationContent>
							<SpecificationText>SKU: FA203FS04PRQPNAFAMZ</SpecificationText>
							<SpecificationText>Model: AAAA</SpecificationText>
							<SpecificationText>Production Country: Nigeria</SpecificationText>
							<SpecificationText>Size (L x W x H cm): 30*20*10</SpecificationText>
							<SpecificationText>Weight (kg): 0.8</SpecificationText>
							<SpecificationText>Color: WHITEBLAC</SpecificationText>
					</SpecificationContent>
			</SpecificationContainer>
		</ItemContainer>
  )
}

const ItemContainer = styled.div`
    border: 0.7px solid #CECECE;
    box-sizing: border-box;
`;

const SpecificationContainer = styled.div`
    display: flex;
`;
const SpecificationContent = styled.div`
   padding: 20px 30px;
   margin-right: ${props => props.text === "specification" ? "30px" : ""}
`;
const SpecificationText = styled.h5`
    font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	color: #141414;
	margin: 5px;
`;

export default Specification