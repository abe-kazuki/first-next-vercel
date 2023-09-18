import { Grid } from './../components/grid';
import { NewCreateButton } from './../components/new_create_button';

const page = async() => {
  return (
    <main id="root" className="main">
      <NewCreateButton/>
      <Grid category_id={1}/>
      {/* <Grid category_id={1}/>*/}
    </main>
  );
};

export default page;