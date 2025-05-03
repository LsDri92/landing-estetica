// src/components/layout/Container.tsx
import { ReactNode } from "react";
import { Box, Container as MuiContainer } from "@mui/material";

interface Props {
  children: ReactNode;
  bgcolor?: string;
  id?: string;
}

const Container = ({ children, bgcolor = "transparent", id }: Props) => (
  <Box id={id} bgcolor={bgcolor} py={6}>
    <MuiContainer maxWidth="lg">{children}</MuiContainer>
  </Box>
);

export default Container;
