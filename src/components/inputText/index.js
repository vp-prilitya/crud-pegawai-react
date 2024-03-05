import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { isFormInvalid } from "../../utils/isFormInvalid";
import { findInputError } from "../../utils/findInputError";

function SInputText({
  label,
  id,
  name,
  type,
  attr,
  InputProps,
  value,
  onChange,
}) {
  return (
    <TextField
      InputProps={InputProps}
      label={label}
      value={value}
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      fullWidth
    />
  );
}

export default SInputText;
