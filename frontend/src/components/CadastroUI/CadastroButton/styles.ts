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
        background-color: #E46D00;
        color: #FFF;
        border: 1px solid #E46D00;
    }

    &:focus {
        background-color: #E46D00;
        color: #FFF;
        border: 1px solid #E46D00;
    }
`

export const StyledAnchor = styled.a`
    .cursor-chevron{
        cursor: pointer;
    }
`