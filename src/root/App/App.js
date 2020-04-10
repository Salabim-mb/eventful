import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "root/router/Router";

const App = () => {
  return (
     <div>
       <BrowserRouter>
           <Router/>
       </BrowserRouter>
     </div>
  );
};

export default App;
