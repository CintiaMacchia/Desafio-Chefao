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
        height: 80vh;
    }
`

export const HeroTextContainer = styled.div`
    background-color: #FFEEDE;
    width: 100%;
    height: 60%;
    padding: 2rem;
    color: #161616;
    

    .hero-h1 {
        font-family: 'Quicksand', sans-serif;
        font-size: 2rem;
        font-weight: 700;
        line-height: 70px;
        margin-bottom: 1.5rem;
        width: 90%;
        max-width: 46.063rem;
    }

    .hero-h3 {
        font-family: Poppins;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
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
        padding: 5rem;
        width: 50%;


        .hero-h1 {
            font-size: 2.3rem;
        }
    }

    @media (min-width: 1100px) {
        padding: 5rem;
        width: 51%;


        .hero-h1 {
            font-size: 3.5rem;
        }
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
        width: 49%;   
    }
`