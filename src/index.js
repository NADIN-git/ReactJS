import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
///import reportWebVitals from './reportWebVitals';
import Router from './components/Router/Router'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import './services/firebase'

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
        <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider >
  </React.StrictMode >,
  document.getElementById('root')
);

///reportWebVitals();
