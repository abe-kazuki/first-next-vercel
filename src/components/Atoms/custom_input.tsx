'use client';
import styled from 'styled-components';
import { pc, sp, tab } from '../../media';

export const CustomInput = styled.input`
  margin: 10px 10px;
  border: 1px solid #ccc; /* 枠線の色やスタイルを調整できます */
  padding: 8px; /* 適切なパディングを設定してください */
  box-sizing: border-box; /* ボックスモデルの計算を簡略化するために追加 */
  ${tab`
    width: 300px;
  `}
  ${pc`
    width: 300px;
  `}
`