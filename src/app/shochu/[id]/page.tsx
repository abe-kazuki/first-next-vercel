import NextImage from 'next/image';
import {SubItem} from './../../../components/sample_cell';

const Page = async({
    params,
    searchParams,
  }: {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) => {
    return (
        <main id="root" className="main">
            {params["id"]}
            <NextImage
                    className="object-contain"
                    src="https://storage.googleapis.com/sake-bucket/hakushuu.png"
                    alt='logo'
                    width="200"
                    height="250"
                    />
            <div>カテゴリ</div>
            <div>タイトル</div>
            <div>値段</div>
            <div>原産地</div>
            <div>アルコール度数</div>
            <div>公式サイト</div>
            -- コンポーネント化
            <div>説明文</div>
            <SubItem title={"タイトル"} imagePath={""} nomikatas={[]} meigaraId={1}/>
        </main>
    );
};

export default Page;