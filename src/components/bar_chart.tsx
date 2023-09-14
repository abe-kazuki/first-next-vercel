'use client';
import {FC} from 'react';
import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import React, {useEffect, useRef} from 'react';
import { Nomikata, Nomikatas} from './../lib/getJsonPlaceholder';
import { pc, sp, tab } from '../../media';

const CellBase = styled.div`
margin: 10px 10px;
background: rgba(0, 0, 0, 0.2);
border: 1px solid #fff;
border-radius: 30px 30px 30px 30px;
${sp`
font-weight: 100;
`}
${tab`
font-weight: 300;
`}
${pc`
font-weight: 300;
`}
`

const BarChart= styled.div`
margin: 0 10px;
padding: 10px 0px;
${sp`
`}
${tab`
`}
${pc`
display: flex;
`}
`

const BarChartMain= styled.div`
margin: 0 10px;
${sp`
margin: 0 20px;
`}
${tab`
margin: 0 20px;
`}
display: flex;
`

const BarChartSub= styled.div`
margin: 0 20px;
display: flex;
`

const DrinkStyleP = styled.label`
margin: 0 10px;
color: #fff;
font-weight: 300;
inline-size: 100px;
`

const fadeIn = keyframes`
  from {
    width: 40%;
  }
  to {
    width: 100%;
  }
`;

const CustomCanvas = styled.canvas<{ duration: number}>`
animation: ${fadeIn} ${props => props.duration}s;
${sp`
width: 90%;
height: 100%;
`}
${tab`
width: 140%;
height: 100%;
`}
`


export type Props = {
    title: String;
    ratio: number;
  }

interface RadioProps {
    key: number
    item: String;
    value: String;
    disable: boolean
    handler: (event: any) => void;
  }

export const MyBarChartComp: FC<({list: Nomikatas, handle:(nomikatas_id: number) => void})> = (prop) => {
  const total_eval = prop.list.reduce((sum, item) => sum + item.eval, 0);
  const [disable, stDisable] = useState(false)
  const [total_evaluation, setToalEval] = useState(total_eval);

  const handleEval = (
    event: any
  ) => {
    stDisable(true)
    setToalEval(total_evaluation + 1)
  };

  return (
  <div>
      <CellBase>
        {
        prop.list?.map((nomikata: Nomikata, index: number) => (
          <BarCharts key={nomikata.nomikata_id} nomikata={nomikata} total_eval={total_evaluation} disable={disable} 
          handle={(nomikatas_id) =>
             {handleEval(nomikatas_id);}}
          />
        ))
        }
      </CellBase>
  </div>
  )
}

export const BarCharts: FC<({nomikata: Nomikata, total_eval: number, disable: boolean, handle:(nomikatas_id: number) => void})> = (prop) => {
  // 選択した値を管理（初期値：なし）
  const [val, setVal] = useState('');
  const [evaluation, setEval] = useState(prop.nomikata.eval);
  
  
  // ラジオボタンの値がチェンジされた時
  const handleUpdate = (
    event: any
  ) => {
    setVal(event)
    setEval(evaluation + 1)
    prop.handle(prop.nomikata.nomikata_id)
  };
  const ratio = Math.round((evaluation/prop.total_eval)*100)

  return (
    <div>
        <BarChart key={prop.nomikata.nomikata_id}>
          <BarChartSub key={prop.nomikata.nomikata_id}>
              <MySurvey key={prop.nomikata.nomikata_id} item={prop.nomikata.name} value={val} handler={handleUpdate} disable={prop.disable}/>
              <DrinkStyleP htmlFor={prop.nomikata.name}>{prop.nomikata.name}</DrinkStyleP>
          </BarChartSub>
          <BarChartMain>
            <MyBar title= {prop.nomikata.name} ratio={ratio}/>
            <DrinkStyleP htmlFor={String(prop.nomikata.eval)}>{String(ratio)+"%"}</DrinkStyleP>
          </BarChartMain>
        </BarChart>
    </div>
  )
}

export const MySurvey: FC<RadioProps> = (prop) => {
  const didMountRef = useRef(false);
  const item = String(prop.item)
  const value = String(prop.value)
  
  return (
    <div key={item}>
      <input
        id={item}
        type="radio"
        value={value}
        checked={item === value}
        disabled={prop.disable}
        onClick={(e) => {prop.handler(prop.item);}}
      />
    </div>
  )
}

export const MyBar: FC<Props> = (prop) => {
  const canvasRef = useRef(null);
  const ratio = prop.ratio
  const magnification: number = 6

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
  }, [ prop.ratio, ratio]);

  return (
    <div>
      <CustomCanvas ref={canvasRef} width={(ratio*magnification)} height={20} duration={2}/>
    </div>
  )    
}