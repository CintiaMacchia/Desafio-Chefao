import styled from 'styled-components';

export const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    font-family: Poppins, sans-serif;
`

export const StyledContainer = styled.div`
    position: relative;
    align-self: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    background-color: #FFF;
    margin: 1rem;
    width: 16rem;
    height: 25.625rem;
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
    height: 246px;
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
    height: 100%;

    h4 {
        font-size: 1rem;
        font-weight: 600;
        color: #161616;
        line-height: 24px;
        letter-spacing: 0.02em;
    }

    h5 {
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 30px;
        color: #353535;
    }

    span {
        font-weight: 400;
        letter-spacing: 0.01em;
        margin-bottom: 0.5rem;
    }
`


// export const FavoriteIconStyled = styled(FavoriteIcon)`
//     position: absolute;
//     top: 0;
//     left: 0;
// `