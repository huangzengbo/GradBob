import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './styles/theme';
import RootProvider from './context';

import Users from './container/Users';
import Products from './container/Products';
import Summary from './container/Summary';

function App() {
  return (
    <RootProvider>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <Box sx={{ p: 4 }}>
              <Users />
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box>
              <Products /> 
            </Box>
            <Box>
              <Summary /> 
            </Box>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    </RootProvider>
  );
}

export default App;
