import { reqAlcohols, Alcohols } from './../../lib/getJsonPlaceholder';
import { SampleCard } from './../../components/sample_cell';
import { SuccessResult } from './../../service/api';

const page = async () => {
  const reqPostsResult: Alcohols = ((await reqAlcohols.get(2)) as SuccessResult<Alcohols>).response.data
  
  return (
    <main className="main">
      <div className="grid">
        {reqPostsResult?.map(({ meigaraId, osakeName, imagePath, nomikata }) => 
        (
          <div key={meigaraId}>
            <SampleCard title={osakeName} imagePath={imagePath} nomikatas={nomikata} meigaraId={meigaraId}/>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;