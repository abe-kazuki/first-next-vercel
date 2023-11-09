'use client';
import {FC, useState, useEffect} from 'react';
import styled from 'styled-components';
import { pc, sp, tab } from '../../media';

export type Props = {
    text: String;
    date: Date;
  }

export const CommentContent: FC<Props> = (prop) => {
    return (
        <div>
            <div>時刻</div>
            <div>コメント</div>
        </div>
    )
}