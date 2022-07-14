import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';

export const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    .contact-title {
        font-family: Quicksand;
        font-size: 1.25rem;
        font-weight: 700;
    }

    .contact-text {
        font-size: 1rem;
        font-weight: 300;
        line-height: 24px;
        margin-bottom: 2.563rem;
    }

    .contact-link {
        text-decoration: underline;
        color: #161616;
        font-weight: 500;
    }
`
export const StyledLabelsGroup = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .char-counter{
        font-family: Poppins;
        font-size: 0.688rem;
        font-weight: 300;
    }
`


export const StyledContactInfo = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    height: 30.805rem;
    width: 28.938rem;
`

export const StyledContactContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    background-color: #F0F0F0;
    width: 43.688rem;
    padding: 2rem 3.063rem;
    font-family: Poppins;
    color: #161616;

    .contact-label {
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 16.5px;
    }

    .tos {
        margin: 2.188rem 0;
    }

    .message-area {
        resize: none;
        border: 1px solid #C9C9C9;
        border-radius: 3px;
        font-size: 1rem;
    }
`

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
export const CheckBox = styled(Form.Check.Input)`
    border-radius: 0% !important;
    border: 1px solid #C9C9C9;
    margin-right: 0.5rem;
    :checked {
        background-color: #FF8B20;
        border: 1px solid #FF8B20;
    }
`