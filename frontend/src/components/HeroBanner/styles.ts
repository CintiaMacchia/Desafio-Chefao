import styled from 'styled-components';
import HeroImage from '../assets/images/hero.png';

export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background-color: #FFEEDE;

    @media (min-width: 650px) {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 1100px) {
        height: 75vh;
    }
`

export const HeroTextContainer = styled.div`
    background-color: #FFEEDE;
    width: 100%;
    height: 60%;
    padding: 2rem;
    font-family: 'Quicksand', sans-serif;
    color: #161616;

    h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    h3 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    @media (min-width: 395px) {
        padding-top: 3rem;
    }

    @media (min-width: 540px) {
        padding: 4rem;
    }
    
    @media (min-width: 650px) {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        padding: 4rem;
        width: 50%;
        height: 100%;

        h1 {
            font-size: 2.3rem;
        }
    }

    @media (min-width: 1100px) {
        padding: 5rem;
        width: 47%;
        max-width: 700px;

        h1 {
            font-size: 3.5rem;
        }
    }

    @media (min-width: 1441px) {
        max-width: 700px;
    }
`

export const HeroImageContainer = styled.div`
    background: url(${HeroImage}) center no-repeat;
    background-size: cover;
    height: 40%;
    width: 100%;

    @media (min-width: 650px) {
        width: 50%;
        height: 100%;
    }

    @media (min-width: 1100px) {
        width: 53%;   
    }

    @media (min-width: 1441px) {
        max-width: 800px;
    }
`