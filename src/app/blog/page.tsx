import Link from 'next/link';
import { reqPosts } from './../../lib/getJsonPlaceholder';
import { MyCard } from './../..//components/card';

const page = async () => {
  const reqPostsResult = (await reqPosts.get()).response.data

  return (
    <main className="main">
      <h1 className="title">Blog List</h1>
      <div className="grid">
        {reqPostsResult.map(({ id, title }) => (
          <div key={id}>
            <MyCard title={title}/>
          </div>
        ))}
      </div>
    </main>
  );
};
export default page;