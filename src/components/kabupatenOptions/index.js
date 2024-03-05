import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import TextFieldSelect from "../textFieldSelect";
import { fetchKecamatan } from "../../redux/kecamatan/actions";
import { clearFetchingKabupaten } from "../../redux/kabupaten/actions";

const KabupatenOptions = ({
  edit,
  form,
  handleChangeData,
  handleChange,
  setForm,
}) => {
  const kabupaten = useSelector((state) => state.kabupaten);
  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => {
      dispatch(clearFetchingKabupaten());
    };
  }, [dispatch]);

  return (
    <TextFieldSelect
      edit={edit}
      id="kabupaten"
      label="Kab/Kota"
      name="kabupaten"
      data={kabupaten}
      defaultValue={form.kabupaten}
      onChange={(e) => {
        var data = kabupaten.data.find((db) => db.id === e.target.value);

        setForm({ ...form, kabupaten: data, kecamatan: {} });
        dispatch(fetchKecamatan(e.target.value));
      }}
    />
  );
};

export default KabupatenOptions;
