import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "root/router/Router";
import MenuBar from "pages/MenuBar/MenuBar";
import {PersistentProvider} from "context/PersistentContext";
import {SettingsProvider} from "context/SettingsContext";

const App = () => {
  return (
     <div>
       <BrowserRouter>
           <PersistentProvider>
               <SettingsProvider>
                   <MenuBar/>
                   <Router/>
               </SettingsProvider>
           </PersistentProvider>
       </BrowserRouter>
     </div>
  );
};

export default App;
