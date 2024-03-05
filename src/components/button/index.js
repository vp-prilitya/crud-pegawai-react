import { Button, CircularProgress } from "@mui/material";

function SButton({
  children,
  action,
  variant = "contained",
  loading,
  disabled,
  color,
  type,
}) {
  return (
    <Button
      variant={variant}
      disabled={disabled}
      color={color}
      onClick={loading ? null : action}
      type={type}
      startIcon={
        loading ? <CircularProgress sx={{ color: "white" }} size={15} /> : null
      }
    >
      {children}
    </Button>
  );
}

export default SButton;
