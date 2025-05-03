import { createTheme } from "@mui/material/styles";
import palette from "./pallete";

const theme = createTheme({
  palette: {
    primary: { main: palette.primary },
    secondary: { main: palette.secondary },
    background: { default: palette.background },
    text: { primary: palette.text },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    fontSize: 14,
  },
});

export default theme;
