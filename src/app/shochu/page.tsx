import { reqAlcohols } from './../../lib/getJsonPlaceholder';
import { SampleCard } from './../../components/sample_cell';


const page = async () => {
  const reqPostsResult = (await reqAlcohols.get(4)).response.data
  
  return (
    <main className="main">
      <div className="grid">
        {reqPostsResult.map(({ meigaraId, osakeName, imagePath, nomikata }) => 
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