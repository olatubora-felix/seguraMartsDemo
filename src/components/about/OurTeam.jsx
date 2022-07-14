import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { ourTeams } from '../../data';


const OurTeam = () => {
  return (
    <OurTeamContainer>
        <Container>
            <Box paddingBottom={4}>
                <OurTeamTitle>PEOPLE OF SEGURAMART</OurTeamTitle>
                <OurTeamSubTitle>Meet the Team</OurTeamSubTitle>
            </Box>
            <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
                { ourTeams.map(ourTeam => (
                    <Grid item xs={12} sm={12} md={4} lg={4} key={ourTeam.id}>
                        <Paper>
                            <Img src={ourTeam.img} />
                            <OurTeamContent>
                                <OurTeamName>{ourTeam.name}</OurTeamName>
                                <OurTeamPosition>{ourTeam.position}</OurTeamPosition>
                            </OurTeamContent>
                        </Paper>
                    </Grid>
                 ))}
            </Grid>
        </Container>
    </OurTeamContainer>
  )
};

const OurTeamContainer = styled.div`
    padding: 30px 0px;
`;

const OurTeamTitle = styled.h5`
    font-family: "lato";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #3785F7;
    text-align: center;
    margin: 4px 0px;
`;

const OurTeamSubTitle = styled.h2`
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #121212;
    margin: 4px 0px;
`;

const Paper = styled.div`
    position: relative;
    height: 444px;
    width: 369px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`
const Img = styled.img`
    
`


const OurTeamContent = styled.div`
    background: linear-gradient(113.4deg, rgba(37, 110, 228, 0.4) 9.84%, rgba(37, 110, 228, 0.55) 113.15%);
    backdrop-filter: blur(20px);
    height: 82px;
    width: 100%;
    position: absolute;
    bottom: 0%;
    left: 0%;
`;

const OurTeamName = styled.h5`
    text-align: center;
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #FFFFFF;
    margin: 5px 0px;
    padding: 10px;
`;

const OurTeamPosition = styled.h5`
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    opacity: 0.9;
    margin: 5px 0px;
    text-align: center;
`;

export default OurTeam;
