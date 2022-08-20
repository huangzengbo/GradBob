import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import FormLabel from '@mui/material/FormLabel';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';

export interface ProductProps {
    title: string;
    actionChangeNumber: (productNumber: number) => void;
}

export default function ProductView({ title, actionChangeNumber }: ProductProps) {
  const [productNumber, setProductNumber] = useState<number>(0);

  const plus = () => {
    const plusNumber = productNumber + 1;
    setProductNumber(plusNumber);
    actionChangeNumber(plusNumber);
  }

  const minus = () => {
    const minusNumber = productNumber - 1;
    if (minusNumber >= 0) {
      setProductNumber(minusNumber);
      actionChangeNumber(minusNumber);
    }
  }
  return (
    <>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <FormLabel sx={{ lineHeight: 4 }} id={`product-${title}`}>{title}</FormLabel>
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={plus} sx={{ mt: 2 }} color="primary" aria-label="upload picture" component="label">
              <Add />
            </IconButton>
            <IconButton onClick={minus} sx={{ mt: 2 }} color="primary" aria-label="upload picture" component="label">
              <Remove />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <OutlinedInput
              disabled
              id="outlined-adornment-weight"
              value={productNumber}
              endAdornment={<InputAdornment position="end">item(s)</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ mb: 2 }} />
    </>
  );
}
