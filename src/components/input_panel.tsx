'use client';
import NextImage from 'next/image';
import styled from 'styled-components';
import {FC, useState} from 'react';
import { nomikatas } from './../components/enums/nomikatas';
import { pc, sp, tab } from '../../media';

const ModalContent = styled.div`
background-color: #fff;
padding: 20px;
border-radius: 4px;
width: 50%;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
${pc`
width: 80%;
`}
overflow-x: auto; /* 縦方向のスクロールバーを表示 */
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
  margin: 10px 10px;
  ${tab`
    width: 300px;
  `}
  ${pc`
    width: 300px;
  `}
`

const CustomDiv = styled.div`
  margin: 10px 10px;
  ${tab`
    width: 300px;
  `}
  ${pc`
    width: 300px;
  `}
`

const ImageConm = styled.div`
  width: 300px;
  margin: 10px 10px;
  ${tab`
  display: flex;
  `}
  ${pc`
  display: flex; 
  `}
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
  handleImageSelect: (e: any) => void;
  osakeCategory: string
  file: string | null;  // toggleModal を受け取る
  thumbnail: string | null;  // 子コンポーネントを受け取る
};

export const InputPanel: FC<Props> = props => {
    console.log("Modalだよ")
    return (
      <ModalContent>
        <CustomForm onSubmit={props.handleSubmit}>
          <h3>お酒カテゴリ名</h3>
            <CustomDiv>{props.osakeCategory}</CustomDiv>
          <h3>銘柄名</h3>
            <CustomInput
              type="text"
              value={props.input_value}
              onChange={props.handleChange}
              placeholder="銘柄名を入力してください"
            />
          <h3>画像を選択してください</h3>
          <ImageConm>
            {props.thumbnail && <NextImage src={props.thumbnail} alt="サムネイル" width="150" height="150"/>}
            <CustomInput
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={props.handleImageSelect}
            />
          </ImageConm>
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