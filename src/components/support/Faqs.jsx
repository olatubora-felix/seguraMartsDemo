import React from 'react';
import Container from '@mui/material/Container'
import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@mui/material';
import styled from 'styled-components';
import {mobile} from '../../responsive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faqs = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
      <FaqsContainer>
          <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6}>
                    <FaqsContent>
                        <FaqsTitle>FAQS</FaqsTitle>
                        <FaqsText>How can we help you?</FaqsText>
                        <FaqsPara>
                            We aim to serve you better. Please browse through the questions to get answers on our products and services. 
                        </FaqsPara>
                    </FaqsContent>
                    <FaqsImgContainer>
                        <Img 
                            src='https://res.cloudinary.com/mobinet/image/upload/v1643980661/questionmark2_dmkl6s.svg'
                            direction="hidden"
                        />
                        <Img
                            src='https://res.cloudinary.com/mobinet/image/upload/v1643980661/questionmark1_v6ms8r.svg'
                            direction="resize"
                        />
                          <Img 
                            src='https://res.cloudinary.com/mobinet/image/upload/v1643980661/questionmark2_dmkl6s.svg'
                            direction="hidden"
                        />
                    </FaqsImgContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                <Accordion 
                    expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                    style={{ background: "#FAFAFA", boxShadow: "none", margin: "16px 0px"  }}
                    >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <AccordionTitle>
                         How long will it take for my order to arrive after I make payment?
                    </AccordionTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                    <AccordionPara>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </AccordionPara>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                    expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                    style={{ background: "#FAFAFA", boxShadow: "none", margin: "16px 0px"  }}
                    >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <AccordionTitle>
                         How long will it take for my order to arrive after I make payment?
                    </AccordionTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                    <AccordionPara>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </AccordionPara>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                    expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                    style={{ background: "#FAFAFA", boxShadow: "none", margin: "16px 0px"  }}
                    >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <AccordionTitle>
                         How long will it take for my order to arrive after I make payment?
                    </AccordionTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                    <AccordionPara>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </AccordionPara>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                    expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                    style={{ background: "#FAFAFA", boxShadow: "none", margin: "16px 0px"  }}
                    >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <AccordionTitle>
                         How long will it take for my order to arrive after I make payment?
                    </AccordionTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                    <AccordionPara>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </AccordionPara>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                    expanded={expanded === 'panel5'} onChange={handleChange('panel5')}
                    style={{ background: "#FAFAFA", boxShadow: "none", margin: "16px 0px"  }}
                    >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <AccordionTitle>
                         How long will it take for my order to arrive after I make payment?
                    </AccordionTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                    <AccordionPara>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </AccordionPara>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                    expanded={expanded === 'panel6'} onChange={handleChange('panel6')}
                    style={{ background: "#FAFAFA", boxShadow: "none", margin: "16px 0px"  }}
                    >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <AccordionTitle>
                         How long will it take for my order to arrive after I make payment?
                    </AccordionTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                    <AccordionPara>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </AccordionPara>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                    expanded={expanded === 'panel7'} onChange={handleChange('panel7')}
                    style={{ background: "#FAFAFA", boxShadow: "none", margin: "16px 0px"  }}
                    >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <AccordionTitle>
                         How long will it take for my order to arrive after I make payment?
                    </AccordionTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                    <AccordionPara>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </AccordionPara>
                    </AccordionDetails>
                </Accordion>
                </Grid>
            </Grid>
          </Container>
      </FaqsContainer>
  )
};

const FaqsContainer = styled.div`
    padding: 60px 0px;
    background: #fff;
`;


const FaqsContent = styled.div`
    
`;

const FaqsTitle = styled.h4`
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #3785F7;
    margin: 10px 0px;
    ${mobile({ fontSize: "24px", textAlign: "center"})}
`;


const FaqsText = styled.h2`
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
    color: #121212;
    ${mobile({ fontSize: "20px", textAlign: "center"})}
`;

const FaqsPara = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    color: #141414;
    margin: 10px 0px;
    height: 95px;
    width: 395px;
    ${mobile({ fontSize: "16px", textAlign: "justify", height: "100%", width: "100%"})}
`;

const FaqsImgContainer = styled.div`
    display: flex;
    padding: 30px 0px;
`;

const Img = styled.img`
    align-self: ${ (props) => props.direction === "hidden" ? "flex-end" : ""};
    width: ${ (props) => props.direction === "hidden" ? "141px" : "285.46px"};
    height: ${ (props) => props.direction === "hidden" ? "205.28px" : "415.59px"};
    ${mobile({
       display:  (props) => props.direction === "hidden" ? "none" : "",
       width:  (props) => props.direction === "resize" ? "100%" : "",
       height:  (props) => props.direction === "resize" ? "205px" : ""
    })}
`;

const AccordionTitle = styled.h6`
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 29px;
    text-align: justify;
    color: #141414;
    margin: 0px 0px;
    ${mobile({ fontSize: "14px"})}
`;

const AccordionPara = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 29px;
    text-align: justify;
    color: #141414;
    margin: 0px 0px;
    padding:  10px 5px;
`;



export default Faqs;
