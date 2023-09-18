'use client';
import styled from 'styled-components';
import {FC, useState} from 'react';
import { Modal } from './../components/modal';
import { InputPanel } from './../components/input_panel';

import {reqMeigaras, PostRes} from './../lib/meigarasJson';
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
`;

export const NewCreateButton: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
    console.log(`toggleModalだよ`)
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // 入力値を使用して何らかの処理を行う
    alert(`入力された値: ${inputValue}`);
    reqMeigaras.post(1, inputValue, [1,2]).then((res: SuccessResult<PostRes> | FailResult<PostRes>) => {
      const result: PostRes = (res as SuccessResult<PostRes> ).response.data
      alert(` ${result.status} + ${inputValue}を追加しました`);
    }).catch((res: FailResult<PostRes>) =>{
      alert(` ${inputValue}の追加に失敗しました`);
    })
    setInputValue('')
    toggleModal();
  };

  return (
    <div>
      <CreateButton onClick={toggleModal}>
        新規作成
      </CreateButton>
      {isOpenModal && (
        <Modal close={toggleModal}>
          <Overlay>
            <InputPanel input_value={inputValue} handleChange={handleChange} handleSubmit={handleSubmit}/>
          </Overlay>
        </Modal>
      )
      }
    </div>
  );
}