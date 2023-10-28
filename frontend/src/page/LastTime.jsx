/* eslint-disable react/jsx-no-undef */
import AllCardLocation from "../component/AllCardLocation"
import Title from "../component/Title"
import { Grid } from '@mui/material';
import { allGetData } from "../services/axios";
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
const LastTime = ({allGeoData,setAllGeoData}) => {
    const fetchAll = async () => {
        const resp = await allGetData()
        setAllGeoData(resp.data.sendData.data)
    }
    useEffect(()=>{
        fetchAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(allGeoData)
  return (
    <div style={{display:'grid',placeItems:'center'}}>
        <Title />
        <Grid item md={12} xs={12} style={{marginTop:'30px'}}>
            <AllCardLocation allGeoData={allGeoData} setAllGeoData={setAllGeoData}/>
        </Grid>
    </div>
  )
}

export default LastTime