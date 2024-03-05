import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import TextFieldSelect from "../textFieldSelect";
import { clearFetchingKelurahan } from "../../redux/kelurahan/actions";

const KelurahanOptions = ({ edit, form, handleChangeData, handleChange }) => {
  const kelurahan = useSelector((state) => state.kelurahan);
  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => {
      dispatch(clearFetchingKelurahan());
    };
  }, [dispatch]);
  return (
    <TextFieldSelect
      edit={edit}
      id="kelurahan"
      label="Kelurahan"
      name="kelurahan"
      data={kelurahan}
      defaultValue={form.kelurahan}
      onChange={(e) => {
        var data = kelurahan.data.find((db) => db.id === e.target.value);

        handleChangeData({
          name: e.target.name,
          value: data,
        });
      }}
    />
  );
};

export default KelurahanOptions;
