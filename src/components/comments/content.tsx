'use client';
import {FC, useState, useEffect} from 'react';
import styled from 'styled-components';
import { pc, sp, tab } from '../../media';

const ContentContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DateComp = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const TextComp = styled.p`
  font-size: 14px;
  color: #555;
`;

export type Props = {
    id: number;
    text: String;
    date: Date;
  }
  
export const CommentContent: FC<Props> = (prop) => {
    

    return (
        <ContentContainer id={prop.id.toString()}>
            <DateComp>{prop.date.toLocaleString()}</DateComp>
            <TextComp>{prop.text}</TextComp>
        </ContentContainer>
    )
}