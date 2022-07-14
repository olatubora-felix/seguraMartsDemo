import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import FoodCategory from '../food/FoodCategory';
import MedicineCategory from '../pharmacy/MedicineCategory';
// import { Link } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  border:'none',
};

export default function NavModal({open,handleClose }) {
  const [show, setShow] = useState('food');
 const  toggle = (value) => {
    setShow(value);
    console.log(value)
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
                <Container>
                    <ItemCategory text="category">
                        <CategoryTitle onClick={() => toggle('food')}>Food</CategoryTitle>
                        <CategoryTitle onClick={() => toggle('medicine')}>Pharmacy & Drugs</CategoryTitle>
                    </ItemCategory>  
                    <ItemSubCategory text="subcategory">
                       {
                         show === 'food'  &&  <FoodCategory  />
                       }
                       {
                         show === 'medicine' &&  <MedicineCategory  />
                       }
                    </ItemSubCategory>
                    <ImgItem>
                    {
                         show === 'food'  &&  <Img src='https://res.cloudinary.com/mobinet/image/upload/v1644498994/unsplash_910GanwBoew_v5avzl.svg'/>
                       }
                       {
                         show === 'medicine' &&   <Img src='https://res.cloudinary.com/mobinet/image/upload/v1645230765/unsplash_F6clvre8fGg_pv0bjq.svg'/>
                       }
                        
                    </ImgItem>
                </Container>
        </Box>
      </Modal>
    </div>
  );
}

const Container = styled.div`
    display:flex;
    justify-content: space-between;
`;

const ItemCategory = styled.div`
    margin-right: 10px;
    padding: 10px;
    background: #FAFAFA;
    height: 491px;
    border-radius: 0px;

`;

const CategoryTitle = styled.h3`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin: 10px;
    cursor: pointer;
`;
const ItemSubCategory = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 355px;
    width: 307px;
`;


const ImgItem = styled.div`

`;
const Img = styled.img`
    height: 355px;
    width: 307px;
    border-radius: 5px;
`;

// const StyledLink = styled(Link)`
//     text-decoration: none;
//     color: ${(props) => props.active === "home" ? "#256EE4" : "rgba(20, 20, 20, 0.5)"};
//     cursor: pointer;
//     &:hover {
//     color: "#256EE4";
// }
// `;