import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding-top: 3.375rem;
    gap: 2rem;

    @media (min-width: 720px) {
        flex-flow: row wrap;
    }
`