import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import productsReducer, { productsFetch } from "./slices/productsSlice";
import cartReducer, { getTotals } from "./slices/cartSlice";
import { productsApi } from "./slices/productsApi";
import 'bootstrap/dist/css/bootstrap.min.css';

import { PublicClientApplication,EventType } from '@azure/msal-browser';

const pca = new PublicClientApplication({
    auth:{
        clientId: '14972a23-5cc8-4204-84ac-f2c1dad0c504',
        authority: 'https://login.microsoftonline.com/324a7ccc-f7db-4150-9c4f-eeec74662c4a',
        redirectUri: '/',
    }
})

pca.addEventCallback(event => {
  if(event.eventType === EventType.LOGIN_SUCCESS ){
     
      pca.setActiveAccount(event.payload.account)
  }
})

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App  msalInstance={pca} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
