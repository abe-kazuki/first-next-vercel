'use client';
import {FC, useState, useEffect} from 'react';
import {CommentForm} from './../comments/form'
import {CommentContent} from './../comments/content'
import styled from 'styled-components';

const CommentBase = styled.div`
margin: 12px;
padding: 24px;
background: rgba(100, 100, 100, 0.1);
`

export const Comment: FC = () => {
    const myArray = [1, 2, 3, 4, 5];
    return(
        <CommentBase>
            {myArray.map((i) => (
                <CommentContent id={i} text={"テキスト"} date={new Date("Thu, 09 Nov 2023 14:20:31 GMT")} key={i} />
            ))}
            <CommentForm/>
        </CommentBase>
    )
}