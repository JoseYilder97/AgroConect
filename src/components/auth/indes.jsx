import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const url = 'http://localhost:8084/api/auth/register';

  // Removed unused handleChange function

  async function Save(e) {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Validación de campos vacíos
    if (!name || !email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8084/api/auth/register', {
        name,
        email,
        password,

      });

      if (response.data.authStatus === 'USER_CREATE_SUCCESSFULLY') {
        setSuccessMessage(response.data.errorMessage);
        setTimeout(() => {
          window.location = '/login';
        }, 4000);
      } else {
        setError(response.data.errorMessage || 'Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error de registro:', error.response || error);

      if (error.response?.data?.authStatus === 'USER_NOT_CREATED') {
        setError(error.response.data.errorMessage || 'Error en el servidor. Por favor, inténtalo nuevamente.');
      } else {
        setError('Error al registrar, Por favor, inténtalo más tarde.');
      }
    }
  }

  return (
    <div className="login-container">
      <h2>Registrarse</h2>
      <form onSubmit={Save}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        ¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link>
      </p>
    </div>
  );
}

export default Register;