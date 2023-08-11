import { fetch_alcohols, Alcohols } from './../../lib/getJsonPlaceholder';
import { SampleCard, FadeIn } from './../../components/sample_cell';
import { SuccessResult } from './../../service/api';

const page = async () => {
  //const reqPostsResult: Alcohols = ((await reqAlcohols.get(4)) as SuccessResult<Alcohols>).response.data
  const result: Alcohols = (await fetch_alcohols(4))
  
  return (
    <main className="main">
      <div className="grid">
        {result?.map(({ meigaraId, osakeName, imagePath, nomikata }, index) => 
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