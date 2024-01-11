import NextImage from 'next/image';

const Page = async({
    params,
    searchParams,
  }: {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) => {
    return (
        <main className="main">
            編集画面です
        </main>
    );
};

export default Page;