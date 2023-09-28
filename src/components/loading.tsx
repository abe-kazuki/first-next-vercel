'use client';
import styled from 'styled-components';
import {FC} from 'react';
import Loading from 'react-loading';

const Overlay = styled.div`
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

const Base = styled.div`
color: #fff;
`

type Props = {
  };

export const LoadingComp: FC<Props> = (props) => {
    return (
    <Overlay>
        <Base >送信中です</Base>
        <Loading type="spin" color="#007bff" height={50} width={50}/>
    </Overlay>
    )
}