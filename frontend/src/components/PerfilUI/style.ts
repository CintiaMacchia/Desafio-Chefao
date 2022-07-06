import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledHeader = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: rgba(53, 53, 53, 0.05);
    font-family: Quicksand;
    padding: 5rem;

    h2 {
        width: 100%;
        max-width: 1440px;
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.5rem;
        margin: 0;
    }
`

export const StyledMain = styled.main`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const StyledContainer = styled.div`
    width: 42.375rem;
    margin: 4.375rem 0 7.5rem 0;
    font-family: Poppins;

    h3 {
        font-size: 1.063rem;
        font-weight: 600;
        line-height: 1.625rem;
        margin: 0;
    }

    h4 {
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1.125rem;
        margin-top: 1.375rem;
    }

    p {
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.5rem;
        margin: 0;
        padding: 1.063rem 0 1.125rem 0;
    }

    p:nth-child(2n+4) {
        padding: 0;
    }
`

export const StyledButton = styled(Button)`
    margin-top: 2.5rem;
    padding: 0.75rem 2.313rem;
    background-color: transparent;
    border: 1px solid #161616;
    color: #161616;
    font-size: 1.063rem;
    font-family: Poppins;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #161616;
        color: #FFF;
        border: 1px solid #161616;
    }

    &:focus {
        background-color: #161616;
        color: #FFF;
        border: 1px solid #161616;
    }
`

export const StyledButtonOrange = styled(StyledButton)`
    background-color: #FCB322;
    border: 1px solid #FCB322;
    color: #FFF;

    &:hover {
        background-color: #D48E03;
        color: #FFF;
        border: 1px solid #D48E03;
    }

    &:focus {
        background-color: #D48E03;
        color: #FFF;
        border: 1px solid #D48E03;
    }
`