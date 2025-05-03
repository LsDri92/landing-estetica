import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";

import { Typography, Box } from "@mui/material";
import palette from "../theme/pallete";

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <Container bgcolor={palette.background}>
        <Box textAlign="center" mt={4}>
          <Typography variant="h3" color={palette.primary} gutterBottom>
            Bienvenida al Centro de Estética
          </Typography>
          <Typography variant="h6" color={palette.text}>
            Donde el cuidado personal y la belleza se encuentran
          </Typography>
        </Box>
      </Container>

      {/* Servicios */}
      <Container id="servicios">
        {/* Aquí va <ServiceList /> */}
        <Typography variant="h4" color={palette.primary} gutterBottom>
          Nuestros Servicios
        </Typography>
      </Container>

      {/* Sobre Nosotros */}
      <Container id="nosotros" bgcolor={palette.secondary}>
        {/* Aquí va <AboutSection /> */}
        <Typography variant="h4" color={palette.primary} gutterBottom>
          Sobre Nosotros
        </Typography>
      </Container>

      {/* Contacto */}
      <Container id="contacto">
        {/* Aquí va <ContactForm /> */}
        <Typography variant="h4" color={palette.primary} gutterBottom>
          Contactanos
        </Typography>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
