import Link from 'next/link';
import { getPosts } from './../../lib/getJsonPlaceholder';

const page = async () => {
  const posts = await getPosts();
  return (
    <main className="main">
      <h1 className="title">Blog List</h1>
      <div className="grid">
        {posts.map(({ id, title }) => (
          <Link key={id} href={`/blog/${id}`} className="card">
            <div>{title}</div>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default page;