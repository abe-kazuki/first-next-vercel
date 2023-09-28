import { cliant_v1, requestResults } from '../service/api';

export type PostRes = {
    status: number;
    meigara_id: number
    message: string;
    };

export type Error = {
    message: string;
    };

export const reqMeigaras = {
    post(category_id: number, meigara_name: string, nomikatas: number[]) {
        return requestResults<PostRes>(
            cliant_v1.post(
              `categories/${category_id}/meigaras`, {osakeName: meigara_name,nomikataIds: nomikatas}
            )
          )
    }
}