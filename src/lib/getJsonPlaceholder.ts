
import { cliant,requestResults } from './../service/api';

  
export type Alcohol = {
  meigaraId: number;
  osakeName: string;
  imagePath: string;
  nomikata: Nomikata;
  };

export type Nomikata = {
  nomikata_id: number;
  name: string;
  eval: number;
  };
  
  type Alcohols = Alcohol[];

export const reqAlcohols = {
  get: (category_id: number) => {
    return requestResults<Alcohols>(
      cliant.get<Alcohols>(
        `/categories/${category_id}/alcohols`, {}
      )
    )
  }
}

  // export const getPosts = async ():Promise<postsType> => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   if (!res.ok) throw new Error('getPostsで異常が発生しました。');
  //   return res.json()
  // };