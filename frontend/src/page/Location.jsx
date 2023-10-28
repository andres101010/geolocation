import CardLocation from "../component/CardLocation"
import Title from "../component/Title"
import { Grid } from '@mui/material';
import { getData } from "../services/axios";
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types, no-unused-vars
const Location = ({geoData,setGeoData}) => {
    const fetchData = async ()=>{
        const data= await getData();
        setGeoData(data.data.currency);
    }
    useEffect(()=>{
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(geoData)
  return (
    <div style={{display:'grid',placeItems:'center'}}>
        <Title />
        <Grid item md={12} xs={12} style={{marginTop:'30px'}}>
            <CardLocation geoData={geoData}/>
        </Grid>
    </div>
  )
}

export default Location