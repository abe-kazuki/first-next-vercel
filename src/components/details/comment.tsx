'use client';
import {FC, useState, useEffect} from 'react';
import {CommentForm} from './../comments/form'
import {CommentContent} from './../comments/content'

export const Comment: FC = () => {
    const myArray = [1, 2, 3, 4, 5];
    return(
        <div>
            <div>
            {myArray.map((i) => (
                <CommentContent text={"テキスト"} date={new Date("Thu, 09 Nov 2023 14:20:31 GMT")} key={i} />
            ))}
            </div>
            <CommentForm/>
        </div>
    )
}