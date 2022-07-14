import { Rating } from '@mui/material'
import React from 'react'
import styled from 'styled-components';

const Review = () => {

  return (
    <ItemContainer>
       <ReviewContent>
           <ReviewContainer>
            <ReviewTextContainer>
                <ReviewText>Frank Adu - <Span>January, 13, 2021</Span></ReviewText>
                <Rating name="half-rating-read" defaultValue={4.5} precision={4.5} readOnly size='small'/>
                </ReviewTextContainer>
                <ReviewPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci et proin cras amet eu hac morbi senectus nisl. Nunc, nisl sem venenatis morbi ut donec leo amet. Et aliquam a a ultrices auctor vulputate ornare vivamus platea. Etiam viverra natoque neque ut vulputate consequat id.
                </ReviewPara>
            </ReviewContainer>
           <ReviewContainer>
            <ReviewTextContainer>
                <ReviewText>Frank Adu - <Span>January, 13, 2021</Span></ReviewText>
                <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly size='small'/>
                </ReviewTextContainer>
                <ReviewPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci et proin cras amet eu hac morbi senectus nisl. Nunc, nisl sem venenatis morbi ut donec leo amet. Et aliquam a a ultrices auctor vulputate ornare vivamus platea. Etiam viverra natoque neque ut vulputate consequat id.
                </ReviewPara>
            </ReviewContainer>
       </ReviewContent>
       <ReviewForm>
           <Form>
                    <Label>Add a Review</Label>
              <FormControl>
                <FormGroup>
                    <Input placeholder='Full Name'/>
                </FormGroup>
                <FormGroup>
                    <Input placeholder='Email Address'/>
                </FormGroup>
              </FormControl>
               <TextArea placeholder='Write your review'/>
               <AddRate>
                 <RateText>Add Star:</RateText>
                 <Rating size='small'/>
               </AddRate>
               <Button type='submit'>Add a Review</Button>
           </Form>
       </ReviewForm>
   </ItemContainer>
  )
}

const ItemContainer = styled.div`
    border: 0.7px solid #CECECE;
    box-sizing: border-box;
`;

const ReviewContent = styled.div`
    padding: 20px 30px;
    border: 0.7px solid #CECECE;
   
`;

const ReviewContainer = styled.div`
    
`;

const ReviewTextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ReviewText = styled.h4`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: justify;
    color: #141414;
    margin: 10px 0px;
`;
const Span = styled.span`
    font-weight: normal;
    font-size: 16px;
    margin: ${props => props.text === "span" ? "16px 0px" : ""}
`;
const ReviewPara = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    text-align: justify;
    color: #141414;
    margin: 10px 0px;
    height: 72px;
`;

const ReviewForm = styled.div`
    padding: 20px 30px;
`;

const Form = styled.form`
  
`;

const FormControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FormGroup = styled.div`
    padding: 16px 0px;
    margin-right: 80px;
`;

const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #141414;
  opacity: 0.8;
  display:block;
`;

const Input = styled.input`
  height: 48px;
  width: 293px;
  opacity: 0.7;
  border: 1px solid #141414;
  border-radius: 5px;
  padding-left: 21px;
  outline: none;

`;
  const TextArea = styled.textarea`
  height: 177px;
  width:100%;
  border-radius: 5px;
  padding: 21px;
  opacity: 0.7;
  border: 1px solid #141414;
  outline: none;
  resize: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #141414;
  opacity: 0.5;

`;

const Button = styled.button`
  width: 189px;
  height: 53px;
  background: rgba(232, 232, 232, 0.55);
  border-radius: 5px;
  display:block;
  margin: 20px 0px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: rgba(20, 20, 20, 0.5);
  margin: 6px 0px;
`;

const AddRate = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;

const RateText = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #141414;
  opacity: 0.8;
`;



export default Review