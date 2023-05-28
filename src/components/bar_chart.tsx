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
//, handler:((nomikatas_id: number) => void)
export const MyBarChartComp: FC<({list: Nomikatas, handle:(nomikatas_id: number) => void})> = (prop) => {
  const total_eval = prop.list.reduce((sum, item) => sum + item.eval, 0);

  return (
  <div>
      <CellBase>
        {
        prop.list?.map((nomikata: Nomikata, index: number) => (
          <BarCharts key={nomikata.nomikata_id} nomikata={nomikata} total_eval={total_eval} handle={(nomikatas_id) => prop.handle(nomikatas_id)}/>
        ))
        }
      </CellBase>
  </div>
  )
}

export const BarCharts: FC<({nomikata: Nomikata, total_eval: number, handle:(nomikatas_id: number) => void})> = (prop) => {
  // 選択した値を管理（初期値：なし）
  const [val, setVal] = useState('');
  const [evaluation, setEval] = useState(prop.nomikata.eval);
  const [total_evaluation, setToalEval] = useState(prop.total_eval);
  
  
  // ラジオボタンの値がチェンジされた時
  const handleUpdate = (
    event: any
  ) => {
    setVal(event)
    setEval(evaluation + 1)
    setToalEval(total_evaluation + 1)
    prop.handle(prop.nomikata.nomikata_id)
  };

  return (
    <div>
        <BarChart key={prop.nomikata.nomikata_id}>
            <MySurvey key={prop.nomikata.nomikata_id} item={prop.nomikata.name} value={val} eval={prop.nomikata.eval} handler={handleUpdate}/>
            <DrinkStyleP htmlFor={prop.nomikata.name}>{prop.nomikata.name}</DrinkStyleP>
            <MyBar title= {prop.nomikata.name} eval={evaluation} total_eval={total_evaluation} />
            <DrinkStyleP htmlFor={String(prop.nomikata.eval)}>{String(evaluation)}</DrinkStyleP>
        </BarChart>
    </div>
  )
}

export const MySurvey: FC<RadioProps> = (prop) => {
  const didMountRef = useRef(false);
  const item = String(prop.item)
  const value = String(prop.value)
  
  return (
    <div key={prop.eval}>
      <input
        id={item}
        type="radio"
        value={value}
        checked={item === value}
        onClick={(e) => {prop.handler(prop.item);}}
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
  }, [prop.eval, ratio]);

  return (
    <div>
      <canvas ref={canvasRef} width={ratio*magnification} height={20} />
    </div>
  )    
}