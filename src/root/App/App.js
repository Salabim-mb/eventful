import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "root/router/Router";
import MenuBar from "pages/MenuBar/MenuBar";

const App = () => {
  return (
     <div>
       <BrowserRouter>
           <MenuBar/>
           <Router/>
       </BrowserRouter>
     </div>
  );
};

export default App;
