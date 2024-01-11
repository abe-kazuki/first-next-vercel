'use client';
import NextImage from 'next/image';
import styled from 'styled-components';
import {FC, useState} from 'react';
import {CustomButton} from './../../Atoms/custom_button';
import {WideTextArea}  from './../../Atoms/wide_textarea';
import {CustomInput}  from './../../Atoms/custom_input';
import {useEditItem}  from './../../../hooks/useEditItem';
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
  handleCancel: (e: any) => void;
  meigaraName: string;
  region: string;
  price: number;
  alcoholDegree: number;
  description: string;
  officialUrl: string;
};

type EditValue = {

};

export const EditPanel: FC<Props> = props => {
  const { state, updateMeigaraName, updateRegion, updatePrice, updateAlcoholDegree, updateOfficialUrl, updateDescription } = useEditItem({
    meigaraName:props.meigaraName,
    region: props.region,
    price: props.price,
    alcoholDegree: props.alcoholDegree,
    description: props.description,
    officialUrl: props.officialUrl
  });

    return (
      <ModalContent>
        <CustomForm onSubmit={()=>props.handleSubmit(state)}>
          <h3>銘柄名</h3>
            <CustomInput
              type="text"
              value={state.meigaraName}
              onChange={(e) => updateMeigaraName(e.target.value)}
              placeholder="銘柄名を入力してください"
            />
          <h3>価格</h3>
            <CustomInput
              type="text"
              value={state.price}
              onChange={(e) => updatePrice(parseFloat(e.target.value))}
              placeholder="価格を入力してください"
            />円
          <h3>生産国</h3>
            <CustomInput
              type="text"
              value={state.region}
              onChange={(e) => updateRegion(e.target.value)}
              placeholder="生産国を入力してください"
            />円
          <h3>アルコール度数</h3>
            <CustomInput
              type="text"
              value={state.alcoholDegree}
              onChange={(e) => updateAlcoholDegree(parseFloat(e.target.value))}
              placeholder="アルコール度数を入力してください"
            />％
          <h3>販売サイトリンク</h3>
            <WideTextArea
              value={state.officialUrl}
              onChange={(e) => updateOfficialUrl(e.target.value)}
              placeholder="リンクを入力してください"
            />
          <h3>説明文</h3>
          <WideTextArea
              rows={4}
              value={state.description}
              onChange={(e) => updateDescription(e.target.value)}
              placeholder="説明文を入力してください"
          />
          <CustomButton type="submit">送信</CustomButton>
          <CustomButton type="reset" onClick={props.handleCancel}>閉じる</CustomButton>
        </CustomForm>
      </ModalContent>
    );
  };