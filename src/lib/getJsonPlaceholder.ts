
import { cliant_v2, mock_cliant,requestResults } from './../service/api';

  
export type Alcohol = {
  meigaraId: number;
  osakeName: string;
  imagePath: string;
  nomikata: Nomikatas;
  };

export type Nomikata = {
  nomikata_id: number;
  name: string;
  eval: number;
  };

export type Nomikatas = Nomikata[];  
export type Alcohols = Alcohol[];

export type PatchRes = {
  status: number;
  };

export const reqAlcohols = {
  get: (category_id: number) => {
    const time = new Date()
    console.log(`＝＝＝ココおget＝＝＝categories/${category_id}/alcohols?cacheclearparam=${time.getMinutes()}`);
    
    return requestResults<Alcohols>(
      cliant_v2.get<Alcohols>(
        `categories/${category_id}/alcohols`, {}
      )
    )
  },
  mock_get: (category_id: number) => {
    console.log("リクエストしているよ！！")
    return requestResults<Alcohols>(
      mock_cliant.get<Alcohols>(
        `/mock/category.json`, {}
      )
    )
  },
  patch: (meigaraId: number, nomikatas_id: number) => {
    
    return requestResults<PatchRes>(
      cliant_v2.patch<PatchRes>(
        `meigaras/${meigaraId}/nomikatas/${nomikatas_id}`, {}
      )
    )
  }
}

export const fetch_alcohols = async (category_id: number) => {
  const result = await fetch(`https://osakeman.com/V2/categories/${category_id}/alcohols`, {
    cache: "no-store",
  });
  const json: Alcohols  = await result.json();
  return json
}