import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export interface SummaryProps {
    price: number;
}

export default function SummaryView({ price }: SummaryProps) {
  return (
    <Box sx={{ p: 4 }}>
      <Typography gutterBottom sx={{ textAlign: 'right' }} variant="h5" component="div">
        Total: ${price.toFixed(2)}
      </Typography>
    </Box>
  );
}
