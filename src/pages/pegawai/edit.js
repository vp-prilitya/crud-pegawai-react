import SLayout from "../../components/layout";
import STittleSub1 from "../../components/titlesub1";
import PegawaiForm from "./form";
import { getData, putData } from "../../utils/fetch";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setNotif } from "../../redux/notif/actions";
import { fetchKabupaten } from "../../redux/kabupaten/actions";
import { fetchKecamatan } from "../../redux/kecamatan/actions";
import { fetchKelurahan } from "../../redux/kelurahan/actions";

const Editpegawai = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [form, setForm] = useState({
    nama: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    kelurahan: "",
    jalan: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const fetchOnePegawai = async (idpegawai) => {
    const res = await getData(`/pegawai/${idpegawai}`);
    setForm(res.data);
  };

  useEffect(() => {
    fetchOnePegawai(id);
  }, [id]);

  useEffect(() => {
    if (form.provinsi.id) {
      dispatch(fetchKabupaten(form.provinsi.id));
    }
  }, [form.provinsi.id, dispatch]);

  useEffect(() => {
    if (form.kabupaten.id) {
      dispatch(fetchKecamatan(form.kabupaten.id));
    }
  }, [form.kabupaten.id, dispatch]);

  useEffect(() => {
    if (form.kecamatan.id) {
      dispatch(fetchKelurahan(form.kecamatan.id));
    }
  }, [form.kecamatan.id, dispatch]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeData = (e) => {
    setForm({ ...form, [e.name]: e.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await putData(`pegawai/${id}`, form);
      setIsLoading(false);
      navigate("/pegawai");
      setNotif(true, "Berhasil menambahkan data");
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <SLayout>
      <STittleSub1 title="Edit Pegawai" subtitle="Edit data pegawai" />
      <PegawaiForm
        edit={true}
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleChangeData={handleChangeData}
        setForm={setForm}
        loading={isLoading}
      />
    </SLayout>
  );
};

export default Editpegawai;
