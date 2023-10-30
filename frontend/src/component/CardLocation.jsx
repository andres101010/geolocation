/* eslint-disable react/prop-types */

import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import img2 from "frontend/src/assets/img/money.jpeg"
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// eslint-disable-next-line react/prop-types
export default function BasicStack({geoData}) {
  return (
    <Box sx={{ width: '100%' }}>
        <Grid item md={12} xs={12} mb={2}>
           <img src={img2} alt="" />
        </Grid>
      
      <Stack spacing={2}>
        <Item>{geoData.name}</Item>
        <Item>{geoData.symbol}</Item>
        <Item>{geoData.fecha}</Item>
      </Stack>
    </Box>
  );
}