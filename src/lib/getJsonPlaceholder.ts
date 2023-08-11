
import { cliant,requestResults } from './../service/api';

  
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
      cliant.get<Alcohols>(
        `categories/${category_id}/alcohols?cacheclearparam=${time}`, {}
      )
    )
  },
  mock_get: (category_id: number) => {
    return requestResults<Alcohols>(
      cliant.get<Alcohols>(
        `teratest`, {}
      )
    )
  },
  patch: (meigaraId: number, nomikatas_id: number) => {
    
    return requestResults<PatchRes>(
      cliant.patch<PatchRes>(
        `meigaras/${meigaraId}/nomikatas/${nomikatas_id}`, {}
      )
    )
  }
}

export const fetch_alcohols = async (category_id: number) => {
  const result = await fetch(`https://project-sake.an.r.appspot.com:443/categories/${category_id}/alcohols`, {
    cache: "no-store",
  });
  const json: Alcohols  = await result.json();
  return json
}