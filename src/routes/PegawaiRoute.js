import { Route, Routes } from "react-router-dom";
import Pegawai from "../pages/pegawai";
import CreatePegawai from "../pages/pegawai/create";
import Editpegawai from "../pages/pegawai/edit";

export function PegawaiRoute() {
  return (
    <Routes>
      <Route path="/" element={<Pegawai />} />
      <Route path="/create" element={<CreatePegawai />} />
      <Route path="/edit/:id" element={<Editpegawai />} />
    </Routes>
  );
}
