import { Grid } from './../../components/grid';
import { NewCreateButton } from './../../components/new_create_button';

const page = async() => {
  return (
    <main id="root" className="main">
      <NewCreateButton category_id={2} category_name='ジン'/>
      <Grid category_id={2}/>
    </main>
  );
};

export default page;