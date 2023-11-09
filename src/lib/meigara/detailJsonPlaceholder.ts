import { cliant_v1, mock_cliant, requestResults } from '../../service/api';
import { Nomikatas } from './../alcoholaJsonPlaceholder'

export type AlcoholDetails = {
    categoryId: number;
    categoryName: string;
    meigaraId: number;
    meigaraName: string;
    region: string;
    price: number;
    alcoholDegree: number;
    description: string;
    officialUrl: string;
    likesCount: number;
    commentsCount: number;
    imagePath: string;
    nomikata: Nomikatas;
    };

export type Error = {
    message: string;
    };

export const reqMeigaras = {
    get(meigara_id: number) {
        return requestResults<AlcoholDetails>(
            cliant_v1.get<AlcoholDetails>(
              `/meigaras/${meigara_id}`, {}
            )
          )
    },

    mock_get(meigara_id: number) {
        return requestResults<AlcoholDetails>(
            mock_cliant.get<AlcoholDetails>(
              `/mock/details.json`, {}
            )
          )
    }
}