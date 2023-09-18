'use client';
import styled from 'styled-components';
import {FC, useState} from 'react';
import { nomikatas } from './../components/enums/nomikatas';

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

const CustomInput = styled.input`
  width: 300px;
  margin: 10px 10px;
`

const CheckboxGrid = styled.div`
  margin: 10px 10px;
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  grid-gap: 10px; /* グリッド間の間隔 */
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
          <h3>銘柄名</h3>
            <CustomInput
              type="text"
              value={props.input_value}
              onChange={props.handleChange}
              placeholder="銘柄名を入力してください"
            />
          <h3>画像を選択してください</h3>
            <CustomInput
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={function(){console.log("onChange={handleFileChange}")}}
            />
          <h3>合う飲み方を選択してください</h3>
            <CheckboxGrid>
              {
                nomikatas.map((nomikata, index) => (
                  <label key ={index} >
                    <input type="checkbox"  name="nomikata" value={index+1} /> 
                    {` ${index+1}：${nomikata}`}
                  </label>
                ))
              }
            </CheckboxGrid>
            <CloseButton type="submit">送信</CloseButton>
          <CloseButton type="reset" onClick={props.handleCancel}>閉じる</CloseButton>
        </CustomForm>
      </ModalContent>
    );
  };