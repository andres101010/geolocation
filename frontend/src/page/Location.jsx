import CardLocation from "../component/CardLocation"
import Title from "../component/Title"
import { Grid } from '@mui/material';
import { getData } from "../services/axios";
import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types, no-unused-vars
const Location = ({geoData,setGeoData}) => {
    const [ip, setIp] = useState(null)
    const fetchData = async ()=>{
        const ipResponse = await fetch("https://api64.ipify.org?format=json");
        const ipData = await ipResponse.json();
        const userIP = ipData.ip;
        console.log("User IP: " , userIP);
        setIp(userIP);
        const data= await getData(ip);
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