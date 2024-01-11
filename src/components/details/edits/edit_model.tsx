'use client';
import styled from 'styled-components';
import {FC, useState} from 'react';
import { Modal } from '../../Organisms/modal';
import { EditPanel } from './edit_panel';
import { Overlay } from '../../Atoms/overlay';

type Props = {
    toggleModal: (e: any) => void;
    meigaraName: string;
    region: string;
    price: number;
    alcoholDegree: number;
    description: string;
    officialUrl: string;
  };

type Value = {
    meigaraName: string;
    region: string;
    price: number;
    alcoholDegree: number;
    description: string;
    officialUrl: string;
  };

export const EditModel: FC<Props> = (props) => {
    const handleSubmit = (e: Value) => {
        alert(e.description)
      }
    return (
        <div>
            <Modal close={props.toggleModal}>
                <Overlay>
                <EditPanel 
                  handleSubmit={handleSubmit}
                  handleCancel={props.toggleModal}
                  meigaraName={props.meigaraName}
                  region={props.region}
                  price={props.price}
                  alcoholDegree={props.alcoholDegree}
                  description={props.description}
                  officialUrl={props.officialUrl}
                />
                </Overlay>
            </Modal>
        </div>
    )
}
