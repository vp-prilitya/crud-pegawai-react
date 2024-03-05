import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "../../redux/dialog/actions";
import { deleteData } from "../../utils/fetch";
import { useState } from "react";
import { fetchPegawai } from "../../redux/pegawais/actions";
import { setNotif } from "../../redux/notif/actions";

function DeletePop() {
  const dispatch = useDispatch();
  const dialog = useSelector((state) => state.dialog);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    dispatch(closeDialog());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await deleteData(dialog.path);
      handleClose();
      dispatch(setNotif(true, "Data berhasil dihapus"));
      dispatch(fetchPegawai());
    } catch (err) {
      handleClose();
    }
  };

  return (
    <Dialog
      open={dialog.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {loading ? (
        <Box padding={5}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <DialogTitle id="alert-dialog-title">{"Delete data?"}</DialogTitle>
          <DialogContent>
            <DialogContentText width={300} id="alert-dialog-description">
              Data pegawai akan di hapus
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit} autoFocus>
              Hapus
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}

export default DeletePop;
