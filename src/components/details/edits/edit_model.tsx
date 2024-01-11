'use client';
import styled from 'styled-components';
import {FC, useState} from 'react';
import { Modal } from '../../Organisms/modal';
import { InputPanel } from './edit_panel';
import { Overlay } from '../../Atoms/overlay';

type Props = {
    toggleModal: (e: any) => void;
    categoryName: string;
    meigaraId: number;
    meigaraName: string;
    region: string;
    price: number;
    alcoholDegree: number;
    description: string;
    officialUrl: string;
  };

export const EditModel: FC<Props> = (props) => {
    return (
        <div>
            <Modal close={props.toggleModal}>
                <Overlay>
                <InputPanel input_value={inputValue} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                handleCancel={toggleModal}
                handleImageSelect={handleImageSelect}
                file={file}
                thumbnail={thumbnail}
                osakeCategory={props.category_name}
                />
                </Overlay>
            </Modal>
        </div>
    )
}
