import { Grid } from './../../components/grid';
import { NewCreateButton } from './../../components/new_create_button';

const page = async() => {
  return (
    <main id="root" className="main">
      <NewCreateButton category_id={3}/>
      <Grid category_id={3}/>
    </main>
  );
};

export default page;