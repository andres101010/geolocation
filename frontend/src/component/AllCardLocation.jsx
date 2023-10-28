import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

// eslint-disable-next-line react/prop-types
export default function AllCardLocation({allGeoData}) {
    const array = Object.keys(allGeoData).map(key => allGeoData[key]);
    console.log(array)
  return (
    <Box sx={{ width: '100%' }}  style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        
    {
        array.map((row)=>(
            <Grid key={row.id} style={{flex: '1 1 300px', margin: '10px', padding: '10px', border: '1px solid #ccc', backgroundColor:'darkgray'}}>
            <Grid item >
                <h2 style={{color:'white'}}>Country : {row.pais}</h2>
                <p style={{color:'gold'}}><span>Money : {row.moneda}</span></p>
                <p style={{color:'darkBlue'}}><span>Fecha : {row.fecha}</span></p>
            </Grid>
            </Grid>
        ))
    }
    
    </Box>
  );
}