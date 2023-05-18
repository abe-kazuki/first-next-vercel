import Link from 'next/link';

const header = () => {
  return (
    <header>
      <nav className="p-2">
        <ul className="flex items-center space-x-2">
          <li>
            <img src="/vercel.svg" className="w-32" width="200" height="500"/>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/test">Test</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;