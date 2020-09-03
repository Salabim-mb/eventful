import React, {useContext, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "root/router/Router";
import MenuBar from "pages/MenuBar/MenuBar";
import {PersistentProvider} from "context/PersistentContext";
import {SettingsProvider} from "context/SettingsContext";
import {ThemeProvider} from "@material-ui/styles";
import {SettingsContext} from "context/SettingsContext";
import {createMuiTheme} from "@material-ui/core";

const App = () => {
    const settings = useContext(SettingsContext);
    const [darkMode, setDarkMode] = useState(settings.dark);

    let theme = createMuiTheme({
        palette: {
            type: !darkMode ? "dark" : "light"
        }
    });

  return (
       <BrowserRouter>
           <PersistentProvider>
               <SettingsProvider>
                   <ThemeProvider theme={theme}>
                       <MenuBar/>
                       <Router setDarkMode={setDarkMode}/>
                   </ThemeProvider>
               </SettingsProvider>
           </PersistentProvider>
       </BrowserRouter>
  );
};

export default App;
