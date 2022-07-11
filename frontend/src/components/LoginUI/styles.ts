import styled from 'styled-components';
import { Button, Form} from 'react-bootstrap';

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`

export const Container = styled.div`
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
    width: 36.5rem;
    max-width: 37rem;
    margin: 6.25rem 0;
    padding: 2.813rem 3.563rem;
    background-color: #FFF;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.03), 0px -1px 10px rgba(0, 0, 0, 0.03), 0px 8px 38px rgba(22, 22, 22, 0.05);
    border-radius: 3px;
    text-align: left;
    
    .login-h2 {
        font-size: 1rem;
        font-weight: 600;
        padding: 0;
        align-self: flex-start;
        margin-bottom: 1.563rem;

    }

    hr {
        border: 1px solid #C9C9C9; 
        width: 100%;
        margin: 2rem 0;
    }

    .link {
        color: #161616;
        font-size: 1rem;
        font-weight: 500;
    }
`
export const StyledFormGroup = styled(Form.Group)` 
    margin-top: 1.563rem;
`

export const StyledLabel = styled(Form.Label)`
    font-size: 1rem;
    font-weight: 400;
`

export const StyledInput = styled(Form.Control)`
    margin-bottom: 1.563rem;
    height: 3.125rem;
`

export const StyledButton = styled.a`
    width: 100%;
    padding: 0.7rem 0;
    background-color: transparent;
    border: 1px solid #FF8B20;
    border-radius: 8px;
    font-family: Poppins;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    color: #FF8B20;

    &:hover {
        background-color: #FF8B20;
        color: #FFF;
        border: 1px solid #FF8B20;
    }

    &:focus {
        background-color: #FF8B20;
        color: #FFF;
        border: 1px solid #FF8B20;
    }
`

export const StyledButtonOrange = styled(Button)`
    width: 100%;
    padding: 0.7rem 0;
    background-color: #FF8B20;
    border: 1px solid #FF8B20;
    border-radius: 8px;
    color: #FFF;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #FFF;
        color: #FF8B20;
        border: 1px solid #FF8B20;
    }

    &:focus {
        background-color: #FFF;
        color: #FF8B20;
        border: 1px solid #FF8B20;
    }
`

export const StyledError = styled.div`
    padding-left: 0.5rem;
    color: #FF3333;
    font-size: 0.8rem;
`
