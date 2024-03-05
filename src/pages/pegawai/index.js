import {
  Box,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import SLayout from "../../components/layout";
import STittleSub1 from "../../components/titlesub1";
import SButton from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TableLoading from "../../components/tableLoading";
import { useNavigate } from "react-router-dom";
import EmptyData from "../../components/emptyData";
import { openDialog } from "../../redux/dialog/actions";
import DeletePop from "../../components/deletePop";
import { fetchPegawai } from "../../redux/pegawais/actions";

export default function Pegawai() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pegawai = useSelector((state) => state.pegawai);

  const thead = [
    "Nama",
    "Provinsi",
    "Kabupaten",
    "Kecamatan",
    "Kelurahan",
    "Jalan",
    "",
  ];

  useEffect(() => {
    dispatch(fetchPegawai());
  }, [dispatch]);

  return (
    <SLayout>
      <DeletePop />
      <Box
        direction="row"
        justifyContent="space-between"
        sx={{ display: { xs: "block", sm: "flex" }, paddingBottom: 5 }}
      >
        <STittleSub1 title="Data Pegawai" subtitle="Tabel data pegawai " />
        <Box>
          <SButton action={() => navigate("/pegawai/create")}>Create</SButton>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {thead.map((data, index) => (
                <TableCell key={index} sx={{ fontWeight: "bold" }}>
                  {data}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {pegawai.status === "process" ? (
              <TableLoading />
            ) : pegawai.data.length === 0 ? (
              <EmptyData />
            ) : (
              pegawai.data.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>{data.nama}</TableCell>
                  <TableCell>{data.provinsi.name}</TableCell>
                  <TableCell>{data.kabupaten.name}</TableCell>
                  <TableCell>{data.kecamatan.name}</TableCell>
                  <TableCell>{data.kelurahan.name}</TableCell>
                  <TableCell>{data.jalan}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      onClick={() => dispatch(openDialog(`pegawai/${data.id}`))}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="update"
                      onClick={() => navigate(`/pegawai/edit/${data.id}`)}
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </SLayout>
  );
}
