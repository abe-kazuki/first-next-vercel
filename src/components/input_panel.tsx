'use client';
import styled from 'styled-components';
import {FC, useState} from 'react';

const ModalContent = styled.div`
background-color: #fff;
padding: 20px;
border-radius: 4px;
width: 50%;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const CustomForm = styled.form`
`

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
  handleCancel: (e: any) => void;
};

export const InputPanel: FC<Props> = props => {
    console.log("Modalだよ")
    return (
      <ModalContent>
        <CustomForm onSubmit={props.handleSubmit}>
          <input
            type="text"
            value={props.input_value}
            onChange={props.handleChange}
            placeholder="銘柄名を入力してください"
          />
          <CloseButton type="submit">送信</CloseButton>
          <CloseButton type="reset" onClick={props.handleCancel}>Close</CloseButton>
        </CustomForm>
      </ModalContent>
    );
  };