// src/components/layout/Header.tsx
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import palette from "../../theme/pallete";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: palette.background,
        boxShadow: "none",
        borderBottom: `1px solid ${palette.accent}`,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ color: palette.primary, fontWeight: "bold" }}
        >
          Centro de Estética
        </Typography>
        <Box>
          <Button sx={{ color: palette.text }} href="#servicios">
            Servicios
          </Button>
          <Button sx={{ color: palette.text }} href="#nosotros">
            Nosotros
          </Button>
          <Button sx={{ color: palette.text }} href="#contacto">
            Contacto
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
