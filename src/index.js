import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './components/Router/Router'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { store } from "./store"
import { Provider } from 'react-redux'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6170fb",
    },
    secondary: {
      main: "#0098FF",
    },
  },
});

ReactDOM.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </ThemeProvider >
  </React.StrictMode >,
  document.getElementById('root')
);

reportWebVitals();
