import { AppBar, Toolbar, Typography } from "@mui/material";

function SNavbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: "white", borderBottom: 1, borderColor: "grey.300" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "black", fontWeight: "bold" }}
        >
          Technical Test
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default SNavbar;
