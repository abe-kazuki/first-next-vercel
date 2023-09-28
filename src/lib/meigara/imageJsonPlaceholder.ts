import { cliant_v1, requestResults } from '../../service/api';

export type ImagePostRes = {
    status: number;

    message: string;
    };

export type Error = {
    message: string;
    };

export const reqMeigarasImage = {
    post(meigara_id: number, formData: FormData) {
        cliant_v1.defaults.headers.common['Custom-Header'] = 'multipart/form-data';
        const requestConfig = {
            headers: {
               'Content-Type': 'multipart/form-data',
            }
         };
        return requestResults<ImagePostRes>(
            cliant_v1.post(
              `meigaras/${meigara_id}/images`, formData, requestConfig
            )
          )
    }
}