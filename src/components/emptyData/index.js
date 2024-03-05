import { TableRow, TableCell } from "@mui/material";

function EmptyData() {
  return (
    <TableRow>
      <TableCell colSpan={7} align="center">
        Data Kosong
      </TableCell>
    </TableRow>
  );
}

export default EmptyData;
