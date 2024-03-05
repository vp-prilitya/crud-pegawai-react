import { TableRow, TableCell } from "@mui/material";
import Spinner from "../spinner";

function TableLoading() {
  return (
    <TableRow>
      <TableCell colSpan={7}>
        <Spinner />
      </TableCell>
    </TableRow>
  );
}

export default TableLoading;
