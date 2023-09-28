'use client';
import styled from 'styled-components';
import {FC, useState} from 'react';
import { Modal } from './../components/modal';
import { InputPanel } from './../components/input_panel';
import { LoadingComp } from './../components/loading';

import {reqMeigaras, PostRes} from '../lib/meigarasJsonPlaceholder';
import {reqMeigarasImage, ImagePostRes} from '../lib/meigara/imageJsonPlaceholder';
import {SuccessResult, FailResult} from './../../src/service/api';


const CreateButton = styled.button`
  margin: 10px 10px;
  padding: 8px 10px;
  background-color: #3b5998;
  color: #fff;
  :hover {
    opacity: 0.8;
  }
`

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex; /* 中央揃えを可能にする */
    justify-content: center;
    align-items: center;
`;

type Props = {
  category_id: number;
};

export const NewCreateButton: FC<Props> = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
    console.log(`toggleModalだよ`)
  };

  const handleChange = (e: any) => {
    console.log(e.target.key)
    setInputValue(e.target.value);

  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const selectedValues: string[] = Array.from(formData.getAll('nomikata')) as string[];
    const selectedValueIds = selectedValues.map(value => parseInt(value, 10))
    if (inputValue == "" || selectedValueIds.length == 0 || file == "") {
      alert(` 入力項目が不足しています`);
      return
    }
    setLoading(true);
    console.log(`選択した飲み方：${selectedValueIds}`)
    
    reqMeigaras.post(props.category_id, inputValue, selectedValueIds).then((res: SuccessResult<PostRes> | FailResult<PostRes>) => {
      const result: PostRes = (res as SuccessResult<PostRes> ).response.data
      if (result.status == 400) {
        alert(`${inputValue}の追加に失敗しました。${result.message}`);
        return
      }
      alert(` ${result.status} ${inputValue}を追加しました`);
      updateImage(result.meigara_id)
    }).catch((res: FailResult<PostRes>) =>{
      alert(` ${inputValue}の追加に失敗しました。`);
    }).finally(() => {
      setLoading(false); 
    })
    
    setInputValue('')
    toggleModal();
  };

  const handleImageSelect = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // サムネイルを生成
    console.log("サムネイルを生成")
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result != null && typeof event.target.result === 'string') {
          setThumbnail(event.target!.result);
        } else {
          setThumbnail("");
        }
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setThumbnail("");
    }
  }

  const updateImage = (nomikata_id: number) => {
    const formData = new FormData();
    formData.append('image', file);

    reqMeigarasImage.post(nomikata_id, formData)
    .then((res: SuccessResult<ImagePostRes> | FailResult<ImagePostRes>) => {
      const result: ImagePostRes = (res as SuccessResult<ImagePostRes> ).response.data
      if (result.status == 400) {
        alert(`画像の追加に失敗しました。${result.message}`);
        return
      }
      alert(`画像を追加しました`);
    }).catch((res: FailResult<PostRes>) =>{
      alert(`画像の追加に失敗しました。`);
    })
  }

  return (
    <div>
      <CreateButton onClick={toggleModal}>
        新規作成
      </CreateButton>
      {loading && <LoadingComp />}
      {isOpenModal && (
        <Modal close={toggleModal}>
          <Overlay>
            <InputPanel input_value={inputValue} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            handleCancel={toggleModal}
            handleImageSelect={handleImageSelect}
            file={file}
            thumbnail={thumbnail}
            />
          </Overlay>
        </Modal>
      )
      }
    </div>
  );
}