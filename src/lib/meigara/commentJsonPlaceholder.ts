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

export const reqCommentsGet = {
    get(meigara_id: number) {
        return requestResults<Comments>(
            cliant_v1.get(
                `meigaras/${meigara_id}/comments`
            )
        )
    }
}
