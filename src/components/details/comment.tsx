'use client';
import {FC, useState, useEffect} from 'react';
import {CommentForm} from './../comments/form'
import {CommentContent} from './../comments/content'
import styled from 'styled-components';
import {Comments, reqComments, PostCommentRes} from '../../lib/meigara/commentJsonPlaceholder';
import {FailResult, SuccessResult} from "~/src/service/api";
import { LoadingComp } from '../Molecules/loading';

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
    const [loading, setLoading] = useState(false);
    const handleChange = (e: any) => {
        setInputComment(e.target.value);
        console.log(`文字列追加されているせ${inputComment}`)
      };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true)
        const reqPostsResult = reqComments.post(prop.meigara_id, inputComment)
        reqPostsResult?.then(
            (res: SuccessResult<PostCommentRes> | FailResult<PostCommentRes>) => {
                const result: PostCommentRes = (res as SuccessResult<PostCommentRes> ).response.data
                const newComments = comments
                newComments.comments = newComments.comments ?? [];
                newComments.comments.push(result.comment)
                setComments(newComments)
                setInputComment("")
            }).catch((res: FailResult<PostCommentRes>) =>{
                alert(`${res.status}コメントの追加に失敗しました。`);
            }).finally(() => {
                setLoading(false); 
            })
    };
    useEffect(() => {
        const reqPostsResult = reqComments.get(prop.meigara_id)
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
            {loading && <LoadingComp />}
            <CommentForm text={inputComment} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </CommentBase>
    )
}