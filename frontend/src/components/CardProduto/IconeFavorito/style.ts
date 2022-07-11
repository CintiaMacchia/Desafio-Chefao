import styled from 'styled-components';

export const CircleContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    width: 2.75rem;
    height: 2.75rem;
    border: 1px solid #C6C6C6;
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
        width: 1.2rem;
    }

    path {
        stroke-dashoffset: 0;
        stroke-dasharray: 1550;
    }
`
