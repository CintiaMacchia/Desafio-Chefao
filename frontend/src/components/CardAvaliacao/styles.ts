import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 14.438rem;
    padding: 1.25rem;
    background-color: #FFF;
    box-shadow: 0px 2px 4px rgba(7, 4, 146, 0.1), 0px 24px 60px rgba(6, 47, 125, 0.05), 0px 12px 24px rgba(27, 59, 119, 0.05);
    font-family: Roboto;

    .titulo-comentario {
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.625rem;
        margin: 0.5rem 0;
    }

    h3 {
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.375rem;
        color: #FF8B20;
        margin: 0.5rem 0 0.75rem 0;
    }

    p {
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.375rem;
        margin-top: 0.5rem;
    }

    hr {
        color: #C4C4C4;
        width: 60px;
        height: 2px;
        margin: 0;
    }
`