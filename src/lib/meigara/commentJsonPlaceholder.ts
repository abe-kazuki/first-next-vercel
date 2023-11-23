import { cliant_v1, requestResults } from '../../service/api';

export type Comment = {
    date: string;
    text: string;
};

export type Comments = {
    comments: Comment[];
};

export type Error = {
    message: string;
};

export type PostCommentRes = {
    status: number;
    comment: Comment;
    message: string;
    };

export const reqComments = {
    get(meigara_id: number) {
        return requestResults<Comments>(
            cliant_v1.get(
                `meigaras/${meigara_id}/comments`
            )
        )
    },
    post(meigara_id: number, comment: string) {
        return requestResults<PostCommentRes>(
            cliant_v1.post(
                `meigaras/${meigara_id}/comments`, {comment: comment}
            )
          )
    }
}
