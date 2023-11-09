import NextImage from 'next/image';
import {SubItem} from './../../components/sample_cell';
import {Container} from '../../components/details/contailner';

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
            <Container meigaraId={parseInt(params["id"], 10)}/>
        </main>
    );
};

export default Page;