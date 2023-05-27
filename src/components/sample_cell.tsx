'use client';
import {FC} from 'react';
import NextImage from 'next/image';
import { styled } from 'styled-components';
import { MyBarChartComp } from './../components/bar_chart';

const CellBase = styled.div`
margin: 0 50px;
padding: 8px 14px;
height:10;
background: rgba(0, 0, 0, 0.2);
color: #fff;
border: 1px solid #fff;
font-weight: 300;
border-radius: 30px 30px 30px 30px;
display: flex; 
`

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  inline-size: 150px;
  overflow-wrap: break-word;
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

export type Props = {
    title: String;
    body: String;
  }

export const SampleCard: FC<Props> = (prop) => {
    return (
      <div style={{ background: '#fff'}}>
        <CellBase>
            <MailItem title={prop.title} body={prop.body}/>
            <SubItem title={prop.title} body={prop.body}/>
        </CellBase>
      </div>
    );
  }

export const MailItem: FC<Props> = (prop) => {
    return (
        <div>
            <Date>3/2/2019</Date>
            <Title>{prop.title}</Title>
            <ImageComp
                    className="object-contain"
                    src='data:image/png;base64,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'
                    alt='logo'
                    width="100"
                    height="150"
                    />
        </div>
    );
}

export const SubItem: FC<Props> = (prop) => {
    return (
        <div>
            <ActionButton onClick={function(){alert("123");}}>0 Comments</ActionButton>
            <ActionButton>0 Likes</ActionButton>
            <ActionButton>0 Views</ActionButton>
            <MyBarChartComp title={prop.title}/>
      </div>
    );
}