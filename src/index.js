import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { themeOptions } from './config/theme';
import { ThemeProvider } from '@mui/material';
import Master from './components/Master/Master';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <Master />
    </ThemeProvider>
  </React.StrictMode>
);