import { cliant,requestResults } from './../service/api';

export type postType = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  
  type postsType = postType[];
  
export const reqPosts = {
  get: () => {
    return requestResults<postsType>(
      cliant.get<postsType>(
        "/posts", {}
      )
    )
  }
}

  // export const getPosts = async ():Promise<postsType> => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   if (!res.ok) throw new Error('getPostsで異常が発生しました。');
  //   return res.json()
  // };