import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import OpenEye from "../icons/ojo-abierto.png";
import CloseEye from "../icons/ojo-cerrado.png";
import Return from "../icons/return.png";
import "../styles/password_style.css";


export const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      firstname: userFirstname,
      lastname: userLastname,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (response.ok) {
        alert("¡Usuario registrado con éxito! Ahora inicia sesión.");
        navigate("/login");
      } else {
        alert(data.message || "Error al registrar el usuario");
      }
    } catch (err) {
      console.error("Error en el registro:", err);
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="form_content">
      <Link to="/login" className="btn-exit-login">
        <img src={Return} className="icon"/>
      </Link>

      <div className="form_user">
        <form onSubmit={handleRegister}>
          <h2 className="press-start-2p-regular page--title">Regístrate</h2>

          <input
            type="text"
            placeholder="Nombre de Usuario"
            className="heroui-style-input"
            value={userFirstname}
            onChange={(e) => setUserFirstname(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Apellido"
            className="heroui-style-input"
            value={userLastname}
            onChange={(e) => setUserLastname(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Correo electrónico"
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
            Registrarse
          </button>

          <div>
            <h5>
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login">Inicia sesión aquí.</Link>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
};
