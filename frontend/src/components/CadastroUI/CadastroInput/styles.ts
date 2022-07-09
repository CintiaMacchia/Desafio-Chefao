import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const StyledInput = styled(Form.Control)`
    height: 3.125rem;
`
export const StyledCheckbox = styled(Form.Check)`
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
`

export const CheckBox = styled(Form.Check.Input)`
    border-radius: 0% !important;
`