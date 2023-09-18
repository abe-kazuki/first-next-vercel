'use client';
import styled from 'styled-components';
import {FC, useState} from 'react';

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 画面の高さいっぱいに */
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const CloseButton = styled.button`
  margin: 10px 10px;
  padding: 8px 10px;
  background-color: #3b5998;
  color: #fff;
  :hover {
    opacity: 0.8;
  }
`

type Props = {
  input_value: string;  // toggleModal を受け取る
  handleSubmit: (e: any) => void;  // 子コンポーネントを受け取る
  handleChange: (e: any) => void; 
};

export const InputPanel: FC<Props> = props => {
    console.log("Modalだよ")
    return (
      <ModalContent>
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            value={props.input_value}
            onChange={props.handleChange}
            placeholder="銘柄名を入力してください"
          />
          <CloseButton type="submit">送信</CloseButton>
          <CloseButton type="reset" onClick={close}>Close</CloseButton>
        </form>
      </ModalContent>
    );
  };