'use client';
import {FC, useState, useEffect} from 'react';
import NextImage from 'next/image';
import styled from 'styled-components';
import { pc, sp, tab } from '../../media';
import {SubItem, Props as SubItemNecessary} from './../../components/sample_cell';
import { Comment } from './comment';
import {reqMeigaras, AlcoholDetails} from './../../lib/meigara/detailJsonPlaceholder';
import { SuccessResult, FailResult } from './../../service/api';

const ContainerBase = styled.div`
margin: 0 50px;
padding: 8px 14px;
${sp`
background: rgba(0, 0, 0, 0.2);
border-radius: 30px 30px 30px 30px;
`}
${tab`
background: rgba(0, 0, 0, 0.2);
border-radius: 30px 30px 30px 30px;
`}
`

const ContentBase = styled.div`
padding: 50px;
height:10;
font-weight: 300;
`

const ContentContainer = styled.div`
${pc`
display: flex;
`}
`

const ImageComp = styled(NextImage)`
margin: 0 5px;
padding: 5px 5px;
`

export type Props = {
  meigaraId: number;
}

export const Container: FC<Props> = (prop) => {
  const [detail, setDetail] = useState<AlcoholDetails>()

  useEffect(() => {
    const reqPostsResult = reqMeigaras.get(prop.meigaraId)
    reqPostsResult?.then(
        (res: SuccessResult<AlcoholDetails> | FailResult<AlcoholDetails>) => {
            const result: AlcoholDetails = (res as SuccessResult<AlcoholDetails> ).response.data
            setDetail(result)
        })
  }, []);

  return (
    <div>
      <ContainerBase>
        {detail ? (
          <p>
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
              viewsCount= {detail?.viewsCount || 0}
              imagePath= {detail?.imagePath || ""}
              nomikata= {detail?.nomikata || []}
            />
            <SubItem main={{
              title: "",
              imagePath: "",
              nomikatas: detail?.nomikata || [],
              meigaraId: prop.meigaraId,
              likeCount: detail?.likesCount || 0,
              commntCount: detail?.commentsCount || 0,
              viewCount: detail?.viewsCount || 0
             }}/>
          </p>
        ) : (
          <p>Loading...</p>
        )}
        <Comment meigara_id={prop.meigaraId}/>
      </ContainerBase>
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
    <ContentContainer>
      <ImageComp
        className="object-contain"
        src={prop?.imagePath || '/default-image-path'}
        alt='logo'
        width="300"
        height="300"
      />
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
    </ContentContainer>
  )
}