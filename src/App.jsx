import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./components/global/Topbar";
import ProSidebar from "./components/global/Sidebar";
import i18n from "../src/i18n/i18n";
import Routers from "./routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  const [theme, colorMode] = useMode();
  const themes = useTheme();
  document.body.dir = i18n.dir();

  useEffect(() => {
    i18n.changeLanguage("ar");
    document.body.dir = i18n.dir();
    themes.direction = i18n.dir();
  }, []);

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <ProSidebar />
            <main className="content">
              <Topbar />
              <div style={{ margin: ".5rem" }}>
                <Routers />
              </div>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
