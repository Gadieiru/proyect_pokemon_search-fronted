import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth.jsx";
import { notifyError, notifySuccess } from "../helpers/alert.js";
import { sounds } from "../helpers/soundHelper.js";
import OpenEye from "../icons/ojo-abierto.png";
import CloseEye from "../icons/ojo-cerrado.png";
import Return from "../icons/return.png";
import "../styles/password_style.css";
import "../styles/components.css"

export const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        sounds.playSuccess();
        notifySuccess("¡ÉXITO!", "Sesión iniciada con éxito")
        login(data.token, data.user);

        setTimeout(() => {
        navigate("/Add");
      }, 1000);

      } else {
        console.error("Login rechazado:", data.message);

        
        sounds.playError();
        notifyError("ACCESO DENEGADO", data.message || "Credenciales incorrectas");
      }
    } catch (err) {
      console.error("Error en el login:", err);
      notifyError("ACCESO DENEGADO", data.message || "Credenciales incorrectas");
    }
  };

  return (
    <div className="form_content">
      <Link to="/" className="btn-exit-login"><img src={Return} className="icon"/></Link>

      <div className="form_user">
        <form onSubmit={handleLogin}>
          <h2 className="press-start-2p-regular page--title">Inicia Sesion</h2>

          <input
            type="email"
            placeholder="Email"
            className="heroui-style-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className="heroui-style-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                src={showPassword ? CloseEye : OpenEye}
                alt="Toggle Password"
                className="eye-icon"
              />
            </button>
          </div>

          <button type="submit" className="btn">
            Iniciar Sesion
          </button>

          <div>
            <h5>
              ¿Aun no tienes una cuenta?{" "}
              <Link to="/register">Registrate aqui.</Link>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
};
