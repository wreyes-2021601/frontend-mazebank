import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/NavBar";
import { AdminPage } from "../pages/AdminPage";
import { UserPage } from "../pages/UserPage";
import HomePage from "../pages/HomePage";
import SuperAdminView from "../../views/SuperAdmin/SuperAdminView";
import TransaccionesAd from "../../views/Admin/components/transacciones/TransaccionesAd";
import ClientesAd from "../../views/Admin/components/clientes/ClientesAd";
import Agregar from "../../views/Admin/components/crud/Agregar";
import Eliminar from "../../views/Admin/components/crud/Eliminar";
import CuentaSad from "../../views/Admin/components/acount/CuentaSad";
import Tarjetas from "../../views/Admin/components/tarjetas/Tarjetas";
import Admins from "../../views/SuperAdmin/components/admins/Admins";
import Historial from "../../views/SuperAdmin/components/historial/Historial";
import AgregarAd from "../../views/SuperAdmin/components/crud/AgregarAd";
import EliminarAd from "../../views/SuperAdmin/components/crud/EliminarAd";
import Cuentaad from "../../views/SuperAdmin/components/acount/Cuentaad";
import Tranferencia from "../../views/Client/components/transferencia/Tranferencia";
import Favoritos from "../../views/Client/components/favoritos/Favoritos";
import Pagar from "../../views/Client/components/pagos/Pagar";
import Configuracion from "../../views/Client/components/configuracion/Configuracion";
import CuentaC from "../../views/Client/components/cuentaC/CuentaC";

export const HeroesRoutes = () => {
  const role = localStorage.getItem('rol');

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="home" element={<HomePage />} />


          <Route
            path="sadmin"
            element={role === 'SUPER_ADMIN_ROLE' ? <SuperAdminView /> : <Navigate to="/home" />}
          />
          <Route
            path="admins"
            element={role === 'SUPER_ADMIN_ROLE' ? <Admins/> : <Navigate to="/home" />}
          />
          <Route
            path="hcuentas"
            element={role === 'SUPER_ADMIN_ROLE' ? <Historial /> : <Navigate to="/home" />}
          />
          <Route
            path="agregarAd"
            element={role === 'SUPER_ADMIN_ROLE' ? <AgregarAd /> : <Navigate to="/home" />}
          />
          <Route
            path="eliminarAd"
            element={role === 'SUPER_ADMIN_ROLE' ? <EliminarAd /> : <Navigate to="/home" />}
          />
          <Route
            path="mySAD"
            element={role === 'SUPER_ADMIN_ROLE' ? <Cuentaad /> : <Navigate to="/home" />}
          />
          <Route
            path="rolesycuentas"
            element={role === 'SUPER_ADMIN_ROLE' ? <SuperAdminView /> : <Navigate to="/home" />}
          />



          {/* Rutas de Admin */}
          <Route
            path="admin"
            element={role === 'ADMIN_ROLE' ? <AdminPage /> : <Navigate to="/home" />}
          />
          <Route
            path="clientes"
            element={role === 'ADMIN_ROLE' ? <ClientesAd /> : <Navigate to="/home" />}
          />
          <Route
            path="htransaccionesad"
            element={role === 'ADMIN_ROLE' ? <TransaccionesAd /> : <Navigate to="/home" />}
          />
          <Route
            path="agregar"
            element={role === 'ADMIN_ROLE' ? <Agregar /> : <Navigate to="/home" />}
          />
          <Route
            path="eliminar"
            element={role === 'ADMIN_ROLE' ? <Eliminar /> : <Navigate to="/home" />}
          />
          <Route
            path="cuentasad"
            element={role === 'ADMIN_ROLE' ? <CuentaSad /> : <Navigate to="/home" />}
          />
          <Route
            path="tarjetas"
            element={role === 'ADMIN_ROLE' ? <Tarjetas /> : <Navigate to="/home" />}
          />




          {/* Rutas de Cliente */}
          <Route
            path="my"
            element={role === 'CLIENTE_ROLE' ? <UserPage /> : <Navigate to="/home" />}
          />
          <Route
            path="transacciones"
            element={role === 'CLIENTE_ROLE' ? <Tranferencia /> : <Navigate to="/home" />}
          />
          <Route
            path="favoritos"
            element={role === 'CLIENTE_ROLE' ? <Favoritos /> : <Navigate to="/home" />}
          />
          <Route
            path="pagos"
            element={role === 'CLIENTE_ROLE' ? <Pagar /> : <Navigate to="/home" />}
          />
          <Route
            path="configuracion"
            element={role === 'CLIENTE_ROLE' ? <Configuracion /> : <Navigate to="/home" />}
          />
          <Route
            path="micuenta"
            element={role === 'CLIENTE_ROLE' ? <CuentaC /> : <Navigate to="/home" />}
          />
          <Route
            path="tarjetas"
            element={role === 'CLIENTE_ROLE' ? <Tarjetas /> : <Navigate to="/home" />}
          />

          {/* Search, Hero by ID */}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </>
  );
};
