'use client';
import {FC} from 'react';
import { styled } from 'styled-components';
import { useState, useCallback, useReducer } from 'react';
import React, {useEffect, useRef} from 'react';

const CellBase = styled.div`
padding: 10px 10px;
background: rgba(0, 0, 0, 0.2);
color: #fff;
border: 1px solid #fff;
font-weight: 300;
border-radius: 30px 30px 30px 30px;
`

const BarChart= styled.div`
margin: 0 10px;
padding: 10px 5px;
display: flex;
`

const DrinkStyleP = styled.label`
  color: #fff;
  font-weight: 300;
`

export type Props = {
    title: String;
    eval: number;
    total_eval: number;
  }

interface RadioProps {
    item: String;
    value: String;
    handler: (event: any) => void;
  }

export const MyBarChartComp: FC<Props> = (prop) => {
  const magnification: number = 1000
  // useStateの()には初期値を設定する
  const items = ['アイテム１', 'アイテム２', 'アイテム３', 'その他'];
  const items_score = [0.2, 0.4, 0.15, 0.25];
  const isFirstRender = useRef(true);

  // 選択した値を管理（初期値：なし）
  const [val, setVal] = useState('');

  // ラジオボタンの値がチェンジされた時
  const handleUpdateUsername = (
    event: any
  ) => {
    setVal(event)
  };

  return (
  <div>
      <CellBase>
        {
        items.map((value) => (
          <BarChart key={value}>
            <MySurvey item={value} value={val} handler={handleUpdateUsername}/>
            <DrinkStyleP htmlFor={value}>{value}</DrinkStyleP>
            <MyBar title= {prop.title} eval= {items_score[0]*magnification} total_eval={10} />
          </BarChart>
        ))
        }
      </CellBase>
  </div>
  )
}

export const MySurvey: FC<RadioProps> = (prop) => {
  
  const item = String(prop.item)
  const value = String(prop.value)
  
  return (
    <div key={item}>
      <input
        id={item}
        type="radio"
        value={value}
        checked={item === value}
        onClick={(e) => prop.handler(item)}
      />
    </div>
  )
}

export const MyBar: FC<Props> = (prop) => {
  const canvasRef = useRef(null);

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;
    return canvas.getContext('2d');
  };

  useEffect(() => {
    const ctx = getContext();
    ctx.fillStyle = '#eb6b10'; // 矩形色
    ctx.lineWidth = 2; // 矩形線幅
    ctx.fillRect(0, 0, prop.eval, 100); // 矩形描画
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={prop.eval} height={20} />
    </div>
  )    
}