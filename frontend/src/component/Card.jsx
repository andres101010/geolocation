
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import img from "../assets/img/moneylocation.jpg";
import { Link } from "react-router-dom";

const cardMediaStyle = {
    height: 'auto', 
   
    objectFit: 'cover' 
  };
export default function MultiActionAreaCard() {
   
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={cardMediaStyle} 
          image={img}
          alt="location"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="darkBlue">
           Type of currency according to your location
          </Typography>
          <Typography variant="body2" color="black">
          Website to show the type of currency applicable according to your location
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/location"} style={{textDecoration:'none', backgroundColor:'black', color:'white', height:'30px', width:'90px',borderRadius:'5px', margin:'auto',display:"grid", placeItems:"center"}}>
          Click, here
        </Link>
      </CardActions>
    </Card>
  );
}