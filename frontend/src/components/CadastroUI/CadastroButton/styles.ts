import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledButtonOrange = styled(Button)`
    width: 100%;
    padding: 0.7rem 0;
    background-color: #FF8B20;
    border: 1px solid #FF8B20;
    border-radius: 8px;
    font-size: 1.063rem;
    font-weight: 600;
    line-height: 26px;
    color: #FFF;
    cursor: pointer;

    &:hover {
        background-color: #D48E03;
        color: #161616;
        border: 1px solid #D48E03;
    }

    &:focus {
        background-color: #D48E03;
        color: #161616;
        border: 1px solid #D48E03;
    }
`