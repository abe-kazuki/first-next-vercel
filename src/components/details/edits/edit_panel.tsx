'use client';
import NextImage from 'next/image';
import styled from 'styled-components';
import {FC, useState} from 'react';
import {CloseButton} from './../../Atoms/custom_button';
import {WideTextArea}  from './../../Atoms/wide_textarea';
import {CustomInput}  from './../../Atoms/custom_input';
import { pc, sp, tab } from '../../../media';

const ModalContent = styled.div`
background-color: #fff;
padding: 20px;
border-radius: 4px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
${pc`
width: 80%;
`}
${tab`
max-height: 600px; /* 適切な高さに調整してください */
width: 70%;
`}
${sp`
max-height: 600px; /* 適切な高さに調整してください */
width: 80%;
`}
/* スクロール可能にするためのスタイル */
overflow-y: auto; /* 縦方向のスクロールバーを表示 */
`;

const CustomForm = styled.form`
`

type Props = {
  handleSubmit: (e: any) => void;
  handleChange: (e: any) => void;
  handleCancel: (e: any) => void;
  meigaraName: string;
  region: string;
  price: number;
  alcoholDegree: number;
  description: string;
  officialUrl: string;
};

export const EditPanel: FC<Props> = props => {
    console.log("Modalだよ")
    return (
      <ModalContent>
        <CustomForm onSubmit={props.handleSubmit}>
          <h3>銘柄名</h3>
            <CustomInput
              type="text"
              value={props.meigaraName}
              onChange={props.handleChange}
              placeholder="銘柄名を入力してください"
            />
          <h3>価格</h3>
            <CustomInput
              type="text"
              value={props.price}
              onChange={props.handleChange}
              placeholder="価格を入力してください"
            />円
          <h3>生産国</h3>
            <CustomInput
              type="text"
              value={props.region}
              onChange={props.handleChange}
              placeholder="生産国を入力してください"
            />円
          <h3>アルコール度数</h3>
            <CustomInput
              type="text"
              value={props.alcoholDegree}
              onChange={props.handleChange}
              placeholder="アルコール度数を入力してください"
            />％
          <h3>販売サイトリンク</h3>
            <WideTextArea
              value={props.officialUrl}
              onChange={props.handleChange}
              placeholder="リンクを入力してください"
            />
          <h3>説明文</h3>
          <WideTextArea
              rows={4}
              value={props.description}
              onChange={props.handleChange}
              placeholder="リンクを入力してください"
          />
          <CloseButton type="submit">送信</CloseButton>
          <CloseButton type="reset" onClick={props.handleCancel}>閉じる</CloseButton>
        </CustomForm>
      </ModalContent>
    );
  };