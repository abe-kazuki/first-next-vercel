'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

const UlComp = styled.ul`
  color: #fff;
  font-weight: 300;
  overflow-wrap: break-word;
  display: flex;
`

const LiComp = styled.li`
width: 140px;
background-color: #333;
text-decoration: none;
color: #fff;
font-weight: bold;
padding: 20px;
border: 1px solid #fff;
`

const header = () => {
  return (
    <header>
      <nav className="p-2">
        <img src="/messageImage_1685262535471.jpg" className="w-32" width="600" height="5000"/>
        <UlComp className="flex items-center space-x-2">
          <LiComp>
            <Link href="/" >ウイスキー</Link>
          </LiComp>
          <LiComp>
            <Link href="/jin">ジン</Link>
          </LiComp>
          <LiComp>
            <Link href="/wine">ワイン</Link>
          </LiComp>
          <LiComp>
            <Link href="/shochu">焼酎</Link>
          </LiComp>
        </UlComp>
      </nav>
    </header>
  );
};

export default header;