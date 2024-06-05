import axios from "axios";
import Swal from "sweetalert2";

const URL = 'http://localhost:8080/api/auth/';

export const apiLogin = async (email, password) => {
  try {
    const response = await axios.post(`${URL}login`, {
      correo: email,
      password,
    });
    const token = response?.data?.token; // Verificar si response.data.token existe
    // Guardar token en el almacenamiento local
    token ? localStorage.setItem("token", token) : null;
    if (response) {
      Swal.fire({
        icon: "success",
        title: "¡Genial!",
        text: "¡Ha iniciado sesión con éxito!",
        confirmButtonText: "Ok",
      });
    }
    return response;
  } catch (error) {
    const msg = error?.response?.data?.msg; // Obtener el mensaje de error si está disponible
    Swal.fire({
      icon: "error",
      title: "Error",
      text: msg ? `${msg}` : "Ha ocurrido un error en la solicitud.",
    });
    return false;
  }
};
