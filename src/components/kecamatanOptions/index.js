import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import TextFieldSelect from "../textFieldSelect";
import { fetchKelurahan } from "../../redux/kelurahan/actions";
import { clearFetchingKecamatan } from "../../redux/kecamatan/actions";

const KecamatanOptions = ({
  edit,
  form,
  handleChangeData,
  handleChange,
  setForm,
}) => {
  const kecamatan = useSelector((state) => state.kecamatan);
  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => {
      dispatch(clearFetchingKecamatan());
    };
  }, [dispatch]);

  return (
    <TextFieldSelect
      edit={edit}
      id="kecamatan"
      label="Kecamatan"
      name="kecamatan"
      defaultValue={form.kecamatan}
      data={kecamatan}
      onChange={(e) => {
        var data = kecamatan.data.find((db) => db.id === e.target.value);

        setForm({ ...form, kecamatan: data, kelurahan: {} });

        dispatch(fetchKelurahan(e.target.value));
      }}
    />
  );
};

export default KecamatanOptions;
