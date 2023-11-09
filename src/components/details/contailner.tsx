'use client';
import {FC, useState, useEffect} from 'react';
import NextImage from 'next/image';
import styled from 'styled-components';
import { pc, sp, tab } from '../../media';
import {SubItem, Props as SubItemNecessary} from './../../components/sample_cell';
import {reqMeigaras, AlcoholDetails} from './../../lib/meigara/detailJsonPlaceholder';
import { SuccessResult, FailResult } from './../../service/api';

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
  const [detail, setDetail] = useState<AlcoholDetails>()

  useEffect(() => {
    const reqPostsResult = reqMeigaras.get(1)
    reqPostsResult?.then(
        (res: SuccessResult<AlcoholDetails> | FailResult<AlcoholDetails>) => {
            const result: AlcoholDetails = (res as SuccessResult<AlcoholDetails> ).response.data
            setDetail(result)
        })
  }, []);

  return (
    <div>
      <ContainerBase>
        <ImageComp
          className="object-contain"
          src={detail?.imagePath || '/default-image-path'}
          alt='logo'
          width="300"
          height="300"
          />
        <Content
            categoryId= {detail?.categoryId || 0}
            categoryName= {detail?.categoryName || ""}
            meigaraId= {detail?.meigaraId || 0}
            meigaraName= {detail?.meigaraName || ""}
            region= {detail?.region || ""}
            price= {detail?.price || 0}
            alcoholDegree= {detail?.alcoholDegree || 0}
            description= {detail?.description || ""}
            officialUrl= {detail?.officialUrl || ""}
            likesCount= {detail?.likesCount || 0}
            commentsCount= {detail?.commentsCount || 0}
            imagePath= {detail?.imagePath || ""}
            nomikata= {detail?.nomikata || []}
        />
      </ContainerBase>
      <SubItem main={{title: "", imagePath: "", nomikatas: [], meigaraId: 0}} likeCount= {detail?.likesCount || 0} commntCount = {detail?.commentsCount || 0} viewCount= {0}/>
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

export const Content: FC<AlcoholDetails> = (prop) => {
  return (
    <ContentBase>
            <div>{prop.categoryName}</div>
            <Title>{prop.meigaraName}</Title>
            <div>価格：{prop.price}円</div>
            <div>生産国{prop.region}</div>
            <div>アルコール度数：{prop.alcoholDegree}%</div>
            <StyledLink href={prop.officialUrl}>販売サイトはこちら</StyledLink>
            <br/><br/>
            {prop.description}
    </ContentBase>
  )
}