import { reqAlcohols, Alcohols } from './../../lib/getJsonPlaceholder';
import { SampleCard, FadeIn } from './../../components/sample_cell';
import { SuccessResult } from './../../service/api';

const page = async () => {
  const reqPostsResult: Alcohols = ((await reqAlcohols.get(2)) as SuccessResult<Alcohols>).response.data
  
  return (
    <main className="main">
      <div className="grid">
        {reqPostsResult?.map(({ meigaraId, osakeName, imagePath, nomikata }, index) => 
        (
          <div key={meigaraId}>
            <FadeIn duration={index*2.5}>
              <SampleCard title={osakeName} imagePath={imagePath} nomikatas={nomikata} meigaraId={meigaraId}/>
            </FadeIn>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;