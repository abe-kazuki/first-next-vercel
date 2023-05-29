
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
type Alcohols = Alcohol[];

export type PatchRes = {
  status: number;
  };

export const reqAlcohols = {
  get: (category_id: number) => {
    return requestResults<Alcohols>(
      cliant.get<Alcohols>(
        `/categories/${category_id}/alcohols`, {}
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
        `/meigaras/${meigaraId}/nomikatas/${nomikatas_id}`, {}
      )
    )
  }
}

  // export const getPosts = async ():Promise<postsType> => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   if (!res.ok) throw new Error('getPostsで異常が発生しました。');
  //   return res.json()
  // };