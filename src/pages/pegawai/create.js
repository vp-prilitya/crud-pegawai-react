import SLayout from "../../components/layout";
import STittleSub1 from "../../components/titlesub1";
import PegawaiForm from "./form";
import { postData } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setNotif } from "../../redux/notif/actions";

const CreatePegawai = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    kelurahan: "",
    jalan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await postData("pegawai", form);
      setIsLoading(false);
      navigate("/pegawai");
      setNotif(true, "Berhasil menambahkan data");
    } catch (err) {
      setIsLoading(false);
    }
  };

  const handleChangeData = (e) => {
    setForm({ ...form, [e.name]: e.value });
  };

  return (
    <SLayout>
      <STittleSub1 title="Create Pegawai" subtitle="Tambah data pegawai" />
      <PegawaiForm
        edit={false}
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleChangeData={handleChangeData}
        loading={isLoading}
        setForm={setForm}
      />
    </SLayout>
  );
};

export default CreatePegawai;
