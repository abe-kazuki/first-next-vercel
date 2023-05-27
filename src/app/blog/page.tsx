import Link from 'next/link';
import { reqPosts } from './../../lib/getJsonPlaceholder';
import { MyCard } from './../..//components/card';
import { SampleCard } from './../..//components/sample_cell';


const page = async () => {
  const reqPostsResult = (await reqPosts.get()).response.data

  return (
    <main className="main">
      <h1 className="title">Blog List</h1>
      <div className="grid">
        {reqPostsResult.map(({ id, title, body }) => (
          <div key={id}>
            <SampleCard title={title} body={body}/>
          </div>
        ))}
      </div>
    </main>
  );
};
export default page;