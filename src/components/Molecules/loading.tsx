'use client';
import styled from 'styled-components';
import {FC} from 'react';
import Loading from 'react-loading';
import {Overlay} from './../Atoms/overlay'

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