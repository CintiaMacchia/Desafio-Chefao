import styled from 'styled-components';

export const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    font-family: Poppins;
`

export const StyledContainer = styled.div`
    position: relative;
    align-self: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    background-color: #FFF;
    width: 16rem;
    margin: 1rem;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.03), 0px -1px 10px rgba(0, 0, 0, 0.03), 0px 8px 10px rgba(22, 22, 22, 0.05);
    border-radius: 20px;

    .icon {
        position: absolute;
        top: 54.5%;
        right: 8%;
    }
`

export const ImageContainer = styled.img`
    display: block;
    width: 256px;
    height: 250px;
    border-radius: 16px 16px 0 0;
`

export const DescriptionContainer = styled.div`
    justify-self: center;
    align-self: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    width: 13.063rem;

    .product__title {
        font-family: Poppins;
        font-size: 1rem;
        font-weight: 700;
        color: #161616;
        line-height: 24px;
        letter-spacing: 0.02em;
        margin-top: 1.5rem;
    }

    .product__condition {
        font-family: Poppins;
        font-size: 1rem;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 0.5rem;
    }

    .product__price {
        font-family: Poppins;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 30px;
        color: #353535;
        margin-bottom: 1.5rem;
    }
`