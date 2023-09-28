'use client';
import Link from 'next/link';
import NextImage from 'next/image';
import styled from 'styled-components';

const UlComp = styled.ul`
color: #fff;
font-weight: 300;
overflow-wrap: break-word;
display: flex;
`

const LiComp = styled.li`
flex: 1;
display: flex;
justify-content: center;
`

const CustomLink = styled(Link)`
width: 100%;
hight: 100%;
background-color: #333;
text-decoration: none;
color: #fff;
font-weight: bold;
padding: 20px 0px;
border: 1px solid #fff;
text-align: center
`

const HeadImageComp = styled(NextImage)`
width: 100%
`

const header = () => {
  return (
    <header>
      <nav className="p-2">
        <HeadImageComp src="/messageImage_1685262535471.jpg"  className="w-32" alt='' width="1000" height="500"/>
        <UlComp className="flex items-center space-x-2">
          <LiComp>
            <CustomLink href="/" >ウイスキー</CustomLink>
          </LiComp>
          <LiComp>
            <CustomLink href="/jin">ジン</CustomLink>
          </LiComp>
          <LiComp>
            <CustomLink href="/wine">ワイン</CustomLink>
          </LiComp>
          <LiComp>
            <CustomLink href="/shochu">焼酎</CustomLink>
          </LiComp>
        </UlComp>
      </nav>
    </header>
  );
};

export default header;