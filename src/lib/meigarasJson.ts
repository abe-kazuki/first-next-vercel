import { cliant_v1, requestResults } from './../service/api';

export type PostRes = {
    status: number;
    error: Error;
    };

export type Error = {
    message: string;
    };

export const reqMeigaras = {
    post(category_id: number, meigara_name: string, nomikatas: number[]) {
        return requestResults<PostRes>(
            cliant_v1.post(
              `categories/${category_id}/meigaras`, {meigara_name: meigara_name,nomikatas: nomikatas}
            )
          )
    }
}