'use client';
import {FC} from 'react';
import { styled } from 'styled-components';
import { useState, useCallback, useReducer } from 'react';
import React, {useEffect, useRef} from 'react';
import { Nomikata, Nomikatas} from './../lib/getJsonPlaceholder';

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

const radioStyle= styled.div`
margin: 0 10px;
padding: 10px 5px;
display: flex;
`

const DrinkStyleP = styled.label`
  margin: 0 10px;
  color: #fff;
  font-weight: 300;
  inline-size: 100px;
  overflow-wrap: break-word;
`

const Blank = styled.canvas`
width: 10%
`

export type Props = {
    title: String;
    eval: number;
    total_eval: number;
  }

interface RadioProps {
    key: number
    item: String;
    value: String;
    eval: number;
    handler: (event: any) => void;
  }

export const MyBarChartComp: FC<({list: Nomikatas})> = (prop) => {
  const total_eval = prop.list.reduce((sum, item) => sum + item.eval, 0);

  // 選択した値を管理（初期値：なし）
  const [val, setVal] = useState('');
  const [childArray, setKeyToRerender] = useState(prop.list?.map((nomikata: Nomikata) => (nomikata.nomikata_id)));
  
  // ラジオボタンの値がチェンジされた時
  const handleUpdate = (
    event: any
  ) => {
    setVal(event)
    setKeyToRerender(nomikata_id)
  };

  return (
  <div>
      <CellBase>
        {
        prop.list?.map((nomikata: Nomikata) => (
          <BarChart key={nomikata.nomikata_id}>
            <MySurvey key={nomikata.nomikata_id} item={nomikata.name} value={val} eval={nomikata.eval} handler={handleUpdate}/>
            <DrinkStyleP htmlFor={nomikata.name}>{nomikata.name}</DrinkStyleP>
            <MyBar title= {nomikata.name} eval= {nomikata.eval} total_eval={total_eval} />
          </BarChart>
        ))
        }
      </CellBase>
  </div>
  )
}

export const MySurvey: FC<RadioProps> = (prop) => {
  const didMountRef = useRef(false);
  const item = String(prop.item)
  const value = String(prop.value)
  const [evalation, setVal] = useState(prop.eval);
  

  const handle = () => {
    setVal(evalation+1)
    alert(`阿部：後${evalation}`);
  };
  
  return (
    <div key={item}>
      <input
        id={item}
        type="radio"
        value={value}
        checked={item === value}
        onClick={(e) => {prop.handler(item); handle();}}
      />
    </div>
  )
}

export const MyBar: FC<Props> = (prop) => {
  const canvasRef = useRef(null);
  const ratio = prop.eval/prop.total_eval
  const magnification: number = 1000

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;
    return canvas.getContext('2d');
  };

  useEffect(() => {
    const ctx = getContext();
    ctx.fillStyle = '#eb6b10'; // 矩形色
    ctx.lineWidth = 2; // 矩形線幅
    ctx.fillText(`${ratio * 100}%`, 100, 100);
    ctx.fillRect(0, 0, ratio*magnification, 100); // 矩形描画
  }, [prop.eval]);

  return (
    <div>
      <canvas ref={canvasRef} width={ratio*magnification} height={20} />
    </div>
  )    
}