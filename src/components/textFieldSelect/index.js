import * as React from "react";
import { CircularProgress, MenuItem, TextField } from "@mui/material";

function TextFieldSelect({
  edit,
  id,
  label,
  name,
  data,
  onChange,
  defaultValue,
}) {
  return (
    <TextField
      id={id}
      label={label}
      name={name}
      fullWidth
      value={
        data.status === "success"
          ? defaultValue.id
            ? defaultValue.id
            : ""
          : ""
      }
      onChange={onChange}
      select={data.status !== "process"}
      InputProps={{
        endAdornment: (
          <React.Fragment>
            {data.status === "process" ? (
              <CircularProgress color="inherit" size={20} />
            ) : null}
          </React.Fragment>
        ),
      }}
    >
      {data.data.map((value) => (
        <MenuItem key={value.name} value={value.id}>
          {value.name}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default TextFieldSelect;
