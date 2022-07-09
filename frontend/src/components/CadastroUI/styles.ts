import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';

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
        align-self: flex-start;
    }

    hr {
        border: 1px solid #C9C9C9; 
        width: 100%;
        margin: 2rem 0;
    }
`

export const StyledAnchor = styled.a`
    width: 100%;
    padding: 0.7rem 0;
    background-color: transparent;
    border: 1px solid #FF8B20;
    border-radius: 8px;
    color: #FF8B20;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;

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

export const StyledFormGroup = styled(Form.Group)` 
    margin-top: 1.563rem;
`

export const StyledLabel = styled(Form.Label)`
    font-size: 0.688rem;
    font-weight: 700;
    line-height: 1rem;
`
export const StyledInput = styled(Form.Control)`
    height: 3.125rem;
`

export const StyledInputSmall = styled(StyledInput)`
    width: 7.25rem;
    margin-left: 1.125rem;
`

export const StyledSelect = styled(Form.Select)`
    height: 3.125rem;
`

export const StyledError = styled.div`
    padding-left: 0.5rem;
    color: #FF3333;
    font-size: 0.8rem;
`

