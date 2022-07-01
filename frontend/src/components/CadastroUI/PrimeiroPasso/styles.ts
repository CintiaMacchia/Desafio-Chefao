import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 1rem;
`

export const Container = styled.div`
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
    width: 36.5rem;
    max-width: 37rem;
    padding: 2.813rem 3.563rem;
    background-color: #FFF;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.03), 0px -1px 10px rgba(0, 0, 0, 0.03), 0px 8px 38px rgba(22, 22, 22, 0.05);
    border-radius: 3px;
    text-align: left;
    
    h2 {
        font-size: 1rem;
        padding: 0;
        align-self: flex-start;
        margin-bottom: 1.563rem;

    }

    h4 {
        font-size: 0.7rem;
        margin: 1rem 0;
        padding: 0;
        margin-bottom: 1.563rem;
    }

    hr {
        border: 1px solid #C9C9C9; 
        width: 100%;
        margin: 2rem 0;
    }
`

export const StyledLabel = styled(Form.Label)`
    font-size: 0.688rem;
    font-weight: 700;
`

export const StyledInput = styled(Form.Control)`
    margin-bottom: 1.563rem;
    height: 3.125rem;
`

export const StyledButton = styled(Button)`
    width: 100%;
    padding: 0.7rem 0;
    background-color: transparent;
    border: 1px solid #161616;
    color: #161616;
    font-size: 1.063rem;
    font-weight: 500;
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
    color: #161616;

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