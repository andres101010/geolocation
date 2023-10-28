import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import MultiActionAreaCard from '../component/Card';
import Title from '../component/Title';

const Inicio = () => {
  return (
    <div className="center" style={{display:'grid',placeItems:'center'}}>
      <Link to={"/sendlocation"} style={{textDecoration:'none', backgroundColor:'darkBlue', color:'white', height:'30px', width:'150px',borderRadius:'5px', margin:'auto',display:"grid", placeItems:"center"}}>
      see all locations
        </Link>
       <Title />
        <Grid item md={12} xs={12} style={{marginTop:'30px'}}>
            <MultiActionAreaCard />
        </Grid>
    </div>
  )
}

export default Inicio