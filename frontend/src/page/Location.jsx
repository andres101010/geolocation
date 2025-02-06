import CardLocation from "../component/CardLocation"
import Title from "../component/Title"
import { Grid } from '@mui/material';
import { getData } from "../services/axios";
import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types, no-unused-vars
const Location = ({geoData,setGeoData}) => {
    const [ip, setIp] = useState(null)
    // const fetchData = async ()=>{
    //     const ipResponse = await fetch("https://api64.ipify.org?format=json");
    //     const ipData = await ipResponse.json();
    //     const userIP = ipData.ip;
    //     console.log("User IP: " , userIP);
    //     setIp(userIP);
    //     console.log("IP: " , ip);
    //     const data = await getData(ip);
    //     setGeoData(data.data.currency);
    // }
   
    // useEffect(()=>{
    //     fetchData()
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[])
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Obtener la IP pública
                const ipResponse = await fetch("https://api64.ipify.org?format=json");
                const ipData = await ipResponse.json();
                const userIP = ipData.ip;
                console.log("User IP: ", userIP);
    
                // Actualizar el estado con la IP obtenida
                setIp(userIP);
            } catch (error) {
                console.error("Error obteniendo la IP:", error);
            }
        };
    
        fetchData();
    }, []);
    
    // Cuando `ip` cambia, obtener los datos de geolocalización
    useEffect(() => {
        const fetchGeoData = async () => {
            if (!ip) return; // Evitar hacer la petición si `ip` es null
    
            try {
                console.log("Fetching geolocation for IP:", ip);
                const data = await getData(ip);
                setGeoData(data.data.currency);
            } catch (error) {
                console.error("Error obteniendo geolocalización:", error);
            }
        };
    
        fetchGeoData();
    }, [ip, setGeoData]);
    console.log("resp", geoData)
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