import styled from 'styled-components';

export const VantagensContainer = styled.section`

    width: 100%;
    background-color: #FFEEDE;
    text-align: center;
`
export const SectionTitle = styled.h2`

    font-family: Quicksand;
    font-size: 2.625rem;
    font-weight: 700;
    margin-bottom: 3.375rem;
    padding-top: 5rem;
`
export const CardsContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    
    @media (min-width: 720px) {
        flex-flow: row nowrap;
        justify-content: space-evenly;
        gap: 1rem;
    }
`

export const VantagensCard = styled.div`
    text-align: center;
    width: 16.8rem;
    margin-bottom: 3rem;
    
    img {
        width: 200px;
        height: 200px;
    }
    h3 {
        font-size: 1.375rem;
        font-weight: 500;
        margin-top: 3rem;
    }

    h4 {
        font-size: 1rem;
        font-weight: 400;
        margin-top: 2rem;
        line-height: 1.5rem;
    }
`