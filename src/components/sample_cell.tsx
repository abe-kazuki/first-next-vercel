'use client';
import {FC} from 'react';
import NextImage from 'next/image';
import styled, {keyframes} from 'styled-components';
import { MyBarChartComp } from './../components/bar_chart';
import { Nomikatas, reqAlcohols, PatchRes} from '../lib/alcoholaJsonPlaceholder';
import {SuccessResult, FailResult} from './../../src/service/api';
import { pc, sp, tab } from '../../media';

const CellBase = styled.div`
margin: 0 50px;
padding: 8px 14px;
height:10;
background: rgba(0, 0, 0, 0.2);
color: #fff;
border: 1px solid #fff;
font-weight: 300;
border-radius: 30px 30px 30px 30px;
${sp`
`}
${tab`
display: flex;
`}
${pc`
display: flex; 
`}
`

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  inline-size: 200px;
  overflow-wrap: break-word;
  text-align: center
`
const Date = styled.div`
  font-weight: 300;
  margin: 6px 0;
  color: rgba(0, 0, 0, 1)
`
const Description = styled.p`
  color: #fff;
  font-weight: 300;
`

const ImageComp = styled(NextImage)`
margin: 0 5px;
padding: 5px 5px;
`

const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 10px;
  background: rgba(155, 155, 155, 0.2);
  cursor: pointer;
  border: 1px solid #fff;
  :hover {
    opacity: 0.8;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
`;
export const FadeIn = styled.div<{ duration: number }>`
  animation: ${fadeIn} ${props => props.duration}s;
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export type Props = {
    title: String;
    imagePath: string;
    nomikatas: Nomikatas
    meigaraId: number
    likeCount: number
    commntCount: number
    viewCount: number
  }

export type SubProps = {
    main: Props
  }

export const SampleCard: FC<Props> = (prop) => {
    return (
      <div style={{ background: '#fff'}}>
        <CellBase>
            <MailItem 
              title={prop.title}
              imagePath={prop.imagePath}
              nomikatas={prop.nomikatas}
              meigaraId={prop.meigaraId}
              likeCount={prop.likeCount}
              commntCount={prop.commntCount}
              viewCount={prop.viewCount}
            />
            <SubItem main={prop}/>
        </CellBase>
      </div>
    );
  }

export const MailItem: FC<Props> = (prop) => {
    const handleClick = () => {
      window.location.href = `/${prop.meigaraId}`;
    };

    return (
        <div>
            <Title onClick={handleClick}>{prop.title}</Title>
            <ImageComp
                    className="object-contain"
                    src={prop.imagePath}
                    alt='logo'
                    width="200"
                    height="250"
                    onClick={handleClick}
                    />
        </div>
    );
}

export const SubItem: FC<SubProps> = (prop) => {
    return (
        <div>
            <ActionButton onClick={function(){alert(prop.main.nomikatas.length);}}>{prop.main.commntCount} Comments</ActionButton>
            <ActionButton>{prop.main.likeCount} Likes</ActionButton>
            <ActionButton>{prop.main.viewCount} Views</ActionButton>
            <MyBarChartComp list={prop.main.nomikatas} handle={async (nomikatas_id: number)  => {
              await reqAlcohols.patch(prop.main.meigaraId, nomikatas_id).
              then((res: SuccessResult<PatchRes> | FailResult<PatchRes>) => {alert(`${prop.main.nomikatas[nomikatas_id - 1].name}に1票投票しました！`)})
            }}/>
      </div>
    );
}