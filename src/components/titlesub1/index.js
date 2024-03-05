import { Box, Typography } from "@mui/material";

function STittleSub1({ title, subtitle = "" }) {
  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" component="p">
        {subtitle}
      </Typography>
    </Box>
  );
}

export default STittleSub1;
