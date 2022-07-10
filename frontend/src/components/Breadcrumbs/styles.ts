import styled from 'styled-components';

export const StyledBar = styled.div`
    width: 100%;
    height: 3.5rem;
    display: flex;
    flex-flow: row nowrap;
    align-content: center;
    justify-content: center;
    background-color: #FFEEDE;

`

export const StyledText = styled.div`
    width: 100%;
    max-width: 1440px;
    align-self: center;
    display: flex;
    align-content: center;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(53, 53, 53, 0.7);
    padding-left: 5rem;

    .highlight {
        color: #353535;
    }

    p {
        padding: 0;
        margin: 0;
    }
`