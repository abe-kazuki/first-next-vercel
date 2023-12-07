import { cliant_v1, requestResults } from '../../service/api';

export type LikeResponse = {
    meigaraId: number;
    };

export const reqLikes = {
    patch: (meigara_id: number) => {      
      return requestResults<LikeResponse>(
        cliant_v1.patch<LikeResponse>(
            `meigaras/${meigara_id}/likes`, {}
        )
      )
    },
}
