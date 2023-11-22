'use client';
import {FC, useState, useEffect} from 'react';
import {CommentForm} from './../comments/form'
import {CommentContent} from './../comments/content'
import styled from 'styled-components';
import {Comments, reqCommentsGet} from '../../lib/meigara/commentJsonPlaceholder';
import {FailResult, SuccessResult} from "~/src/service/api";

const CommentBase = styled.div`
margin: 12px;
padding: 24px;
background: rgba(100, 100, 100, 0.1);
`

export type Props = {
    meigara_id: number;
}

export const CommentComp: FC<Props> = (prop: Props) => {
    const [comments, setComments] = useState<Comments>({comments: []})
    useEffect(() => {
        const reqPostsResult = reqCommentsGet.get(prop.meigara_id)
        reqPostsResult?.then(
            (res: SuccessResult<Comments> | FailResult<Comments>) => {
                const result: Comments = (res as SuccessResult<Comments> ).response.data
                setComments(result)
            })
    }, []);

    return (
        <CommentBase>
            {comments.comments?.map(({date, text}, index) =>
                (
                    <CommentContent id={index} text={text} date={new Date(date)} key={index}/>
                ))
            }
            <CommentForm/>
        </CommentBase>
    )
}