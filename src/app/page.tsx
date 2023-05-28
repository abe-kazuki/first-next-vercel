import { reqAlcohols } from './../lib/getJsonPlaceholder';
import { SampleCard } from './..//components/sample_cell';


const page = async () => {
  const reqPostsResult = (await reqAlcohols.get(1)).response.data
  
  return (
    <main className="main">
      <h1 className="title">Blog List</h1>
      <div className="grid">
        {reqPostsResult.map(({ meigaraId, osakeName, imagePath, nomikata }) => 
        (
          <div key={meigaraId}>
            <SampleCard title={osakeName} body={`ボディー`} imagePath={imagePath} nomikatas={nomikata}/>
          </div>
        ))}
      </div>
    </main>
  );
};
export default page;