import { Grid } from '@mui/material';

import MultiActionAreaCard from '../component/Card';
import Title from '../component/Title';

const Inicio = () => {
  return (
    <div className="center" style={{display:'grid',placeItems:'center'}} >
       <Title />
        <Grid item md={12} xs={12} style={{marginTop:'30px'}}>
            <MultiActionAreaCard />
        </Grid>
    </div>
  )
}

export default Inicio