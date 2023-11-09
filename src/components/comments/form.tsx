'use client';
import {FC, useState, useEffect} from 'react';

// ボタンと入力欄

export const CommentForm: FC = () => {
    return (
        <div>
            <input
                type="text"
                value={""}
                placeholder="コメントを追加..."
            />
            <button type="submit">送信</button>
        </div>
    )
}