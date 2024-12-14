// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();


import React from "react";
// import Layout from "../components/layout";
import TravelForm from "./components/TravelForm/TravelForm"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersReducer from "./components/features/Users";
// import BannerImage from "../components/BannerImage/BannerImage";

const IndexPage = () => {

  const store = configureStore({
    reducer: {
      users: usersReducer,
    },
  });

  return(  
      <Provider store={store}>
        <TravelForm/>
      </Provider>    
  )
}

export default IndexPage