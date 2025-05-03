// src/components/layout/Footer.tsx
import { Box, Typography, Container } from "@mui/material";
import palette from "../../theme/pallete";

const Footer = () => {
  return (
    <Box bgcolor={palette.primary} color="#fff" py={4}>
      <Container>
        <Typography variant="body1">
          © {new Date().getFullYear()} Centro de Estética
        </Typography>
        <Typography variant="body2">
          Tel: 11-1234-5678 · Dirección: Calle Ficticia 123
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
