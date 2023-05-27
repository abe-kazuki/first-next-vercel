'use client';
import {FC} from 'react';
import { styled } from 'styled-components';
import { useState } from 'react';
import React, {useEffect, useRef} from 'react';

const CellBase = styled.div`
margin: 0 50px;
width:10;
height:10;
background: rgba(0, 0, 0, 0.2);
color: #fff;
border: 1px solid #fff;
font-weight: 300;
border-radius: 30px 30px 30px 30px;
`

const BarChart= styled.div`
margin: 0 50px;
padding: 10px 10px;
display: flex;
`

const DrinkStyleP = styled.p`
  color: #fff;
  font-weight: 300;
`

export type Props = {
    title: String;
  }

export const MyBarChartComp = () => {
  return (
  <div>
      <CellBase>
        <BarChart><DrinkStyleP>飲み方</DrinkStyleP><MySurvey title={"タイトル"}/><MyBar/></BarChart>
        <BarChart><DrinkStyleP>飲み方</DrinkStyleP><MySurvey title={"タイトル"}/><MyBar/></BarChart>
        <BarChart><DrinkStyleP>飲み方</DrinkStyleP><MySurvey title={"タイトル"}/><MyBar/></BarChart>
        <BarChart><DrinkStyleP>飲み方</DrinkStyleP><MySurvey title={"タイトル"}/><MyBar/></BarChart>
      </CellBase>
  </div>
  )
}

export const MySurvey: FC<Props> = (prop) => {
      // useStateの()には初期値を設定する
  let arr = useState(0);
  // (2) [0, ƒ] 配列の0番目は参照用の値、1番目は更新用の関数
  const handler = (e: EventListener) => {
    const setFn = arr[1];
    //setFn(e.target.value);
  }
    return (
            <input
                type="radio"
                name="dark"
                onChange={handler}/>

    )
}

export const MyBar = () => {
  const canvasRef = useRef(null);

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;
    return canvas.getContext('2d');
  };

  useEffect(() => {
    const ctx = getContext();
    ctx.fillStyle = '#eb6b10'; // 矩形色
    ctx.lineWidth = 2; // 矩形線幅
    ctx.fillRect(0, 0, 100, 200); // 矩形描画
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={200} height={20} />
    </div>
  )
    
    
  }