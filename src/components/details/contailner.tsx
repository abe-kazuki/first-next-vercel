'use client';
import {FC, useState, useEffect} from 'react';
import { ItemImage } from '../Atoms/item_image';
import styled from 'styled-components';
import { pc, sp, tab } from '../../media';
import {SubItem, Props as SubItemNecessary} from './../../components/sample_cell';
import { Comment } from './comment';
import {reqMeigaras, AlcoholDetails, PatchRes} from './../../lib/meigara/detailJsonPlaceholder';
import { SuccessResult, FailResult } from './../../service/api';
import { useRouter, usePathname }from 'next/navigation'
import { LoadingComp } from '../Molecules/loading';
import { EditModel, Value } from './edits/edit_model'

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

const ContentBase = styled.p`
padding: 50px;
height:10;
font-weight: 300;
`

const ContentContainer = styled.div`
${pc`
display: flex;
`}
`

const CustomButton = styled.button`
  margin: 10px 10px;
  padding: 8px 10px;
  background-color: #3b5998;
  color: #fff;
  :hover {
    opacity: 0.8;
  }
`

export type Props = {
  meigaraId: number;
}

export const Container: FC<Props> = (prop) => {
  const [detail, setDetail] = useState<AlcoholDetails>()
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter()
  const pathname = usePathname() 

  useEffect(() => {
    const reqPostsResult = reqMeigaras.get(prop.meigaraId)
    reqPostsResult?.then(
        (res: SuccessResult<AlcoholDetails> | FailResult<AlcoholDetails>) => {
            const result: AlcoholDetails = (res as SuccessResult<AlcoholDetails> ).response.data
            setDetail(result)
        })
  }, []);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleEdit = (v: Value) => {
    const new_detail = {
      categoryId: detail?.categoryId || 0,
      categoryName: detail?.categoryName || "",
      meigaraId: detail?.meigaraId || 0,
      meigaraName: v.meigaraName|| "",
      region: v.region|| "",
      price: v.price|| 0,
      alcoholDegree: v.alcoholDegree|| 0,
      description: v.description|| "",
      officialUrl: v.officialUrl|| "",
      likesCount: detail?.likesCount || 0,
      viewsCount: detail?.viewsCount || 0,
      commentsCount: detail?.commentsCount || 0,
      imagePath: detail?.imagePath || "",
      nomikata: detail?.nomikata || [],
    }
    const reqPostsResult = reqMeigaras.patch(new_detail)
    reqPostsResult?.then(
        (res: SuccessResult<PatchRes> | FailResult<PatchRes>) => {
            //本当はpatchしたらdetail欲しい
            const result: PatchRes = (res as SuccessResult<PatchRes> ).response.data
            setDetail(new_detail)
            alert("更新完了しました")
        })
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div>
      <ContainerBase>
        {detail ? (
          <p>
            <CustomButton onClick={toggleModal}>
              編集
            </CustomButton> 
            {isOpenModal && 
              <EditModel
              toggleModal={toggleModal}
              handleEdit={handleEdit}
              meigaraName={detail?.meigaraName || ""}
              region={detail.region || ""}
              price={detail.price}
              alcoholDegree={detail.alcoholDegree}
              description={detail.description}
              officialUrl={detail.officialUrl}
              />
            }
            {loading && <LoadingComp />}
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
      <ItemImage
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
              <div>生産国：{prop.region}</div>
              <div>アルコール度数：{prop.alcoholDegree}%</div>
              <StyledLink href={prop.officialUrl}>販売サイトはこちら</StyledLink>
              <br/><br/>
              {prop.description}
      </ContentBase>
    </ContentContainer>
  )
}