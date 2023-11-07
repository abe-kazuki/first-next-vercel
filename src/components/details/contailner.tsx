'use client';
import {FC} from 'react';
import NextImage from 'next/image';
import styled from 'styled-components';
import { pc, sp, tab } from '../../media';
import {SubItem} from './../../components/sample_cell';

const ContainerBase = styled.div`
margin: 0 50px;
padding: 8px 14px;
height:10;
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

const ContentBase = styled.div`
padding: 50px;
`

const ImageComp = styled(NextImage)`
margin: 0 5px;
padding: 5px 5px;
`

export type Props = {
  title: String;
}

export const Container: FC<Props> = (prop) => {
  return (
    <div>
      <ContainerBase>
        <ImageComp
          className="object-contain"
          src="https://storage.googleapis.com/sake-bucket/hakushuu.png"
          alt='logo'
          width="300"
          height="300"
          />
        <Content title= ""></Content>
      </ContainerBase>
      <SubItem title={"タイトル"} imagePath={""} nomikatas={[]} meigaraId={1}/>
    </div>
  );
}

const Title = styled.h2`
  font-size: 36px;
  color: #333;
  overflow-wrap: break-word;
`

const StyledLink = styled.a`
  color: #007bff; /* リンクのデフォルトの青色 */
  text-decoration: none; /* リンクの下線を除去 */

  &:hover {
    color: #ff4500; /* マウスを重ねたときの色（オレンジ色） */
  }
`;

export const Content: FC<Props> = (prop) => {
  return (
    <ContentBase>
            <div>カテゴリ</div>
            <Title>タイトル</Title>
            <div>値段</div>
            <div>原産地</div>
            <div>アルコール度数</div>
            <StyledLink href='https://www.figma.com/file/zh1uXEIb2gmOMIZElWoz9J/Untitled?type=design&node-id=0-1&mode=design&t=CxXntk05Gq2i9ExO-0'>販売サイトはこちら</StyledLink>
            <br/><br/>
            説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
    </ContentBase>
  )
}