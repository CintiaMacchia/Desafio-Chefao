import styled from "styled-components";
import LeftArrow from '../assets/images/Left.svg';

export const Container = styled.div`
    max-width: 1280px;
    padding: 2rem 2rem;
    border: 1px solid black;

    .swiper-button-prev,
    .swiper-button-next {
        color: #FF8B20;
    }

    .swiper-button-prev {
        left: 0;
    }

    .swiper-button-next {
        right: 0;
    }
`