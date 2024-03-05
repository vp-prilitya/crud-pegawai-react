import { Autocomplete, TextField, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProvinsi } from "../../redux/provinsi/actions";
import * as React from "react";
import { fetchKabupaten } from "../../redux/kabupaten/actions";

const ProvinsiOptions = ({ setForm, form }) => {
  const dispatch = useDispatch();
  const provinsi = useSelector((state) => state.provinsi);

  useEffect(() => {
    dispatch(fetchProvinsi());
  }, [dispatch]);

  return (
    <Autocomplete
      key={form.provinsi}
      defaultValue={form.provinsi === "" ? null : form.provinsi}
      disabled={provinsi.status === "process"}
      onChange={(_, newValue) => {
        setForm({ ...form, provinsi: newValue, kabupaten: {} });
        dispatch(fetchKabupaten(newValue.id));
      }}
      getOptionLabel={(options) => options.name}
      options={provinsi.data}
      isOptionEqualToValue={(options, value) => options.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          label={provinsi.status === "process" ? "Loading" : "Provinsi"}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {provinsi.status === "process" ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default ProvinsiOptions;
