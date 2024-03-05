import { Box, TextField } from "@mui/material";
import SButton from "../../components/button";
import ProvinsiOptions from "../../components/provinsiOptions";
import KabupatenOptions from "../../components/kabupatenOptions";
import KecamatanOptions from "../../components/kecamatanOptions";
import KelurahanOptions from "../../components/kelurahanOptions";

export default function PegawaiForm({
  edit,
  form,
  loading,
  handleChange,
  handleSubmit,
  setForm,
  handleChangeData,
}) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    >
      <Box
        sx={{ width: { xs: 1, sm: 1 / 2 } }}
        paddingTop={5}
        paddingBottom={10}
      >
        <TextField
          label="nama"
          value={form.nama}
          type="text"
          id="nama"
          name="nama"
          onChange={handleChange}
          fullWidth
        />

        <ProvinsiOptions form={form} setForm={setForm} />

        <KabupatenOptions
          form={form}
          edit={edit}
          handleChangeData={handleChangeData}
          handleChange={handleChange}
          setForm={setForm}
        />

        <KecamatanOptions
          form={form}
          edit={edit}
          handleChangeData={handleChangeData}
          handleChange={handleChange}
          setForm={setForm}
        />

        <KelurahanOptions
          form={form}
          edit={edit}
          handleChangeData={handleChangeData}
          handleChange={handleChange}
        />

        <TextField
          placeholder="Jalan"
          onChange={handleChange}
          value={form.jalan}
          name="jalan"
          multiline
          fullWidth
          rows={4}
        />

        <Box
          paddingTop={3}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <SButton loading={loading} action={handleSubmit}>
            Submit
          </SButton>
        </Box>
      </Box>
    </Box>
  );
}
