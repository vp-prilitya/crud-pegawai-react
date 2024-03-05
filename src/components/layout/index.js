import { Container } from "@mui/material";

function SLayout({ children }) {
  return (
    <Container sx={{ paddingTop: 3, paddingBottom: 5 }}>{children}</Container>
  );
}

export default SLayout;
