import "../index.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login exitoso:', data);
                // Manejar el éxito (por ejemplo, guardar el token en localStorage)
            } else {
                console.error('Error en el login');
            }
        } catch (error) {
            console.error('Error al conectar con el servidor:', error);
        }
    };

    return (
        <div className="items_container_users-admins">
            <div className="items_container_users_admins-login">
                <div className="user_formulary">
                    <h4 className="h4">Login</h4>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            <span className="material-icons">
                                Username
                            </span>
                            <input
                                name="username"
                                type="text"
                                required
                                className="input"
                                placeholder="Ingresa tu correo"
                                value={credentials.username}
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="password">
                            <span className="material-icons">
                                Password
                            </span>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="input"
                                placeholder="Ingresa tu contraseña"
                                value={credentials.password}
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="remember_me" className="remember_me">
                            <span className="material-checkbox">
                                Recordar Contraseña
                            </span>
                            <input
                                type="checkbox"
                                id="remember_me"
                                name="remember_me"
                                className="checkbox"
                            />
                        </label>
                        <div className="user_formulary_ancla">
                            <ul>
                                <li>
                                    <Link to="/">Atrás</Link>
                                </li>
                            </ul>
                            <ul>
                                <p>¿No tienes cuenta?</p>
                                <li>
                                    <Link to="/Register" id="btnRegistro">Regístrate</Link>
                                </li>
                            </ul>
                        </div>
                        <input type="submit" value="Iniciar Sesión" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
