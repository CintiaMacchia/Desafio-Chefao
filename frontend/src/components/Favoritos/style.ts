import styled from 'styled-components';

export const CircleContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    border: 1px solid #C6C6C6;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
`
export const SvgContainer = styled.div `
    display: flex;
    align-content: center;
    justify-content: center;
    fill: transparent;
    stroke: #000;
    stroke-width: 60;
    cursor: pointer;
    position: relative;

    svg {
        overflow: visible;
        width: 1rem;
    }

    path {
        stroke-dashoffset: 0;
        stroke-dasharray: 1550;
    }
`


/* .heart-background {
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    stroke: none;
}

.heart-main:hover ~ .heart-background path {
    animation: fade-animation 2s ease-in-out forwards;
}

@keyframes fade-animation {
    10% {
        fill: transparent;
        transform: scale(1);
    }
    20% {
        fill: red;
        transform: scale(1.1);
        opacity: 1;
    }
    30% {
        opacity: 1;
    }
    40% {
        transform: scale(2.5);
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
} */

