import { Grid } from './../../components/grid';
import { NewCreateButton } from './../../components/new_create_button';

const page = async() => {
  return (
    <main id="root" className="main">
      <NewCreateButton category_id={4} category_name='焼酎'/>
      <Grid category_id={4}/>
    </main>
  );
};

export default page;