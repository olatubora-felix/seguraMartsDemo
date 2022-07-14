import {css} from 'styled-components';

export const mobile = (props) => {
    return css`
        @media only  screen and (max-width: 768px){
            ${props}
        }
    `;
};

export const mobileSmall = (props) => {
    return css`
        @media only  screen and (max-width: 380px){
            ${props}
        }
    `;
};