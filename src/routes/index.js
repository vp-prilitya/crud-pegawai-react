import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import SNavbar from "../components/navbar";
import { PegawaiRoute } from "./PegawaiRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SNavbar />
            <Outlet />
          </>
        }
      >
        <Route path="pegawai//*" element={<PegawaiRoute />} />
        <Route path="" element={<Navigate to="/pegawai" replace={true} />} />
      </Route>
    </Routes>
  );
}
