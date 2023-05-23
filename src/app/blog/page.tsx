import Link from 'next/link';
import { reqPosts } from './../../lib/getJsonPlaceholder';

const page = async () => {
  const reqPostsResult = (await reqPosts.get()).response.data

  return (
    <main className="main">
      <h1 className="title">Blog List</h1>
      <div className="grid">
        {reqPostsResult.map(({ id, title }) => (
          <Link key={id} href={`/blog/${id}`} className="card">
            <div>{title}</div>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default page;