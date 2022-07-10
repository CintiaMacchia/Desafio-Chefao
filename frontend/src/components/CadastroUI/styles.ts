import styled from 'styled-components';
import { Form } from 'react-bootstrap';

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
    
    .signup__text {
        font-family: Poppins;
        font-size: 1rem;
        font-weight: 500;
        padding: 0;
        align-self: flex-start;
        margin-bottom: 1.563rem;
    }

    .signup__text--bolder {
        font-family: Poppins;
        font-size: 1rem;
        font-weight: 500;
        padding: 0;
        font-weight: 600;
        margin: 1.563rem 0;
    }

    .signup__pointer {
        font-family: Poppins;
        font-size: 0.688rem;
        font-weight: 300;
        padding: 0;
        margin: 0;
        align-self: flex-start;
    }

    hr {
        border: 1px solid #C9C9C9; 
        width: 100%;
        margin: 2rem 0;
    }


    .checkbox-tos__text {
        font-family: Poppins;
        font-size: 0.875rem;
        font-weight: 500;
        margin-left: 0.5rem;

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
    font-family: Poppins;
    font-size: 0.688rem;
    font-weight: 500;
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

export const TwoInputsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;

    .large-input {
        display: flex;
        flex-flow: column nowrap;
        flex: 1;
    }
    
    .sm-input {
        display: flex;
        flex-flow: column nowrap;
        width: 10.375rem;
    }
    .xs-input {
        display: flex;
        flex-flow: column nowrap;
        width: 7.25rem;
        margin-left: 1.125rem;
    }
`

export const StyledError = styled.div`
    padding-left: 0.5rem;
    color: #FF3333;
    font-size: 0.8rem;
`

