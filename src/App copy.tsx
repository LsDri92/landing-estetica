import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import muiTheme from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default App;
