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

export const Comment: FC<Props> = (prop: Props) => {
    const [comments, setComments] = useState<Comments>({comments: []})
    const [inputComment, setInputComment] = useState("");
    const handleChange = (e: any) => {
        setInputComment(e.target.value);
        console.log(`文字列追加されているせ${inputComment}`)
      };
    const handleSubmit = (e: any) => {
        console.log("サブミットされたぜ！！")
        // API通信
        // 結果をコメントにappendする
    };
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
            <CommentForm text={inputComment} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </CommentBase>
    )
}