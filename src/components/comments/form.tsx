'use client';
import {FC, useState, useEffect} from 'react';
import styled from 'styled-components';
import { pc, sp, tab } from '../../media';

// ボタンと入力欄
const SendButton = styled.button`
  margin: 10px 10px;
  padding: 8px 10px;
  background-color: #3b5998;
  color: #fff;
  border-radius: 4px;
  :hover {
    opacity: 0.8;
  }
`

const CommentInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    width: 70%;
    font-size: 16px;
`


export const CommentForm: FC = () => {
    return (
        <div>
            <CommentInput
                type="text"
                placeholder="コメントを追加..."
            />
            <SendButton type="submit">送信</SendButton>
        </div>
    )
}