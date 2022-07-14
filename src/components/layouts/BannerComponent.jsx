import {Container, Paper} from '@mui/material';
import styled from 'styled-components';

const BannerComponent = () => {
    return (
        <BannerContainer>
            <Container>
                <Paper elevation={0} style={{ maxHeight: "311px", background: "none", display: "flex" }}>
                    <img 
                    src="https://res.cloudinary.com/mobinet/image/upload/v1643809381/shopnow_wfudlh.png" 
                    alt="shop now" 
                    width="100%" 
                    height="100%"/>
                </Paper>
            </Container>
        </BannerContainer>
    )
}

const BannerContainer = styled.div`
    background: #F2F7FF;
    padding: 30px 0;
`;



export default BannerComponent