'use client';
import styled from 'styled-components';

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex; /* 中央揃えを可能にする */
    justify-content: center;
    align-items: center;
`;