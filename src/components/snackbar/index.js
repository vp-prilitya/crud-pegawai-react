import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { clearNotif } from "../../redux/notif/actions";

function SSnackBar() {
  const notif = useSelector((state) => state.notif);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(clearNotif());
  };

  return (
    <div>
      <Snackbar
        open={notif.open}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {notif.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SSnackBar;
