import { Box, CircularProgress } from "@mui/material";

function Spinner() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ p: 2 }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Spinner;
